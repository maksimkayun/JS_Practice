function calc(a, operator, b) {
    let res = 0
    switch (operator) {
        case '+': {
            res = a + b;
            break;
        }
        case '-': {
            res = a - b;
            break;
        }
        case '*': {
            res = a * b;
            break;
        }
        case '/': {
            res = a / b;
            break;
        }    
        default:
            break;
    }
    console.log(res.toFixed(2));
}

calc(5,'+',10);
calc(25.5,'-',3);
