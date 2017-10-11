// let ustawionaGodzina;
// let ustawionaMinuta;
// let poradnia;
// let srednica = 250;


// let promienSpotGodzin = (srednica * 0.04);
// let promienSpotMinut = (srednica * 0.02);
// let odKrawedzi = (srednica * 0.02);
// let promienSrodka = (srednica * 0.01);
// let promienAmpm = (srednica * 0.07);




function svgGodziny() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelGodzin");
    svg.setAttribute("width", srednica.toString());
    svg.setAttribute("height", srednica.toString());
    let div = document.getElementById("stronaDoUstawianiaGodzin");
    div.appendChild(svg);
}


function ktoraGodzina() {

    srednica = 180;
    poradnia = "";
    divGodziny();
    svgGodziny();
    tarczaGodziny();
    spotyGodzin();
    srodekTarczyGodzin();
    kreskaGodzin();
    poczatkowaGodzina();
    guzikTest();
    let n = new Date().getHours();
    m = new Date().getMinutes();
    ustawionaGodzina = n;

    document.getElementById("godzina").innerHTML = n.toString();
    document.getElementById("minuty").innerHTML = m.toString();

    document.getElementById("wybierzDate").value =  n+":"+m;






    kreskaGodziny.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    godzinyspot.setAttribute("transform", "rotate(" + ((n * 30) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");

    if (n <= 12) {
        poradnia = "AM";
        document.getElementById("AmPm").innerHTML = poradnia;
    }

    else {
        poradnia = "PM";
        document.getElementById("AmPm").innerHTML = poradnia;
    }
}


function ustawianieGodziny() {
    let x = document.getElementById("godzina");
    let xx = document.getElementById("wybierzDate");
    kreskaGodziny.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");
    godzinyspot.setAttribute("transform", "rotate(" + ((window.event.target.id * 30) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");

    if (document.getElementById("AmPm").innerHTML === "PM") {
        x.innerHTML = (parseInt(window.event.target.id) + 12);
        xx.value=(parseInt(window.event.target.id) + 12)+"#"+ m;


        ustawionaGodzina = (parseInt(window.event.target.id) + 12);

    }
    else {
        x.innerHTML = (parseInt(window.event.target.id));
        xx.value= (parseInt(window.event.target.id)+"@"+ m);
        ustawionaGodzina = parseInt(window.event.target.id);

 // todo powyszsza linijke sprawdzic rano przed 12 *************************************

    }
}


function ustawianieMinuty() {

    let y = document.getElementById("minuty2");
    y.innerHTML = (window.event.target.id);

    document.getElementById("wybierzDate").value = ustawionaGodzina+":"+(window.event.target.id);


    kreskaMinuty.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica / 2 + "," + srednica / 2 + ")");
    minutyspot1.setAttribute("transform", "rotate(" + ((window.event.target.id * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    ustawionaMinuta = window.event.target.id;
}


function pokazPanelMinut() {

    divMinuty();
    svgMinuty();
    tarczaMinuty();
    spotyMinut();
    srodekTarczyMinut();
    kreskaMinut();
    poczatkowaMinuta();
    document.getElementById("godzina2").innerHTML = ustawionaGodzina;
    document.getElementById("minuty2").innerHTML = (new Date().getMinutes().toString());
    kreskaMinuty.setAttribute("transform", "rotate(" + ((new Date().getMinutes() * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
    minutyspot1.setAttribute("transform", "rotate(" + ((new Date().getMinutes() * 6) + 90) + "," + srednica * 0.5 + "," + srednica * 0.5 + ")");
}


function pokazKoniec() {
    koncoweDane();
    document.getElementById("godzina3").innerHTML = ustawionaGodzina;
    document.getElementById("minuty3").innerHTML = ustawionaMinuta;

    // todo tu jednak wracamy do tarczy z godzinami i pokazana ustawiona godziną

}


<!--    /**********************************************/    -->
<!--    /**************** spoty minut                 */    -->
<!--    /**********************************************/    -->


function spotyMinut() {
    let svg = document.getElementById("panelMinut");
    for (let i = 0; i < 60; i++) {
        let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        if (i % 5 === 0) {
            myCircle.setAttribute("class", "aktywnyspotszaryciemny");
            myCircle.setAttribute("r", (srednica * 0.02).toString());
        } else {
            myCircle.setAttribute("class", "aktywnyspotszary");
            myCircle.setAttribute("r", ((srednica * 0.02) / 2).toString());
        }
        myCircle.setAttribute("id", i.toString());
        myCircle.setAttribute("onclick", "pokazKoniec()");
        myCircle.setAttribute("onmouseover", "ustawianieMinuty()");
        myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.02))).toString());
        myCircle.setAttribute("cy", (srednica * 0.5).toString());
        myCircle.setAttribute("fill", "lightblue");
        myCircle.setAttribute("transform", "rotate( " + ((i * 6) + 90) + "," + srednica * 0.5 + " ," + srednica * 0.5 + ")");
        svg.appendChild(myCircle);
    }
}


function spotyGodzin() {
    let svg = document.getElementById("panelGodzin");
    for (let i = 1; i < 13; i++) {
        let svgNS = "http://www.w3.org/2000/svg";
        let myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttribute("class", "aktywnyspotszary");
        myCircle.setAttribute("id", i.toString());
        myCircle.setAttribute("onclick", "pokazPanelMinut()");
        myCircle.setAttribute("onmouseover", "ustawianieGodziny()");
        myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.04))).toString());
        myCircle.setAttribute("cy", (srednica * 0.5).toString());
        myCircle.setAttribute("r", (srednica * 0.04).toString());
        myCircle.setAttribute("transform", "rotate( " + ((i * 30) + 90) + "," + srednica / 2 + " ," + srednica / 2 + ")");
        svg.appendChild(myCircle);
    }
}


function tarczaGodziny() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.5).toString());
    svg.appendChild(myCircle);
}


