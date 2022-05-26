import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        console.log(`${this.sonido}`)
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() {
        console.log(`${this.sonido}`)
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir() {
        console.log(`${this.sonido}`)
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() {
        console.log(`${this.sonido}`)
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        console.log(`${this.sonido}`)
    }
}

// let aGGG = new Aguila('cacaca', '45', 'uh', 'hola hola', 'vuuuu')
// console.log(aGGG)
// console.log(aGGG.edad)
export {Leon, Lobo, Oso, Serpiente, Aguila}