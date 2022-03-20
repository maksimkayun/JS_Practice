function progress(n) {
    let bar = String('%'.repeat(n / 10))
    let points = String('.'.repeat((100-n)/10))
    let str = '[' + bar + points + ']'
    if (n == 100) {
        console.log(`${n}% Complete!`)
        console.log(str)
    }
    else {
        console.log(`${n}% ` + str)
        console.log('Still loading...')
    }
}

progress(30)
progress(50)
progress(100)