function convertToDec(number) {
    number = parseInt(number, 2).toString(10);
    console.log(number);
}

convertToDec('00001001');
convertToDec('11110000');