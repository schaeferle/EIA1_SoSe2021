var africa = "Africa";
var asia = "Asia";
var australia = "Australia";
var europe = "Europe";
var northamerica = "Northamerica";
var southamerica = "Southamerica";
var africa2008 = 1028;
var africa2018 = 1235.5;
var asia2008 = 12954.7;
var asia2018 = 16274.2;
var australia2008 = 1993;
var australia2018 = 2100.5;
var europe2008 = 4965.7;
var europe2018 = 4209.3;
var northamerica2008 = 6600.4;
var northamerica2018 = 6035.6;
var southamerica2008 = 1132.6;
var southamerica2018 = 1261.5;
var entire2018 = (africa2018 + asia2018 + australia2018 + europe2018 + northamerica2018 + southamerica2018);
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", function () { emissions(africa, africa2018, africa2008); });
    document.querySelector(".asia").addEventListener("click", function () { emissions(asia, asia2018, asia2008); });
    document.querySelector(".australia").addEventListener("click", function () { emissions(australia, africa2018, africa2008); });
    document.querySelector(".europe").addEventListener("click", function () { emissions(europe, europe2018, europe2008); });
    document.querySelector(".northamerica").addEventListener("click", function () { emissions(northamerica, northamerica2018, northamerica2008); });
    document.querySelector(".southamerica").addEventListener("click", function () { emissions(southamerica, southamerica2018, southamerica2008); });
});
function emissions(continentName, emissions2018, emissions2008) {
    document.querySelector(".continent").innerHTML = continentName;
    document.querySelector(".continent1").innerHTML = continentName;
    document.querySelector(".emissions2018").innerHTML = emissions2018.toString();
    document.querySelector(".relativeToWorld").innerHTML = Math.round(emissions2018 / entire2018 * 100 * 100) / 100 + "%";
    document.querySelector(".growthRate").innerHTML = Math.round((emissions2018 - emissions2008) / emissions2008 * 100 * 100 / 100) + "%";
    document.querySelector(".growthRateAbsolute").innerHTML = "" + Math.round((emissions2018 - emissions2008) * 100) / 100;
    document.querySelector(".chart").style.height = Math.round((emissions2018 / entire2018 * 100 * 100) / 100) + "%";
}
;
//# sourceMappingURL=script.js.map