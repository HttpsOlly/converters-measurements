"use strict";

//MILES PER HOUR (mph)
function convertKilometresPerHourToMilesPerHour(kph) {
    return kph / 1.609;
}
function convertMetresPerSecondToMilesPerHour(mps) {
    return mps * 2.237;
}
function convertKnotsToMilesPerHour(kn) {
    return kn * 1.151;
}

//KILOMETRES PER HOUR (kph)
function convertMilesPerHourToKilometresPerHour(mph) {
    return mph * 1.609;
}
function convertMetresPerSecondToKilometresPerHour(mps) {
    return mps * 3.6;
}
function convertKnotsToKilometresPerHour(kn) {
    return kn * 1.852;
}

//METRES PER SECOND (mps)
function convertMilesPerHourToMetresPerSecond(mph) {
    return mph / 2.237;
}
function convertKilometresPerHourToMetresPerSecond(kph) {
    return kph / 3.6;
}
function convertKnotsToMetresPerSecond(kn) {
    return kn / 1.944;
}

//KNOTS (kn)
function convertMilesPerHourToKnots(mph) {
    return mph / 1.151;
}
function convertKilometresPerHourToKnots(kph) {
    return kph / 1.852;
}
function convertMetresPerSecondToKnots(mps) {
    return mps * 1.94384;
}


export {
    convertKilometresPerHourToMilesPerHour,
    convertMetresPerSecondToMilesPerHour,
    convertKnotsToMilesPerHour,
    convertMilesPerHourToKilometresPerHour,
    convertMetresPerSecondToKilometresPerHour,
    convertKnotsToKilometresPerHour,
    convertMilesPerHourToMetresPerSecond,
    convertKilometresPerHourToMetresPerSecond,
    convertKnotsToMetresPerSecond,
    convertMilesPerHourToKnots,
    convertKilometresPerHourToKnots,
    convertMetresPerSecondToKnots
}