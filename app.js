var t = 0;
function myFunction() {
    var x = document.getElementById('frm1');
    var hr = x.elements[0].value;
    var min = x.elements[1].value;
    var sec = x.elements[1].value;
    window.t = hr * 3600 + min * 60 + sec * 60;
    window.total = window.t;
    timer();
}
function timer() {
    var temp = window.t;
    window.t = window.t - 1;
    var h = Math.floor(temp / 3600);
    var m = Math.floor((temp % 3600) / 60);
    var s = Math.floor(temp - 3600 * h - 60 * m);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('demo').innerHTML = h + "hr:" + m + "min:" + s + "sec";
    document.getElementById('progress-bar').style.width = (temp * 100) / window.total + "%";
    var t = setTimeout(timer, 1000);
    if (temp < 0) {
        clearInterval(t);
        document.getElementById('demo').innerHTML = "Time Over";
        var aud = document.getElementById('audio');
        aud.play();

    }
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