function tarczaMinuty() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "tloTarcza");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.5).toString());
    svg.appendChild(myCircle);
}


function poczatkowaGodzina() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "godzinyspot");
    myCircle.setAttribute("onclick", "pokazPanelMinut()");
    myCircle.setAttribute("cx", ((srednica * 0.02) + (srednica * 0.04)).toString());
    myCircle.setAttribute("cy", ((srednica * 0.5).toString()));
    myCircle.setAttribute("r", ((srednica * 0.04).toString()));
    svg.appendChild(myCircle);
}


function poczatkowaMinuta() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("id", "minutyspot1");
    myCircle.setAttribute("onclick", "pokazKoniec()");
    myCircle.setAttribute("cx", ((srednica * 0.02) + ((srednica * 0.02))).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.02).toString());
    svg.appendChild(myCircle);
}


function kreskaGodzin() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaGodziny");
    myLine.setAttribute("x1", ((srednica * 0.5) - (srednica * 0.01)).toString());
    myLine.setAttribute("y1", ((srednica * 0.5).toString()));
    myLine.setAttribute("x2", ((srednica * 0.02) + ((srednica * 0.04) * 2)).toString());
    myLine.setAttribute("y2", (srednica * 0.5).toString());
    svg.appendChild(myLine);
}


function kreskaMinut() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myLine = document.createElementNS(svgNS, "line");
    myLine.setAttribute("class", "line");
    myLine.setAttribute("id", "kreskaMinuty");
    myLine.setAttribute("x1", (srednica * 0.5).toString());
    myLine.setAttribute("y1", (srednica * 0.5).toString());
    myLine.setAttribute("x2", ((srednica * 0.02) + ((srednica * 0.02) * 2)).toString());
    myLine.setAttribute("y2", (srednica * 0.5).toString());
    svg.appendChild(myLine);
}


function srodekTarczyGodzin() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.01).toString());
    svg.appendChild(myCircle);
}


function srodekTarczyMinut() {
    let svg = document.getElementById("panelMinut");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "srodkowyspot");
    myCircle.setAttribute("cx", (srednica * 0.5).toString());
    myCircle.setAttribute("cy", (srednica * 0.5).toString());
    myCircle.setAttribute("r", (srednica * 0.01).toString());
    svg.appendChild(myCircle);
}


function svgMinuty() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "panelMinut");
    svg.setAttribute("width", srednica.toString());
    svg.setAttribute("height", srednica.toString());
    let div = document.getElementById("stronaDoUstawianiaMinut");
    div.appendChild(svg);
}


