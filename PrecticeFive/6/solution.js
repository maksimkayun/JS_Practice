function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type=button]')
    buttons[0].addEventListener('click', clickDays);
    buttons[1].addEventListener('click', clickHours);
    buttons[2].addEventListener('click', clickMinutes);
    buttons[3].addEventListener('click', clickSeconds);

    function clickDays(e) {
        let val = document.getElementById("days").value;
        document.getElementById("hours").value = val * 24;
        document.getElementById("minutes").value = val * 24 * 60;
        document.getElementById("seconds").value = val * 24 * 60 * 60;
    }
    function clickHours(e) {
        let val = document.getElementById("hours").value;
        document.getElementById("days").value = val / 24;
        document.getElementById("minutes").value = val * 60;
        document.getElementById("seconds").value = val * 60 * 60;
    }
    function clickMinutes(e) {
        let val = document.getElementById("minutes").value;
        document.getElementById("days").value = val / 60 / 24;
        document.getElementById("hours").value = val / 60;
        document.getElementById("seconds").value = val * 60;
    }
    function clickSeconds(e) {
        let val = document.getElementById("seconds").value;
        document.getElementById("days").value = val / 60 / 60 / 24;
        document.getElementById("hours").value = val / 60 / 60;
        document.getElementById("minutes").value = val / 60;
    }
}