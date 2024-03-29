//https://www.codewars.com/kata/5882b052bdeafec15e0000e6/train/javascript

class Quark {
    constructor(color, flavor) {
        Object.assign(this, { color, flavor, baryon_number: 1 / 3 });
    }

    interact(quark) {
        [this.color, quark.color] = [quark.color, this.color];
    }
}