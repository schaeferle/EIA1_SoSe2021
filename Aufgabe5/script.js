var africa = "Afrika";
var asia = "Asien";
var australia = "Australien";
var europe = "Europa";
var northamerica = "Nordamerika";
var southamerica = "Südamerika";
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
var anteilAfrica = Math.round(africa2018 / entire2018 * 100);
var anteilAsia = Math.round(asia2018 / entire2018 * 100);
var anteilAustralia = Math.round(australia2018 / entire2018 * 100);
var anteilEurope = Math.round(europe2018 / entire2018 * 100);
var anteilNorthamerica = Math.round(northamerica2018 / entire2018 * 100);
var anteilSouthamerica = Math.round(southamerica2018 / entire2018 * 100);
var veränderungAfrica = Math.round((africa2018 - africa2008) / africa2008 * 100);
var veränderungAsia = Math.round((asia2018 - asia2008) / asia2008 * 100);
var veränderungAustralia = Math.round((australia2018 - australia2008) / australia2008 * 100);
var veränderungEurope = Math.round((europe2018 - europe2008) / europe2008 * 100);
var veränderungNorthamerica = Math.round((northamerica2018 - northamerica2008) / northamerica2008 * 100);
var veränderungSouthamerica = Math.round((southamerica2018 - southamerica2008) / southamerica2008 * 100);
var vergleichAfrica = Math.round(africa2018 - africa2008);
var vergleichAsia = Math.round(asia2018 - asia2008);
var vergleichAustralia = Math.round(australia2018 - australia2008);
var vergleichEurope = Math.round(europe2018 - europe2008);
var vergleichNorthamerica = Math.round(northamerica2018 - northamerica2008);
var vergleichSouthamerica = Math.round(southamerica2018 - southamerica2008);
console.log("Die Emission von " + africa + " ist: " + africa2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + africa + " damit " + anteilAfrica + "%");
console.log("Für " + africa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + veränderungAfrica + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + vergleichAfrica + "kg CO2");
console.log("Die Emission von " + asia + " ist: " + asia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + asia + " damit " + anteilAsia + "%");
console.log("Für " + asia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + veränderungAsia + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + vergleichAsia + "kg CO2");
console.log("Die Emission von " + australia + " ist: " + australia2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + australia + " damit " + anteilAustralia + "%");
console.log("Für " + australia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + veränderungAustralia + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + vergleichAustralia + "kg CO2");
console.log("Die Emission von " + europe + " ist: " + europe2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + europe + " damit " + anteilEurope + "%");
console.log("Für " + europe + " hat sich 2018 im Vergleich zu 2008 die Emission um " + veränderungEurope + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + vergleichEurope + "kg CO2");
console.log("Die Emission von " + northamerica + " ist: " + northamerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + northamerica + " damit " + anteilNorthamerica + "%");
console.log("Für " + northamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + veränderungNorthamerica + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + vergleichNorthamerica + "kg CO2");
console.log("Die Emission von " + southamerica + " ist: " + southamerica2018 + "kg CO2");
console.log("Relativ zu Gesamtemission der Welt verursacht " + southamerica + " damit " + anteilSouthamerica + "%");
console.log("Für " + southamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + veränderungSouthamerica + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + vergleichSouthamerica + "kg CO2");
//# sourceMappingURL=script.js.map