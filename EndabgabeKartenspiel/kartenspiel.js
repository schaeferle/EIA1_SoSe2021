let DeckSpieler = []; //Die 4 Karten des Spielers
let DeckComputer = []; //Die 4 Karten des Gegners
let Zugstapel = []; //Der Stapel um Karten aufzunehmen
let Ablagestapel = []; //Der Stapel der abgelegten Karten
window.onload = function () {
    document.getElementById("Zugstapel").addEventListener("click", ZieheKarte, false); //Der Zugstapel wird aktiviert
    Start();
};
//Karten werden ohne HTML generiert
function generateKarte() {
    let Color;
    for (let i = 1; i <= 8; i++) { //Kartewert 1-8
        for (let c = 1; c <= 4; c++) { //Kartenfarben RGBG
            if (c == 1) {
                Color = "Rot";
            }
            if (c == 2) {
                Color = "Gelb";
            }
            if (c == 3) {
                Color = "Blau";
            }
            if (c == 4) {
                Color = "Grün";
            }
            let NeueKarte = {
                Kartenfarbe: Color, Kartenwert: i
            };
            Zugstapel.push(NeueKarte); //Karten werden in den Zugstapel gepusht
        }
    }
}
function generateKarteHTML(karte, Target, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "karte" + " " + karte.Kartenfarbe); //Kartenfarbe wird zugeteilt
    document.getElementById(Target).appendChild(holdingDiv);
    let Number = document.createElement("p"); //Kartenwert wird zugeteilt
    Number.setAttribute("class", "Kartenwert");
    Number.innerHTML = "" + karte.Kartenwert;
    holdingDiv.appendChild(Number);
    if (Target == "DeckSpieler") { //Karten kommen ins Deck des Spielers und werden anklickbar
        holdingDiv.addEventListener("click", function () { SpieleKarte(karte, index); }, false); //Klickt man wird die entsprechende Karte abgelegt
    }
}
function KarteUmgedreht(karte, Target, index) {
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "karte" + " " + "umgedreht");
    document.getElementById(Target).appendChild(holdingDiv);
}
//Spiel wird gestartet
function Start() {
    generateKarte(); //Karten werden generiert
    Zugstapel = mixItUp(Zugstapel); //Karten im Zugstapel werden gemischt
    for (let i = 0; i < 4; i++) { //i zählt bis vier => Karten des Spielers
        DeckSpieler.push(Zugstapel[i]); //Karten für den Spieler
        DeckComputer.push(Zugstapel[i + 4]); //Karten für den Computer
    }
    //Stapel werden erstellt
    Ablagestapel.push(Zugstapel[10]);
    Zugstapel.splice(0, 11);
    console.log(DeckComputer);
    console.log(DeckSpieler);
    //Karten des Spielers werden in HTMl generiert
    for (let i = 0; i < DeckSpieler.length; i++) {
        generateKarteHTML(DeckSpieler[i], "DeckSpieler", i);
    }
    //Karten des Computers werden generiert
    for (let i = 0; i < DeckComputer.length; i++) {
        KarteUmgedreht(DeckComputer[i], "DeckComputer", i);
    }
    generateKarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel", Ablagestapel.length - 1); //HTML für den Ablagestapel wird generiert
    KarteUmgedreht(Zugstapel[Zugstapel.length - 1], "Zugstapel", Zugstapel.length - 1); //Zugstapel wird generiert
}
//Zug des Spielers
function SpieleKarte(karte, index) {
    if (karte.Kartenwert == Ablagestapel[Ablagestapel.length - 1].Kartenwert || karte.Kartenfarbe == Ablagestapel[Ablagestapel.length - 1].Kartenfarbe) { //Farbe oder Wert gleich?
        Ablagestapel.push(karte); //Karte darf auf den Ablagestapel
        DeckSpieler.splice(index, 1); //Deck des Spielers nimmt um gespielte Karte ab 
        if (DeckSpieler.length < 1) {
            SpielEnde(true);
        } //Siegesmeldung, falls die Karten des Spielers unter 1 sind
        updateHTML("Ablagestapel");
        updateHTML("DeckSpieler");
        ZugComputer();
    }
}
function checkKarten(array) {
    let richtigeKarte = false;
    for (let i = 0; i < array.length; i++) { //Deck wird nach passender Karte durchsucht
        if (array[i].Kartenfarbe == Ablagestapel[Ablagestapel.length - 1].Kartenfarbe || array[i].Kartenwert == Ablagestapel[Ablagestapel.length - 1].Kartenwert) { //Farbe oder Wert gleich? 
            richtigeKarte = true; //Karte gefunden?
            break;
        }
    }
    return richtigeKarte; //Gefundene Karte geht zurück
}
function ZieheKarte() {
    if (checkKarten(DeckSpieler) == false) { //... falls keine andere Karte im Deck passt.
        DeckSpieler.push(Zugstapel[Zugstapel.length - 1]); //Karte erscheint im Deck des Spielers
        Zugstapel.splice(Zugstapel.length - 1, 1); //Zugstapel schrumpft
        updateHTML("Zugstapel");
        updateHTML("DeckSpieler");
    }
    if (checkKarten(DeckSpieler) == false) { //Kann Spieler legen?
        ZugComputer(); //Computer ist am Zug
    }
}
//HTML Update falls sich Karten bewegen
function updateHTML(Target) {
    clearHTML(Target);
    if (Target == "DeckSpieler") {
        for (let i = 0; i < DeckSpieler.length; i++) {
            generateKarteHTML(DeckSpieler[i], "DeckSpieler", i);
        }
    }
    if (Target == "DeckComputer") {
        for (let i = 0; i < DeckComputer.length; i++) {
            KarteUmgedreht(DeckComputer[i], "DeckComputer", i);
        }
    }
    if (Target == "Ablagestapel") {
        generateKarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel", Ablagestapel.length - 1);
    }
    if (Target == "Zugstapel") {
        KarteUmgedreht(Zugstapel[Zugstapel.length - 1], "Zugstapel", Zugstapel.length - 1);
    }
}
function clearHTML(Target) {
    let Element = document.getElementById(Target);
    while (Element.firstChild) {
        Element.removeChild(Element.firstChild);
    }
}
//Zug des Computers
function ZugComputer() {
    let i = 0; //Karten werden gecheckt
    for (i; i < DeckComputer.length; i++) {
        if (DeckComputer[i].Kartenfarbe == Ablagestapel[Ablagestapel.length - 1].Kartenfarbe || DeckComputer[i].Kartenwert == Ablagestapel[Ablagestapel.length - 1].Kartenwert) {
            Ablagestapel.push(DeckComputer[i]); //Karte wird auf den Ablagestapel gelegt
            DeckComputer.splice(i, 1);
            if (DeckComputer.length < 1) {
                SpielEnde(false);
            } //Spielende?
            updateHTML("DeckComputer");
            updateHTML("Ablagestapel");
            break;
        }
    }
    //Deck des Computers wird durchgezählt und Karte wird nachgezogen
    if (i >= DeckComputer.length) {
        DeckComputer.push(Zugstapel[Zugstapel.length - 1]);
        Zugstapel.splice(Zugstapel.length - 1, 1);
        updateHTML("DeckComputer");
        updateHTML("Zugstapel");
        //Gezogene Karte wird versucht zu legen => Zug vorbei.
        if (DeckComputer[DeckComputer.length - 1].Kartenfarbe == Ablagestapel[Ablagestapel.length - 1].Kartenfarbe || DeckComputer[DeckComputer.length - 1].Kartenwert == Ablagestapel[Ablagestapel.length - 1].Kartenwert) {
            Ablagestapel.push(DeckComputer[DeckComputer.length - 1]);
            DeckComputer.splice(DeckComputer.length - 1, 1);
            updateHTML("DeckComputer");
            updateHTML("Ablagestapel");
        }
    }
}
//Mischfuktion
function mixItUp(array) {
    let currentIndex = array.length;
    let TempValue;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        TempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = TempValue;
    }
    return array;
}
//Spielende Alert
function SpielEnde(win) {
    if (win) {
        alert("Gewonnen!");
    }
    else {
        alert("Verloren!");
    }
}
//# sourceMappingURL=kartenspiel.js.map