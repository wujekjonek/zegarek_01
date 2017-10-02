// var godziny = document.getElementById("godziny");
// var godzinyspot = document.getElementById("godzinyspot");
var ustawionaGodzina;
var ustawionaMinuta;
var poradnia;

var srednica = 180;


function zmianaAmPm() {

    if (document.getElementById("AmPm2").innerHTML == "AM") {
        document.getElementById("AmPm2").innerHTML = "PM";
        console.log(parseInt(ustawionaGodzina) + 12);
        ustawionaGodzina = ustawionaGodzina + 12;
        document.getElementById("godzina2").innerHTML = (parseInt(ustawionaGodzina) );


    } else if (document.getElementById("AmPm2").innerHTML == "PM") {
        document.getElementById("AmPm2").innerHTML = "AM";
        console.log(parseInt(ustawionaGodzina) - 12);
        ustawionaGodzina = ustawionaGodzina - 12;

        document.getElementById("godzina2").innerHTML = (parseInt(ustawionaGodzina));

    }
    else {
    }

}


function ustawianieGodziny() {


    var x = document.getElementById("godzina");
    var n = new Date().getHours();
    kreskaGodziny.style.display = "block";
    godzinyspot.style.display = "none";
    kreskaGodziny.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");

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


function ustawianieMinuty() {
    var y = document.getElementById("minuty2");


    y.innerHTML = (window.event.target.id);
    console.log(window.event.target.id);
    kreskaMinuty.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica / 2 + " ," + srednica / 2 + "   )");


    ustawionaMinuta = window.event.target.id;
}


function ukryjKreske() {
    kreskaGodziny.style.display = 'none';
}


function ktoraGodzina() {


    tarczaGodziny();
    kreskaGodzin();
    poczatkowaGodzina();
    wyswietlGodziny();
    spotyGodzin();
    srodekTarczyGodzin();

    var n = new Date().getHours();
    var m = new Date().getMinutes();
    document.getElementById("godzina").innerHTML = n;
    document.getElementById("minuty").innerHTML = m;


    kreskaGodziny.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");
    godzinyspot.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");
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


function pokazPanelMinut() {
    svgMinuty();
    tarczaMinuty();
    spotyMinut();
    kreskaMinut();
    srodekTarczyMinut();


    document.getElementById('stronaDoUstawianiaGodzin').style.display = "none";
    document.getElementById('stronaDoUstawianiaMinut').style.display = "";
    //   var x = document.getElementById("godzina2");
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
//        var div = document.getElementById("stronaDoUstawianiaMinut");
    var svg = document.getElementById("panelMinut");
//        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//        svg.setAttribute("width", "300");
//        svg.setAttribute("height", "400");
//        div.appendChild(svg);
//        svg.innerHTML =  "";

    for (var i = 0; i < 60; i++) {
//            console.log("petla: " + i);
        var svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
        if (i == 0 || i == 5 || i == 10 || i == 15 || i == 20 || i == 25 || i == 30 || i == 35 || i == 40 || i == 45 || i == 50 || i == 55) {
//                console.log("-->>: " + i);
            myCircle.setAttribute("class", "aktywnyspot");
        } else {
//                console.log("else -->>: " + i);
            myCircle.setAttribute("class", "spot");
        }
        myCircle.setAttribute("id", i);
        myCircle.setAttribute("onclick", "pokazKoniec()");
        myCircle.setAttribute("onmouseover", "ustawianieMinuty()");
        myCircle.setAttribute("onmouseleave", "ukryjKreske()");
        myCircle.setAttribute("cx", srednica * 0.05);
        myCircle.setAttribute("cy", srednica * 0.5);
        myCircle.setAttribute("r", srednica * 0.025);
        myCircle.setAttribute("fill", "lightblue");
        myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
        svg.appendChild(myCircle);
    }
}


function spotyGodzin() {
//        var div = document.getElementById("stronaDoUstawianiaMinut");
    var svg = document.getElementById("panelGodzin");
//        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//        svg.setAttribute("width", "300");
//        svg.setAttribute("height", "400");
//        div.appendChild(svg);
//        svg.innerHTML =  "";

    for (var i = 1; i < 13; i++) {
//            console.log("petla: " + i);
        var svgNS = "http://www.w3.org/2000/svg";
        var myCircle = document.createElementNS(svgNS, "circle");
//         if (i == 0 || i == 5 || i == 10 || i == 15 || i == 20 || i == 25 || i == 30 || i == 35 || i == 40 || i == 45 || i == 50 || i == 55) {
// //                console.log("-->>: " + i);
//             myCircle.setAttribute("class", "aktywnyspot");
//         } else {
// //                console.log("else -->>: " + i);
//             myCircle.setAttribute("class", "spot");
//         }


        myCircle.setAttribute("class", "spot");
        myCircle.setAttribute("id", i);
        myCircle.setAttribute("onclick", "pokazPanelMinut()");
        myCircle.setAttribute("onmouseover", "ustawianieGodziny()");
        myCircle.setAttribute("onmouseleave", "ukryjKreske()");
        myCircle.setAttribute("cx", srednica * 0.5);
        myCircle.setAttribute("cy", srednica * 0.1);
        myCircle.setAttribute("r", srednica *0.075);
        // myCircle.setAttribute("fill", "lightblue");
        myCircle.setAttribute("transform", "rotate( " + i * 30 + "," + srednica / 2 + " ," + srednica / 2 + ")");
        svg.appendChild(myCircle);
    }
}


function tarczaGodziny() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("id", "tarcza");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica * 0.5);
    myCircle.setAttribute("opacity", 0.5);
    myCircle.setAttribute("fill", "#e0e0e0");
    // myCircle.setAttribute("fill", "red");
    svg.appendChild(myCircle);

}


