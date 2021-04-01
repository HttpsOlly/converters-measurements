"use strict";

    //DEGREE
function convertGradianToDegree(gr) {
    return gr * (180/200);
}
function convertMilliradianToDegree(mr) {
    return mr * (180 / (1000 * π));
}
function convertMinuteofarcToDegree(moa) {
    return moa / 60;
}
function convertRadianToDegree(r) {
    return r * (180/π);
}
function convertSecondofarcToDegree(soa) {
    return soa / 3600;
}

    //GRADIAN
function convertDegreeToGradian(d) {
    return d * (200/180);
}
function convertMilliradianToGradian(mr) {
    return mr * (180 / (1000 * π));
}
function convertMinuteofarcToGradian(moa) {
    return moa / 54;
}
function convertRadianToGradian(r) {
    return r * (200/π);
}
function convertSecondofarcToGradian(soa) {
    return soa / 3240;
}

    //MILLIRADIAN
function convertDegreeToMilliradian(d) {
    return d * ((1000 * π) / 180);
}
function convertGradianToMilliradian(gr) {
    return gr * ((1000 * π) / 200);
}
function convertMinuteofarcToMilliradian(moa) {
    return moa * (1000 * π) / (60 * 180);
}
function convertRadianToMilliradian(r) {
    return r * 1000;
}
function convertSecondofarcToMilliradian(soa) {
    return soa * (1000 * π) / (180 * 3600);
}

    //MINUTE OF ARC
function convertDegreeToMinuteofarc(d) {
    return d * 60;
}
function convertGradianToMinuteofarc(gr) {
    return gr * 54;
}
function convertMilliradianToMinuteofarc(mr) {
    return mr * (60 * 180) / (1000 * π);
}
function convertRadianToMinuteofarc(r) {
    return r * ((60 * 180) / π);
}
function convertSecondofarcToMinuteofarc(soa) {
    return soa / 60;
}

    //RADIAN
function convertDegreeToRadian(d) {
    return d * (π / 180);
}
function convertGradianToRadian(gr) {
    return gr * (π / 200);
}
function convertMilliradianToRadian(mr) {
    return mr / 1000;
}
function convertMinuteofarcToRadian(moa) {
    return moa * (π / (60 * 180));
}
function convertSecondofarcToRadian(soa) {
    return soa * (π / 648000);
}

    //SECOND OF ARC
function convertDegreeToSecondofarc(d) {
    return d * 3600;
}
function convertGradianToSecondofarc(gr) {
    return gr * 3240;
}
function convertMilliradianToSecondofarc(mr) {
    return mr * (3600 * 180) / (1000 * π);
}
function convertMinuteofarcToSecondofarc(moa) {
    return moa * 60;
}
function convertRadianToSecondofarc(r) {
    return r * ((3600 * 180) / π);
}




export { convertGradianToDegree,
         convertMilliradianToDegree,
         convertMinuteofarcToDegree,
         convertRadianToDegree,
         convertSecondofarcToDegree,

         convertDegreeToGradian, 
         convertMilliradianToGradian,
         convertMinuteofarcToGradian,
         convertRadianToGradian,
         convertSecondofarcToGradian,
        
         convertDegreeToMilliradian, 
         convertGradianToMilliradian, 
         convertMinuteofarcToMilliradian, 
         convertRadianToMilliradian, 
         convertSecondofarcToMilliradian,
        
         convertDegreeToMinuteofarc,
         convertGradianToMinuteofarc,
         convertMilliradianToMinuteofarc,
         convertRadianToMinuteofarc, 
         convertSecondofarcToMinuteofarc,
        
         convertDegreeToRadian,
         convertGradianToRadian,
         convertMilliradianToRadian,
         convertMinuteofarcToRadian,
         convertSecondofarcToRadian,
        
         convertDegreeToSecondofarc,
         convertGradianToSecondofarc,
         convertMilliradianToSecondofarc,
         convertMinuteofarcToSecondofarc,
         convertRadianToSecondofarc }