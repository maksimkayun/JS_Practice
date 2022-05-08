function addItem() {
    let text = document.getElementById('newItemText').value;
    let val = document.getElementById('newItemValue').value;

    const list = document.getElementById('menu');
    list.appendChild(new Option(text, val));
}