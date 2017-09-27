var godziny = document.getElementById("godziny");
var godzinyspot = document.getElementById("godzinyspot");


function ktoraGodzina() {
    var n = new Date().getHours();
    document.getElementById("aktualnaGodzina").innerHTML = n;
    document.getElementById("godzina").innerHTML = n;
    godziny.setAttribute("transform", "rotate(" + ((n * 30) + 90) + ", 150, 250)");
    godzinyspot.setAttribute("transform", "rotate(" + ((n * 30) + 90) + ", 150, 250)");
}


ktoraGodzina();


function okno() {
    var x = document.getElementById("godzina");
    x.innerHTML = (window.event.target.id);
    console.log(window.event.target.id);
    godzinyspot.style.display = 'none';
    godziny.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + ", 150, 250)");
}
