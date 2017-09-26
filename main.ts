console.log("skahfgASFGAFGJKAG");


let i;
for (i = 0; i < 13; i++) {
    console.log("--> "+ i);
}


function okno() {
    let x = document.getElementById("godzina");
    x.innerHTML = (window.event.target.id);
//    alert(event.srcElement.id);
    console.log(window.event.target.id)
}

