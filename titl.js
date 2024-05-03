var titleText = ['v', 'vh', 'vho', 'vhod', 'vhoda', 'h', 'ho', 'hod', 'hoda', 'oda', 'da', 'a', '$'];
var i = 0;

function loaded() {
    setInterval(loop, 500);
}

function loop() {
    document.getElementsByTagName('title')[0].innerHTML = titleText[i++ % titleText.length];
}

document.addEventListener('DOMContentLoaded', function () {
    loaded();
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.onkeydown = function (event) {
    if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 85 || event.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};

if (window.location.hostname !== 'vhoda.github.io') {
    window.top.location.href = 'https://vhoda.github.io';
}

window.onload = function () {
    var context = new AudioContext();
};
