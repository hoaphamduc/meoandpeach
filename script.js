var welcomeElement = document.getElementById("welcome");
var text = "Tính đến hôm nay Mèo và Pít đã yêu nhau được " + countDays('2023-08-18') + " ngày. Hãy xem lại hành trình của chúng mình trong thời gian qua nhé!";
welcomeElement.innerHTML = "";

function typeWriter(text, i) {
    if (i < text.length) {
        welcomeElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 50);
    }
}

window.onload = function() {
    typeWriter(text, 0);
};

function countDays(startDate) {
    var today = new Date();
    var startDateObj = new Date(startDate);
    var timeDiff = today.getTime() - startDateObj.getTime();
    var daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

function start() {
    var welcome = document.getElementById("start");
    var content = document.getElementById("content");
    var music = document.getElementById("music");

    welcome.style.display = "none";
    content.style.display = "flex";
    music.play();
}