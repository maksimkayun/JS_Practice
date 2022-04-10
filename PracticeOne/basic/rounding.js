function rounding(input) {
    let num = input.split(',')[0];
    let quantity = input.split(',')[1];

    let calculationProcess = parseFloat(num).toFixed(parseInt(quantity));
    let result = parseFloat(calculationProcess);
    console.log(result);
}

rounding('3.1415926535897932384626433832795,2');
rounding('10.5,3');