function tarczaMinuty() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("id", "tarcza");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica * 0.5);
    myCircle.setAttribute("fill", "#e0e0e0");
    // myCircle.setAttribute("fill", "green");
    svg.appendChild(myCircle);

}


function kreskaMinut() {

    var x2 = (srednica * 0.025) * 3;
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaMinuty");
    myLine.setAttribute("x1", srednica * 0.5);
    myLine.setAttribute("y1", srednica * 0.5);
    myLine.setAttribute("x2", x2);
    myLine.setAttribute("y2", srednica * 0.5);
    svg.appendChild(myLine);
}


// <line class="line" id="kreskaMinuty" x1="145" y1="250" x2="59" y2="250"></line>


function wyswietlGodziny() {

    for (var i = 1; i < 13; i++) {
        var svg = document.getElementById("panelGodzin");
        var svgNS = "http://www.w3.org/2000/svg";
        var myText = document.createElementNS(svgNS, "text");
        // console.log("petla godzin");

        myText.setAttribute("class", "a01");
        myText.setAttribute("id", i);
        myText.setAttribute("x", 10);
        myText.setAttribute("y", 100);
        myText.textContent = i;
        myText.setAttribute("transform", "rotate( " + (i + 3) * 30 + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
        // myText.setAttribute("transform", "rotate( " + (i + 3) * 30 + "," + myText.getAttribute("x") + " ," + myText.getAttribute("y") + ")");
        // myText.setAttribute("transform", "rotate( " + (i + 3) * 30 + ",10 ,10)");


        svg.appendChild(myText);
    }
}

function poczatkowaGodzina() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "godzinyspot");
    myCircle.setAttribute("cx", srednica *0.1);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica *0.075);
    // myCircle.setAttribute("fill", "red");
    svg.appendChild(myCircle);

}

function kreskaGodzin() {

    var x22 = (srednica  * 0.075)*2;
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaGodziny");
    myLine.setAttribute("x1", srednica * 0.5);
    myLine.setAttribute("y1", srednica * 0.5);
    myLine.setAttribute("x2", x22);
    myLine.setAttribute("y2", srednica * 0.5);
    svg.appendChild(myLine);
}


function srodekTarczyGodzin() {
    var svg = document.getElementById("panelGodzin");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica / 25);
    svg.appendChild(myCircle);
}


function srodekTarczyMinut() {
    var svg = document.getElementById("panelMinut");
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "1aktywnyspot");
    myCircle.setAttribute("cx", srednica * 0.5);
    myCircle.setAttribute("cy", srednica * 0.5);
    myCircle.setAttribute("r", srednica * 0.1);
    myCircle.setAttribute("fill", "green");
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

// <svg width="180" height="180"  id="panelGodzin">

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






svgGodziny();


ktoraGodzina();

