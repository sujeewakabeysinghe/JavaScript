const dom = document.getElementById('js');

function date() {
    var date = new Date();
    dom.innerHTML = formatTime(date) ;

    function formatTime(date) {
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var amOrpm = hour >= 12 ? 'PM' : 'AM';
        hour = (hour%12) || 12;
        hour = formatZero(hour);
        min = formatZero(min);
        sec = formatZero(sec);
        return `${hour} : ${min} : ${sec} ${amOrpm}`;
    }

    function formatZero(number) {
        number = number.toString();
        return number.length < 2 ? '0'+number : number;
    }
}

// date();
setInterval(date, 1000);