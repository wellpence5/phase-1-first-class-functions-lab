const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    let firstTwo = [drivers[0],drivers[1]];
    return firstTwo;
}
const returnLastTwoDrivers = function(){
    return [drivers[2],drivers[3]];
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(number){
    return fareMultiplier;

    function fareMultiplier(int){
    let fun = number * int;
    return fun;
}}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers = ['Antonia','Nuru','Amari','Mo'], fun = returnFirstTwoDrivers()){
    return fun();
}