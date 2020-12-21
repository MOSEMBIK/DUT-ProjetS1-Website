var i = 0;
var txt = 'cybersecurite - pentester';
var speed = 130;

function typeWriter() {

    if (i < txt.length) {
        if (txt.charAt(i) == '/') {
            document.getElementById("transition1").innerHTML += '<br>';
        } else {
            document.getElementById("transition1").innerHTML += txt.charAt(i);
        }

    }

    i++;
    setTimeout(typeWriter, speed);
}