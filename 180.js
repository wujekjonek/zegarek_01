var ustawionaGodzina;
var ustawionaMinuta;
var poradnia;

var srednica = 250;
// var promienSpotGodzin = (srednica * 0.04);
// var promienSpotMinut = (srednica * 0.02);
// var odKrawedzi = (srednica * 0.02);
// var promienSrodka = (srednica * 0.01);
// var promienAmpm = (srednica * 0.07);


function svgGodziny() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelGodzin");
    svg.setAttribute("width", srednica);
    svg.setAttribute("height", srednica);
    var div = document.getElementById("stronaDoUstawianiaGodzin");
    div.appendChild(svg);
}


function ktoraGodzina() {
    tarczaGodziny();
    spotyGodzin();
    srodekTarczyGodzin();
    kreskaGodzin();
    poczatkowaGodzina();
    guzikTest();

    var n = new Date().getHours();
    var m = new Date().getMinutes();
    ustawionaGodzina = n;
    document.getElementById("godzina").innerHTML = n;
    document.getElementById("minuty").innerHTML = m;
    kreskaGodziny.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    godzinyspot.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");

    if (n <= 12) {
        poradnia = "AM";
        document.getElementById("AmPm").innerHTML = poradnia;
        console.log("@@@@@@@   n <= 12");
    }

    else {
        poradnia = "PM";
        document.getElementById("AmPm").innerHTML = poradnia;
        console.log("@@@@@@@   else");
    }
}


function ustawianieGodziny() {
    var x = document.getElementById("godzina");
    kreskaGodziny.style.display = "block";
    kreskaGodziny.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");
    godzinyspot.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");

    if (document.getElementById("AmPm").innerHTML == "PM") {
        x.innerHTML = (parseInt(window.event.target.id) + 12);
        ustawionaGodzina = parseInt(window.event.target.id) + 12;

    }
    else {
        x.innerHTML = (parseInt(window.event.target.id));
        ustawionaGodzina = parseInt(window.event.target.id);
    }
}


function ustawianieMinuty() {
    var y = document.getElementById("minuty2");
    y.innerHTML = (window.event.target.id);
    console.log(window.event.target.id);
    kreskaMinuty.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");
    minutyspot1.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    ustawionaMinuta = window.event.target.id;
}


function pokazPanelMinut() {
    svgMinuty();
    tarczaMinuty();
    spotyMinut();
    srodekTarczyMinut();
    kreskaMinut();
    poczatkowaMinuta();
    document.getElementById('stronaDoUstawianiaGodzin').style.display = "none";
    document.getElementById('stronaDoUstawianiaMinut').style.display = "";
    document.getElementById("godzina2").innerHTML = ustawionaGodzina;
    // document.getElementById("AmPm2").innerHTML = poradnia;
    document.getElementById("minuty2").innerHTML = new Date().getMinutes();
    kreskaMinuty.setAttribute("transform", "rotate(" + ((new Date().getMinutes() * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    minutyspot1.setAttribute("transform", "rotate(" + ((new Date().getMinutes() * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
}


function pokazKoniec() {
    document.getElementById('stronaDoUstawianiaMinut').style.display = "none";
    document.getElementById('stronaKoncowa').style.display = "";
    document.getElementById("godzina3").innerHTML = ustawionaGodzina;
    document.getElementById("minuty3").innerHTML = ustawionaMinuta;
}


function spotyMinut() {
    var svg = document.getElementById("panelMinut");
    for (var i = 0; i < 60; i++) {
        var svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        if (i % 5 == 0) {
            myCircle.setAttribute("class", "aktywnyspotszaryciemny");
            myCircle.setAttribute("r", (srednica * 0.02));
        } else {
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("r", (srednica * 0.02) / 2);
        }
        myCircle.setAttribute("id", i);
        myCircle.setAttribute("onclick", "pokazKoniec()");
        myCircle.setAttribute("onmouseover", "ustawianieMinuty()");
        myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.02))));
        myCircle.setAttribute("cy", srednica * 0.5);
        myCircle.setAttribute("fill", "lightblue");
        myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
        svg.appendChild(myCircle);
    }
}


function spotyGodzin() {
    var svg = document.getElementById("panelGodzin");
    for (var i = 1; i < 13; i++) {
        var svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspotszary");
        myCircle.setAttribute("id", i);
        myCircle.setAttribute("onclick", "pokazPanelMinut()");
        myCircle.setAttribute("onmouseover", "ustawianieGodziny()");
        myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.04))));
        myCircle.setAttribute("cy", srednica * 0.5);
        myCircle.setAttribute("r", (srednica * 0.04));
        myCircle.setAttribute("transform", "rotate( " + ((i * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + ")");
        svg.appendChild(myCircle);
    }
}


