var ustawionaGodzina;
var ustawionaMinuta;
var poradnia;

var srednica = 280;
var promienSpotGodzin = srednica * 0.04;
var promienSpotMinut = srednica * 0.02;
var odKrawedzi = (srednica * 0.02);
var promienSrodka = 5;
var promienAmpm =  srednica * 0.07;







function ustawianieGodziny() {


    var x = document.getElementById("godzina");
    var n = new Date().getHours();
    kreskaGodziny.style.display = "block";
    // godzinyspot.style.display = "none";
    kreskaGodziny.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");
    godzinyspot.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");



    if (n > 12) {
        x.innerHTML = (parseInt(window.event.target.id) + 12);
        ustawionaGodzina = parseInt(window.event.target.id) + 12;
        console.log(parseInt(window.event.target.id) + 12);
    }
    else {
        x.innerHTML = (parseInt(window.event.target.id));
        ustawionaGodzina = parseInt(window.event.target.id);
        console.log(parseInt(window.event.target.id));
    }
}
//
//
//
//
//





function ustawianieMinuty() {
    var y = document.getElementById("minuty2");
    y.innerHTML = (window.event.target.id);
    console.log(window.event.target.id);
    kreskaMinuty.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");

    // minutyspot1.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");

    ustawionaMinuta = window.event.target.id;
}





//
//
//
// function ukryjKreske() {
//     kreskaGodziny.style.display = 'none';
// }
//
//
function ktoraGodzina() {


    tarczaGodziny();
//     // wyswietlGodziny();
    spotyGodzin();
    srodekTarczyGodzin();
//     // pokaampm();

    kreskaGodzin();
    poczatkowaGodzina();

    spotAm();
    spotPm();

    var n = new Date().getHours();
    var m = new Date().getMinutes();
    document.getElementById("godzina").innerHTML = n;
    document.getElementById("minuty").innerHTML = m;


    kreskaGodziny.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    godzinyspot.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    // console.log("enka to: " + n);


    if (n <= 12) {

        poradnia = "AM";
        document.getElementById("AmPm").innerHTML = poradnia;
//            console.log("if");
    }

    else {
        poradnia = "PM";
        document.getElementById("AmPm").innerHTML = poradnia;
//            console.log("else");
    }
}

//
//
function pokazPanelMinut() {
    svgMinuty();
    tarczaMinuty();
    spotyMinut();
    srodekTarczyMinut();
    kreskaMinut();


    document.getElementById('stronaDoUstawianiaGodzin').style.display = "none";
    document.getElementById('stronaDoUstawianiaMinut').style.display = "";
    document.getElementById("godzina2").innerHTML = ustawionaGodzina;
    document.getElementById("AmPm2").innerHTML = poradnia;
    document.getElementById("minuty2").innerHTML = new Date().getMinutes();
    kreskaMinuty.setAttribute("transform", "rotate(" + ((new Date().getMinutes() * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
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
        // if (i == 0 || i == 5 || i == 10 || i == 15 || i == 20 || i == 25 || i == 30 || i == 35 || i == 40 || i == 45 || i == 50 || i == 55) {
        if (i % 5 == 0) {
//                console.log("-->>: " + i);
            myCircle.setAttribute("class", "aktywnyspotszaryciemny");
            myCircle.setAttribute("r", promienSpotMinut);
        } else {
//                console.log("else -->>: " + i);
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("r", promienSpotMinut/2);
        }
        myCircle.setAttribute("id", i);
        myCircle.setAttribute("onclick", "pokazKoniec()");
        myCircle.setAttribute("onmouseover", "ustawianieMinuty()");
        // myCircle.setAttribute("onmouseleave", "ukryjKreske()");
        myCircle.setAttribute("cx", (odKrawedzi + (promienSpotMinut)));
        myCircle.setAttribute("cy", srednica * 0.5);

        myCircle.setAttribute("fill", "lightblue");
        myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
        svg.appendChild(myCircle);
    }
}


function spotyGodzin() {
    var svg = document.getElementById("panelGodzin");
    for (var i = 1; i < 13; i++) {
//            console.log("petla: " + i);
        var svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");

        myCircle.setAttribute("class", "aktywnyspotszary");
        myCircle.setAttribute("id", i);
        myCircle.setAttribute("onclick", "pokazPanelMinut()");
        myCircle.setAttribute("onmouseover", "ustawianieGodziny()");
        // myCircle.setAttribute("onmouseleave", "ukryjKreske()");
        myCircle.setAttribute("cx", (odKrawedzi + (promienSpotGodzin)));
        myCircle.setAttribute("cy", srednica * 0.5);
        myCircle.setAttribute("r", promienSpotGodzin);
        myCircle.setAttribute("transform", "rotate( " + ((i * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + ")");
        svg.appendChild(myCircle);
    }
}

//
function tarczaGodziny() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    // myCircle.setAttribute("id", "tarcza");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica * 0.5);
    // myCircle.setAttribute("opacity", 0.5);
    // myCircle.setAttribute("fill", "#e0e0e0");

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
    myCircle.setAttribute("fill", "#e0e0e0");
    // myCircle.setAttribute("fill", "green");
    svg.appendChild(myCircle);
}


// function wyswietlGodziny() {
//
//     for (var i = 1; i < 13; i++) {
//         var svg = document.getElementById("panelGodzin");
//         var svgNS = "http://www.w3.org/2000/svg";
//         var myText = document.createElementNS(svgNS, "text");
//         // console.log("petla godzin");
//
//         myText.setAttribute("class", "a01");
//         myText.setAttribute("id", i);
//         myText.setAttribute("x", 10);
//         myText.setAttribute("y", 100);
//         myText.textContent = i;
//         myText.setAttribute("transform", "rotate( " + (i + 1) * 30 + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
//         svg.appendChild(myText);
//     }
// }
//
//
function poczatkowaGodzina() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "godzinyspot");

    myCircle.setAttribute("onclick", "pokazPanelMinut()");

    myCircle.setAttribute("cx", (odKrawedzi + (promienSpotGodzin)));
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", promienSpotGodzin);
    // myCircle.setAttribute("fill", "red");
    svg.appendChild(myCircle);
}






function poczatkowaMinuta() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot1");
    myCircle.setAttribute("id", "minutyspot1");

    myCircle.setAttribute("onclick", "pokazKoniec()");
    myCircle.setAttribute("onmouseover", "ustawianieMinuty()");

    myCircle.setAttribute("cx", (odKrawedzi + (promienSpotGodzin)));
    myCircle.setAttribute("cy", srednica * 0.5);
    // myCircle.setAttribute("r", promienSpotGodzin);
    myCircle.setAttribute("r", 30);
    myCircle.setAttribute("fill", "red");
    svg.appendChild(myCircle);
}






