function sumOfdigit(number) {
    number = number.toString().split('')
    let sum = 0
    number.forEach(e => {
        sum += parseInt(e)
    });
    console.log(sum)
}

sumOfdigit(245678)
sumOfdigit(97561)
sumOfdigit(543)