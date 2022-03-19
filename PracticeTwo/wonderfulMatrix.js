function convert(arr2arr) {
    let result = []
    for (let i = 0; i < arr2arr[0].length; i++) {
        let column = []
        for (let j = 0; j < arr2arr.length; j++) {
            column[j] = arr2arr[j][i] 
        }
        result[i] = column
    }
    return result
}

function solve(arrstrings) {
    arrcolumns = convert(arrstrings)
    let controlsum = 0
    for (let i = 0; i < arrcolumns[0].length; i++) {
        controlsum += arrcolumns[0][i]
    }

    boolRes = true
    for (let i = 0; i < arrcolumns.length; i++) {
        let currentsum = 0
        arrcolumns.forEach(e => {
            currentsum += parseInt(e)
        });
        if (currentsum != controlsum) {
            boolRes = false
            break;
        }
        currentsum = 0
    }
    for (let i = 0; i < arrstrings.length; i++) {
        let currentsum = 0
        arrstrings.forEach(e => {
            currentsum += parseInt(e)
        });
        if (currentsum != controlsum) {
            boolRes = false
            break;
        }
        currentsum = 0
    }
    
    console.log(boolRes)
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    )
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
    )