function kreskaGodzin() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaGodziny");
    myLine.setAttribute("x1", (srednica * 0.5) - promienSrodka);
    myLine.setAttribute("y1", srednica * 0.5);
    myLine.setAttribute("x2", (odKrawedzi + (promienSpotGodzin * 2)));
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
    myLine.setAttribute("x2", (odKrawedzi + (promienSpotMinut * 2)));
    myLine.setAttribute("y2", srednica * 0.5);
    svg.appendChild(myLine);
}



function srodekTarczyGodzin() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowuspot");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", promienSrodka);
    // myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
}


function srodekTarczyMinut() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowuspot");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", promienSrodka);
    // myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
}


function svgGodziny() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelGodzin");
    svg.setAttribute("width", srednica);
    svg.setAttribute("height", srednica);
    // svg.setAttribute("fill", "red");
    var div = document.getElementById("stronaDoUstawianiaGodzin");
    div.appendChild(svg);
}



function svgMinuty() {


    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelMinut");
    svg.setAttribute("width", srednica);
    svg.setAttribute("height", srednica);
    //  svg.setAttribute("fill", "red");
    var div = document.getElementById("stronaDoUstawianiaMinut");
    div.appendChild(svg);

// <svg width="180" height="180"  id="panelGodzin">

}
//
//
// function pokaampm() {
//
//
//     var svg = document.getElementById("panelGodzin");
//     var svgNS = "http://www.w3.org/2000/svg";
//     var myText = document.createElementNS(svgNS, "text");
//     // console.log("petla godzin");
//
//     myText.setAttribute("class", "pmam");
//     myText.setAttribute("id", "AmPm");
//     myText.setAttribute("x", (srednica * 0.5) - (srednica * 0.03));
//     myText.setAttribute("y", (srednica * 0.5) + (srednica * 0.015));
//     myText.textContent = "@@";
//     svg.appendChild(myText);
//
//
// // <text class="pmam" id="AmPm" x="190" y="95"></text>
// }
//
//
//
// function zmianaAmPm() {
//
//     if (document.getElementById("AmPm").innerHTML == "AM") {
//         document.getElementById("AmPm").innerHTML = "PM";
//         console.log(parseInt(ustawionaGodzina) + 12);
//         ustawionaGodzina = ustawionaGodzina + 12;
//         document.getElementById("godzina").innerHTML = (parseInt(ustawionaGodzina));
//
//
//     } else if (document.getElementById("AmPm").innerHTML == "PM") {
//         document.getElementById("AmPm").innerHTML = "AM";
//         console.log(parseInt(ustawionaGodzina) - 12);
//         ustawionaGodzina = ustawionaGodzina - 12;
//
//         document.getElementById("godzina").innerHTML = (parseInt(ustawionaGodzina));
//
//     }
//     else {
//     }
//
// }
//

function spotPm() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowuspot");
    myCircle.setAttribute("cx", srednica-(promienAmpm) );
    myCircle.setAttribute("cy", srednica-(promienAmpm));
    myCircle.setAttribute("r", promienAmpm);
    // myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
}



function spotAm() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowuspot");
    myCircle.setAttribute("cx", (promienAmpm) );
    myCircle.setAttribute("cy", srednica-(promienAmpm));
    myCircle.setAttribute("r", promienAmpm);
    // myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
}






svgGodziny();




ktoraGodzina();
