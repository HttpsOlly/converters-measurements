"use strict";

//MILLIMETRE (mm)
function convertCentimetreToMillimetre(cm) {
    return cm * 10;
}
function convertMetreToMillimetre(me) {
    return me * 1000;
}
function convertKilometreToMillimetre(km) {
    return km * 1e+6;
}
function convertMileToMillimetre(mi) {
    return mi * 1.609e+6;
}
function convertYardToMillimetre(yd) {
    return yd * 914.4;
}
function convertFootToMillimetre(ft) {
    return ft * 304.8;
}
function convertInchToMillimetre(inch) {
    return inch * 25.4;
}
function convertNauticalMileToMillimetre(nm) {
    return nm * 1.852e+6;
}

//CENTIMETRE (cm)
function convertMillimetreToCentimetre(mm) {
    return mm / 10;
}
function convertMetreToCentimetre(me) {
    return me * 100;
}
function convertKilometreToCentimetre(km) {
    return km * 1e+5;
}
function convertMileToCentimetre(mi) {
    return mi * 160934;
}
function convertYardToCentimetre(yd) {
    return yd * 91.44;
}
function convertFootToCentimetre(ft) {
    return ft / 30.48;
}
function convertInchToCentimetre(inch) {
    return inch * 2.54;
}
function convertNauticalMileToCentimetre(nm) {
    return nm * 185200;
}

//METRE (me)
function convertMillimetreToMetre(mm) {
    return mm / 1000;
}
function convertCentimetreToMetre(cm) {
    return cm / 100;
}
function convertKilometreToMetre(km) {
    return km * 1000;
}
function convertMileToMetre(me) {
    return me * 1609.34;
}
function convertYardToMetre(yd) {
    return yd / 1.094;
}
function convertFootToMetre(ft) {
    return ft / 3.281;
}
function convertInchToMetre(inch) {
    return inch / 39.37;
}
function convertNauticalMileToMetre(nm) {
    return nm * 1852;
}

//KILOMETRE (km)
function convertMillimetreToKilometre(mm) {
    return mm / 1e+6;
}
function convertCentimetreToKilometre(cm) {
    return cm / 1e+5;
}
function convertMetreToKilometre(me) {
    return me / 1000;
}
function convertMileToKilometre(mi) {
    return mi * 1.609;
}
function convertYardToKilometre(yd) {
    return yd / 1094;
}
function convertFootToKilometre(ft) {
    return ft / 3281;
}
function convertInchToKilometre(inch) {
    return inch / 39370;
}
function convertNauticalMileToKilometre(nm) {
    return nm * 1.852;
}

//MILE (mi)
function convertMillimetreToMile(mm) {
    return mm / 1.609e+6;
}
function convertCentimetreToMile(cm) {
    return cm / 160934;
}
function convertMetreToMile(me) {
    return me / 1609;
}
function convertKilometreToMile(km) {
    return km / 1.609;
}
function convertYardToMile(yd) {
    return yd / 1760;
}
function convertFootToMile(ft) {
    return ft / 5280;
}
function convertInchToMile(inch) {
    return inch / 63360;
}
function convertNauticalMileToMile(nm) {
    return nm * 1.151;
}

//YARD (yd)
function convertMillimetreToYard(mm) {
    return mm / 914;
}
function convertCentimetreToYard(cm) {
    return cm / 91.44;
}
function convertMetreToYard(me) {
    return me * 1.094;
}
function convertKilometreToYard(km) {
    return km * 10.94;
}
function convertMileToYard(mi) {
    return mi * 1760;
}
function convertFootToYard(ft) {
    return ft / 3;
}
function convertInchToYard(inch) {
    return inch / 36;
}
function convertNauticalMileToYard(nm) {
    return nm * 2025.37;
}

