function toggle() {
    if (document.getElementsByClassName('button')[0].outerText === 'MORE') {
        document.getElementsByClassName('button')[0].textContent = 'LESS'
        document.getElementById('extra').style.display = 'inline';
    } else {
        document.getElementsByClassName('button')[0].textContent = 'MORE'
        document.getElementById('extra').style.display = 'none';
    }
    
}