function lockedProfile() {
    let radios = document.querySelectorAll('input[type=radio]');
    radios.forEach(e=> {
        e.addEventListener('change', changeProfile)
    });

    function changeProfile(e) {
        let target = e.currentTarget;
        let button = target.parentNode.children[10];

        if (target.value === "lock" ) {                
            button.disabled = true; 
        } else {
            button.disabled = false; 
        };
    };
    
    let buttons = document.querySelectorAll('button');
    buttons.forEach(e=> {
        e.disabled = true;
        e.addEventListener('click', clickButton);
    });
    function clickButton(e) {
        let target = e.currentTarget;
        let parent = target.parentNode;
        
        if (target.innerText === 'Show more') {
            target.innerText = 'Hide it';
        } 
        else {
            target.innerText = 'Show more';
        }

        if (document.getElementById(parent.children[9].id).style.display === 'inline') {
            document.getElementById(parent.children[9].id).style.display = 'none';
        } else {
            document.getElementById(parent.children[9].id).style.display = 'inline';
        }
    }
}