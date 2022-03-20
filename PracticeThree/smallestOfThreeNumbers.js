function smallestOf(a, b) {
    return a < b ? a : b
}

console.log(smallestOf(2, smallestOf(5, 3))) 
console.log(smallestOf(600, smallestOf(342, 123))) 
console.log(smallestOf(25, smallestOf(21, 4)))    