function zmianaAmPm() {
    if (document.getElementById("AmPm").innerHTML === "AM") {
        document.getElementById("AmPm").innerHTML = "PM";
        ustawionaGodzina = (parseInt(ustawionaGodzina) + 12);
        document.getElementById("godzina").innerHTML = ((ustawionaGodzina));

     document.getElementById("wybierzDate").value = ((ustawionaGodzina));




    } else if (document.getElementById("AmPm").innerHTML === "PM") {
        document.getElementById("AmPm").innerHTML = "AM";
        ustawionaGodzina = (parseInt(ustawionaGodzina) - 12);
        document.getElementById("godzina").innerHTML = ((ustawionaGodzina));
        document.getElementById("wybierzDate").value = ((ustawionaGodzina));
    }
    else {
    }
}


function guzikTest() {
    let svg = document.getElementById("panelGodzin");
    let svgNS = "http://www.w3.org/2000/svg";
    let myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttribute("class", "aktywnyspot");
    myCircle.setAttribute("cx", (srednica / 2).toString());
    myCircle.setAttribute("cy", (srednica - (srednica * 0.07) * 5).toString());
    myCircle.setAttribute("r", (srednica * 0.07).toString());
    myCircle.setAttribute("onclick", "zmianaAmPm()");
    svg.appendChild(myCircle);
    let myText = document.createElementNS(svgNS, "text");
    myText.setAttribute("class", "ampmtext");
    myText.setAttribute("id", "AmPm");
    myText.setAttribute("x", (srednica / 2 - ( +((srednica * 0.07) * 0.67))).toString());
    myText.setAttribute("y", (srednica / 2 + ((srednica * 0.07) * 2.47)).toString());
    myText.setAttribute("onclick", "zmianaAmPm()");
    myText.setAttribute("font-size", ((srednica * 0.07) * 0.9).toString());
    myText.textContent = poradnia;
    svg.appendChild(myText);
}


function divGodziny() {
    let myDiv = document.createElement("div");
    myDiv.id = "stronaDoUstawianiaGodzin";
    document.body.appendChild(myDiv);

    let x = document.createElement("text");
    x.setAttribute("class", "godzinaAktywna");
    x.setAttribute("id", "godzina");
    document.getElementById("stronaDoUstawianiaGodzin").appendChild(x);

    let y = document.createElement("text");
    y.setAttribute("class", "godzinaAktywna");
    y.innerHTML = ":";
    document.getElementById("stronaDoUstawianiaGodzin").appendChild(y);

    let z = document.createElement("text");
    z.setAttribute("class", "godzinaNieAktywna");
    z.setAttribute("id", "minuty");
    document.getElementById("stronaDoUstawianiaGodzin").appendChild(z);
}


function divMinuty() {

    document.getElementById("stronaDoUstawianiaGodzin").style.display = "none";

    let myDiv = document.createElement("div");
    myDiv.id = "stronaDoUstawianiaMinut";
    document.body.appendChild(myDiv);

    let x = document.createElement("text");
    x.setAttribute("class", "godzinaNieAktywna");
    x.setAttribute("id", "godzina2");
    document.getElementById("stronaDoUstawianiaMinut").appendChild(x);

    let y = document.createElement("text");
    y.setAttribute("class", "godzinaAktywna");
    y.innerHTML = ":";
    document.getElementById("stronaDoUstawianiaMinut").appendChild(y);

    let z = document.createElement("text");
    z.setAttribute("class", "godzinaNieAktywna");
    z.setAttribute("id", "minuty2");
    document.getElementById("stronaDoUstawianiaMinut").appendChild(z);
}


function koncoweDane() {

    document.getElementById("stronaDoUstawianiaMinut").style.display = "none";

    let myDiv = document.createElement("div");
    myDiv.id = "stronaKoncowa";
    document.body.appendChild(myDiv);

    let x = document.createElement("text");
    x.setAttribute("id", "godzina3");
    x.innerHTML = "x!";
    document.getElementById("stronaKoncowa").appendChild(x);

    let y = document.createElement("text");
    y.innerHTML = ":";
    document.getElementById("stronaKoncowa").appendChild(y);

    let z = document.createElement("text");
    z.setAttribute("id", "minuty3");
    z.innerHTML = "y!";
    document.getElementById("stronaKoncowa").appendChild(z);
}


ktoraGodzina();

















