"use strict";

    //CELSIUS
function convertFahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}
function convertKelvinToCelsius(k) {
    return k - 273.15;
}

    //FAHRENHEIT
function convertCelsiusToFahrenheit(c) {
    return 32 + (c * 9)/5;
}
function convertKelvinToFahrenheit(k) {
    return ((k - 273.15) * 1.8) + 32;
}

    //KELVIN
function convertCelsiusToKelvin(c) {
    return c + 273.15;
}
function convertFahrenheitToKelvin(f) {
    return ((f - 32) * 5/9) + 273.15;
}

export { convertFahrenheitToCelsius,
         convertKelvinToCelsius,
         convertCelsiusToFahrenheit,
         convertKelvinToFahrenheit,
         convertCelsiusToKelvin,
         convertFahrenheitToKelvin };