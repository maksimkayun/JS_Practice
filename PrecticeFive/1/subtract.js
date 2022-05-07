function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secNum = document.getElementById('secondNumber').value;
    let res = parseFloat(firstNum) - parseFloat(secNum);

    document.getElementById('result').innerText = res;
}