//FOOT (ft)
function convertMillimetreToFoot(mm) {
    return mm / 305;
}
function convertCentimetreToFoot(cm) {
    return cm / 30.48;
}
function convertMetreToFoot(me) {
    return me * 3.281;
}
function convertKilometreToFoot(km) {
    return km * 3281;
}
function convertMileToFoot(mi) {
    return mi * 5280;
}
function convertYardToFoot(yd) {
    return yd * 3;
}
function convertInchToFoot(inch) {
    return inch / 12;
}
function convertNauticalMileToFoot(nm) {
    return nm * 6076.12;
}

//INCH (in)
function convertMillimetreToInch(mm) {
    return mm / 25.4;
}
function convertCentimetreToInch(cm) {
    return cm / 2.54;
}
function convertMetreToInch(me) {
    return me * 39.3701;
}
function convertKilometreToInch(km) {
    return km * 39370.1;
}
function convertMileToInch(mi) {
    return mi * 63360;
}
function convertYardToInch(yd) {
    return yd * 36;
}
function convertFootToInch(ft) {
    return ft * 12;
}
function convertNauticalMileToInch(nm) {
    return nm * 72913.4;
}

//NAUTICAL MILE (nm)
function convertMillimetreToNauticalMile(mm) {
    return mm / 1.852e+6;
}
function convertCentimetreToNauticalMile(cm) {
    return cm / 185200;
}
function convertMetreToNauticalMile(me) {
    return me / 1852;
}
function convertKilometreToNauticalMile(km) {
    return km / 1.852;
}
function convertMileToNauticalMile(mi) {
    return mi / 1.151;
}
function convertYardToNauticalMile(yd) {
    return yd / 2025;
}
function convertFootToNauticalMile(ft) {
    return ft / 6076;
}
function convertInchToNauticalMile(inch) {
    return inch / 72913;
}

export {
    convertCentimetreToMillimetre,
    convertMetreToMillimetre,
    convertKilometreToMillimetre,
    convertMileToMillimetre,
    convertYardToMillimetre,
    convertFootToMillimetre,
    convertInchToMillimetre,
    convertNauticalMileToMillimetre,
    convertMillimetreToCentimetre,
    convertMetreToCentimetre,
    convertKilometreToCentimetre,
    convertMileToCentimetre,
    convertYardToCentimetre,
    convertFootToCentimetre,
    convertInchToCentimetre,
    convertNauticalMileToCentimetre,
    convertMillimetreToMetre,
    convertCentimetreToMetre,
    convertKilometreToMetre,
    convertMileToMetre,
    convertYardToMetre,
    convertFootToMetre,
    convertInchToMetre,
    convertNauticalMileToMetre,
    convertMillimetreToKilometre,
    convertCentimetreToKilometre,
    convertMetreToKilometre,
    convertMileToKilometre,
    convertYardToKilometre,
    convertFootToKilometre,
    convertInchToKilometre,
    convertNauticalMileToKilometre,
    convertMillimetreToMile,
    convertCentimetreToMile,
    convertMetreToMile,
    convertKilometreToMile,
    convertYardToMile,
    convertFootToMile,
    convertInchToMile,
    convertNauticalMileToMile,
    convertMillimetreToYard,
    convertCentimetreToYard,
    convertMetreToYard,
    convertKilometreToYard,
    convertMileToYard,
    convertFootToYard,
    convertInchToYard,
    convertNauticalMileToYard,
    convertMillimetreToFoot,
    convertCentimetreToFoot,
    convertMetreToFoot,
    convertKilometreToFoot,
    convertMileToFoot,
    convertYardToFoot,
    convertInchToFoot,
    convertNauticalMileToFoot,
    convertMillimetreToInch,
    convertCentimetreToInch,
    convertMetreToInch,
    convertKilometreToInch,
    convertMileToInch,
    convertYardToInch,
    convertFootToInch,
    convertNauticalMileToInch,
    convertMillimetreToNauticalMile,
    convertCentimetreToNauticalMile,
    convertMetreToNauticalMile,
    convertKilometreToNauticalMile,
    convertMileToNauticalMile,
    convertYardToNauticalMile,
    convertFootToNauticalMile,
    convertInchToNauticalMile,
}