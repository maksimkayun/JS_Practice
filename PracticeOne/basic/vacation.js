function checkCaseDiscount(type, count) {
    switch (type) {
        case "Students": {
            if (count >= 30) {
                return 15;
            }
            else {
                return 0;
            }
            
        }
        case "Regular": {
            return count >= 10 && count <= 20 ? 5 : false;
        }
        default: {
            return count >= 100;
        }
    }
}

function CustomParseString(str) {
    arr = str.split(';');
    dict = new Map();
    dict.set(arr[0].split('-')[0], arr[0].split('-')[1]);
    dict.set(arr[1].split('-')[0], arr[1].split('-')[1]);
    dict.set(arr[2].split('-')[0], arr[2].split('-')[1]);
    return dict;
}

function checkCasePriceByDay(type, day) {
    let dict = new Map();
    dict.set('Students', 'Friday-8.45;Saturday-9.80;Sunday-10.46');
    dict.set('Regular', 'Friday-15;Saturday-20;Sunday-22.50');
    dict.set('Corporate', 'Friday-10.90;Saturday-15.60;Sunday-16');

    let strForType = dict.get(type);
    let dictPriceByDay = CustomParseString(strForType);
    let price = dictPriceByDay.get(day);
    return price;
}

function vacation(count, type, day) {
    let discount = checkCaseDiscount(type, count);
    let price = checkCasePriceByDay(type, day);
    var result = parseInt(count) * parseFloat(price);
    switch (type) {
        case "Students": {
            if (discount === 15) {
                result = result - (discount/100)*result;
            }
            break;
        }
        case "Regular": {
            if (discount === 5) {
                result = result - result*(discount/100);
            }
            break;
        }
        default: {
            if (discount) {
                result = parseInt(count - 10) * parceFloat(price);
            }
        }
    }
    console.log(`Total price ${result.toFixed(2)}`);
}

vacation("30", "Students", "Sunday");
vacation("40", "Regular", "Saturday");