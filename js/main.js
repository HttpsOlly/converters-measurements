"use strict";

import * as length from './length-conversion.mjs';
import * as planeangle from './planeangle-conversion.mjs';
import * as speed from './speed-conversion.mjs';
import * as temperature from './temperature-conversion.mjs';
// import {all functions} as {measurement} from './{measurement}-conversion.mjs'

function getMeasurementType() {
    const measurementObj = document.getElementById("measurement");
    const measurementType = measurementObj.options[measurementObj.selectedIndex].value;
    return measurementType;
}

function paint() {
    
    const fieldsets = document.getElementsByTagName('fieldset');
    for (let element of fieldsets) {
        element.style.display = "none";
    }
    
    const measurementType = getMeasurementType();   //"length"
    const selectedFieldset = document.getElementById(measurementType);
    selectedFieldset.style.display = "inline-block";

}    

window.onload = function() {
    const measurementObj = document.getElementById("measurement");
    measurementObj.onchange = paint;

    document.getElementById("converter").onsubmit = function(){

        const measurementType = getMeasurementType();
        const value1 = document.getElementById(measurementType + "-value-1");
        const value2 = document.getElementById(measurementType + "-value-2");
        const unit1 = document.getElementById(measurementType + "-unit-1");
        const unit2 = document.getElementById(measurementType + "-unit-2");

        const unit1name = unit1.options[unit1.selectedIndex].value;
        const unit2name = unit2.options[unit2.selectedIndex].value;

        if (unit1name === unit2name) 
            value2.value = value1.value; //If units are identical, assign input value to output value
        else {
            const methodName = `convert${unit1name}To${unit2name}`; //Concatenate a method name from the inputted units
            value2.value = eval(`${measurementType}.${methodName}`)(value1.value);
        }       

        return false;
    };

    paint();
};