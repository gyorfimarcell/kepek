const grid = document.getElementById("grid");

let kepek;

async function KepekBetolt() {
    const r = await fetch("/lista.txt");
    const szoveg = await r.text();

    kepek = szoveg.trim().split("\n");
}

function KepekHozzaad() {
    kepek.forEach(kep => {
        const kartya = document.createElement("div");
        kartya.className = "kartya";
    
        const img = document.createElement("img");
        img.src = "images/" +  kep;
        kartya.appendChild(img);
    
        grid.appendChild(kartya);
    });
}

function OsztalyValt() {
    let ujOsztaly = "kep1";

    if (window.matchMedia("(min-width: 1280px)").matches) {
        ujOsztaly = "kep3";
    }
    else if (window.matchMedia("(min-width: 768px)").matches) {
        ujOsztaly = "kep2";
    }

    document.querySelectorAll(".kartya img").forEach(kep => kep.className = ujOsztaly);
}

async function Indit() {
    await KepekBetolt();

    KepekHozzaad();
    OsztalyValt();

    window.addEventListener("resize", OsztalyValt);
}

Indit();