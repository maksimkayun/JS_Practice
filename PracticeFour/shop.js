class Product {
    name
    quantity
    constructor(name, quantity) {
        this.name = name
        this.quantity = quantity
    }

    increase(num) {
        this.quantity = parseInt(this.quantity) + parseInt(num)
    } 
}

function convertToProductsList(input) {
    let products = []
    for (let i = 0; i < input.length - 1; i += 2) {
        products.push(new Product(input[i], input[i + 1]))
    }
    return products
}

function contains(list, product) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === product.name) {
            return true
        }
    }
    return false
}

function findAndIncrease(list, product) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === product.name) {
            list[i].increase(product.quantity)
        }
    }
}

function solve(current, ordered) {
    current = convertToProductsList(current)
    ordered = convertToProductsList(ordered)

    for (let i = 0; i < ordered.length; i++) {
        if (contains(current, ordered[i])) {
            findAndIncrease(current, ordered[i])
        } else {
            current.push(ordered[i])
        }
    }

    current.forEach(p => {
        console.log(`${p.name} -> ${p.quantity}`)
    });
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])