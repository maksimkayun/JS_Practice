function subtract(a, ...params) {    
    return  parseInt(a) + parseInt(params[0]) - parseInt(params[1])
}

console.log(subtract(23, 6, 10))

console.log(subtract(1, 17, 30))

console.log(subtract(42,58,100))
