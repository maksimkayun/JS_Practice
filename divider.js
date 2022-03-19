function check(num, dividernum) {
    return num % dividernum === 0
}

function divider(num) {
    let result = -1
    let numbersdiv = Array.of(2, 3, 6, 7, 10)

    numbersdiv.forEach(e => {
        if (check(num, e)) {
            result = e
        }
    })
    if (result == -1) {
        console.log(`Число ${num} Не делится`)
    } else {
        console.log(`Число ${num} делится на ${result}`)
    }
}

divider(30)
divider(15)
divider(12)
divider(1643)