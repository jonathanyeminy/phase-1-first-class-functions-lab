// Code your solution in this file!

const drivers = ["Jim", "Megan", "Bob", "Jonny"]
const returnFirstTwoDrivers = function(drivers){
return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length-2,drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare){
       return multiplier*fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,currentDrivers){
    if (currentDrivers === returnLastTwoDrivers){
       return returnLastTwoDrivers(drivers)
    }
    else if (currentDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }}