function solve() {
  let text = document.getElementById('text').value;
  let typeOfText = document.getElementById('naming-convention').value;
  let res = "";
  if (typeOfText === "Camel Case") {
    let arr = text.split(" ");
    let res = "";
    for (let index = 0; index < arr.length; index++) {
      if (index === 0) {
        res += arr[index].charAt(0).toLowerCase() + arr[index].slice(1);
      } else {
        
        res += arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
      }
    }
    document.getElementById('result').innerText = res;
  } 
  else if (typeOfText === "Pascal Case") {
    let arr = text.split(" ");
    let res = "";
    for (let index = 0; index < arr.length; index++) {
      res += arr[index].charAt(0).toUpperCase() + arr[index].slice(1);      
    }
    document.getElementById('result').innerText = res;
  } 
  else {
    document.getElementById('result').innerText = 'Error!';
  }
}