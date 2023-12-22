//https://www.codewars.com/kata/586e6d4cb98de09e3800014f

const toCents = dollars => Math.round(dollars * 100)

/**
 * Transforms cents to dollars as float
 * @param {number} cents
 */
const toDollars = cents => Math.floor(cents) / 100


class VendingMachine {
    /**
     * Creates a new instance of VendingMachine
     * @param {{ name: string, code: string, quantity: number, price: number }[]} items 
     * @param {number} initialDollars 
     */
    constructor(items, initialDollars) {
        this.items = items
        this.bank = toCents(initialDollars)
    }

    /**
     * Handles vending transaction given a selection and some money
     * @param {string} selection
     * @param {number} cash 
     */
    vend(selection, cash) {
        const code = selection.toUpperCase()
        const cents = toCents(cash)
        const item = this.items.find(item => item.code === code)

        // handle invalid item
        if (!item) return `Invalid selection! : Money in vending machine = ${toDollars(this.bank).toFixed(2)}`

        const price = toCents(item.price);

        // handle insufficient change
        if (price > cents) return 'Not enough money!'

        // handle insufficient stock
        if (item.quantity < 1) return `${item.name}: Out of stock!`

        // ready to vend, update internal state
        const change = cents - price;
        this.bank += price
        item.quantity -= 1

        // handle vending with change
        if (change > 0) return `Vending ${item.name} with ${toDollars(change).toFixed(2)} change.`

        // handle vending with no change
        return `Vending ${item.name}`
    }
}