//https://www.codewars.com/kata/55aa170b54c32468c30000a9

const LOOKUP = { null: null, true: true, false: false }
const PATTERNS = [
    [/^([:,\[\]\{\}])/, (x) => ({ kind: x, value: null })],
    [/^(-?(0|[1-9]\d*)(\.\d+)?)/, (x) => ({ kind: 'number', value: Number(x) })],
    [/^"([^"]*)"/, (x) => ({ kind: 'string', value: x })],
    [/^(null|true|false)/, (x) => ({ kind: 'keyword', value: LOOKUP[x] })],
]

function tokenize(source) {
    const tokens = []
    let pos = 0

    parse: while (pos < source.length) {
        const ch = source[pos]
        if (ch === ' ' || ch === '\t' || ch === '\r' || ch === '\n') {
            pos++
        } else {
            const slice = source.slice(pos)
            for (let i = 0; i < PATTERNS.length; i++) {
                const [pattern, createToken] = PATTERNS[i]
                const match = slice.match(pattern)
                if (match) {
                    tokens.push(createToken(match[1]))
                    pos += match[0].length
                    continue parse
                }
            }

            throw new Error(`Unexpected character "${ch}"`)
        }
    }

    return tokens
}

function parse(source) {
    const tokens = tokenize(source)

    const peek = () => tokens[0]
    const next = () => tokens.shift()
    const unexpected = () => new Error(`Unexpected token "${peek().kind}"`)

    function expect(kind) {
        if (peek().kind === kind) return next()
        throw unexpected()
    }

    function any(open, separator, close, ctx, fn) {
        expect(open)
        let first = true
        while (peek().kind !== close) {
            if (first) {
                first = false
            } else {
                expect(separator)
            }

            fn(ctx)
        }
        expect(close)
        return ctx
    }

    function parseValue() {
        switch (peek().kind) {
            case '[': return parseArray()
            case '{': return parseObject()
            case 'keyword':
            case 'number':
            case 'string':
                return next().value
        }
        throw unexpected()
    }

    function parseArray() {
        return any('[', ',', ']', [], (a) => {
            a.push(parseValue())
        })
    }

    function parseObject() {
        return any('{', ',', '}', {}, (o) => {
            o[expect('string').value] = expect(':') && parseValue()
        })
    }

    const result = parseValue()
    if (tokens.length > 0) throw unexpected()

    return result
}