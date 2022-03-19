function solve(arr) {
    let sumBase = 0
    arr.forEach(e => {
        sumBase += e
    });

    let sumAfter = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            arr[index] = arr[index] + index;
        } 
        else {
            arr[index] = arr[index] - index;
        }   
        sumAfter += arr[index]  
    }
    
    console.log(arr)
    console.log(sumBase)
    console.log(sumAfter)
}

solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])