function tarczaGodziny() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    // myCircle.setAttribute("id", "tarcza");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica * 0.5);
    svg.appendChild(myCircle);
}


function tarczaMinuty() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica * 0.5);
    svg.appendChild(myCircle);
}


function poczatkowaGodzina() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "godzinyspot");
    myCircle.setAttribute("onclick", "pokazPanelMinut()");
    myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.04))));
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", (srednica * 0.04));
    svg.appendChild(myCircle);
}


function poczatkowaMinuta() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "minutyspot1");
    myCircle.setAttribute("onclick", "pokazKoniec()");
    myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.02))));
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", (srednica * 0.02));
    svg.appendChild(myCircle);
}


function kreskaGodzin() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaGodziny");
    myLine.setAttribute("x1", (srednica * 0.5) - (srednica * 0.01));
    myLine.setAttribute("y1", srednica * 0.5);
    myLine.setAttribute("x2", ((srednica * 0.02) + ((srednica * 0.04) * 2)));
    myLine.setAttribute("y2", srednica * 0.5);
    svg.appendChild(myLine);
}


function kreskaMinut() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaMinuty");
    myLine.setAttribute("x1", srednica * 0.5);
    myLine.setAttribute("y1", srednica * 0.5);
    myLine.setAttribute("x2", ((srednica * 0.02) + ((srednica * 0.02) * 2)));
    myLine.setAttribute("y2", srednica * 0.5);
    svg.appendChild(myLine);
}


function srodekTarczyGodzin() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", (srednica * 0.01));
    svg.appendChild(myCircle);
}


function srodekTarczyMinut() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", (srednica * 0.01));
    // myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
}


function svgMinuty() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelMinut");
    svg.setAttribute("width", srednica);
    svg.setAttribute("height", srednica);
    var div = document.getElementById("stronaDoUstawianiaMinut");
    div.appendChild(svg);
}


function zmianaAmPm() {
    if (document.getElementById("AmPm").innerHTML == "AM") {
        document.getElementById("AmPm").innerHTML = "PM";
        ustawionaGodzina = (parseInt(ustawionaGodzina) + 12);
        document.getElementById("godzina").innerHTML = (parseInt(ustawionaGodzina));

    } else if (document.getElementById("AmPm").innerHTML == "PM") {
        document.getElementById("AmPm").innerHTML = "AM";
        ustawionaGodzina = (parseInt(ustawionaGodzina) - 12);
        document.getElementById("godzina").innerHTML = (parseInt(ustawionaGodzina));
    }
    else {
    }
}


function guzikTest() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "ampmspot");
    myCircle.setAttribute("cx", (srednica / 2));
    myCircle.setAttribute("cy", (srednica - (srednica * 0.07) * 5));
    myCircle.setAttribute("r", srednica * 0.07);
    myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
    var myText = document.createElementNS(svgNS, "text");
    myText.setAttribute("class", "ampmtext");
    myText.setAttribute("id", "AmPm");
    myText.setAttribute("x", srednica / 2 - ( +((srednica * 0.07) * 0.67)));
    myText.setAttribute("y", srednica / 2 + ((srednica * 0.07) * 2.47));
    myText.setAttribute("onclick", "zmianaAmPm()");
    myText.setAttribute("font-size", (srednica * 0.07) * 0.9);
    myText.textContent = poradnia;
    svg.appendChild(myText);
}


svgGodziny();
ktoraGodzina();



