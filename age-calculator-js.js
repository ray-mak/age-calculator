const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput  = document.getElementById("year-input");
const convertBtn = document.getElementById("convert-btn");
const yearOutput = document.getElementById("years");
const monthOutput = document.getElementById("months");
const dayOutput = document.getElementById("days");

const checkDay = () => {
    if (dayInput.value === "") {
        dayInput.parentElement.classList.add("error");
        dayInput.parentElement.classList.remove("invalid-input");
        dayInput.parentElement.classList.remove("incorrect-date");
    } else if (dayInput.value < 1 || dayInput.value > 31) {
        dayInput.parentElement.classList.remove("error");
        dayInput.parentElement.classList.add("invalid-input");
    } else {
        dayInput.parentElement.classList.remove("error");
        dayInput.parentElement.classList.remove("invalid-input");
        return true;
    }
    return false;
}

const checkMonth = () => {
    if (monthInput.value === "") {
        monthInput.parentElement.classList.add("error");
        monthInput.parentElement.classList.remove("invalid-input");
    } else if (monthInput.value < 1 || monthInput.value > 12) {
        monthInput.parentElement.classList.remove("error");
        monthInput.parentElement.classList.add("invalid-input");
    } else {
        monthInput.parentElement.classList.remove("invalid-input");
        monthInput.parentElement.classList.remove("error");
        return true;
    }
    return false;
}

const checkYear = () => {
    if (yearInput.value === "") {
        yearInput.parentElement.classList.add("error");
    } else {
        yearInput.parentElement.classList.remove("error");
        return true;
    }
    return false;
}

const monthTable = {
    1 : 31,
    2 : 28,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31,
}

const futureOrPast = () => {
    const currentDate = new Date();
    if (currentDate.getFullYear() < yearInput.value) {
        yearInput.parentElement.classList.add("not-past")
    } else {
        yearInput.parentElement.classList.remove("not-past");
        return true;
    }
    return false;
} 

const checkDate = () => {
    if (checkDay() && checkMonth() && checkYear() && futureOrPast()) {
        if (monthInput.value == 2 && ((2024 - yearInput.value) % 4) && dayInput.value >= 29) {
            dayInput.parentElement.classList.add("incorrect-date");
        } else if (dayInput.value > monthTable[monthInput.value]) {
            dayInput.parentElement.classList.add("incorrect-date");
        } else {
            dayInput.parentElement.classList.remove("incorrect-date");
            return true;
        }
    }
    return false;
}

const calculateAge = () => {
    checkDay();
    checkMonth();
    checkYear();
    futureOrPast();
    checkDate();
    let years = 0;
    let months = 0;
    let days = 0;
    const todaysDate = new Date();
    if ((todaysDate.getMonth() + 1) == monthInput.value && todaysDate.getFullYear() == yearInput.value) {
        days = todaysDate.getDate() - dayInput.value;
        yearOutput.innerHTML = `${years}`;
        monthOutput.innerHTML = `${months}`;
        dayOutput.innerHTML = `${days}`;   
    } else if (todaysDate.getFullYear() == yearInput.value) {   //if it's the same year
        if (todaysDate.getDate() == dayInput.value) { //and the same date
            months = todaysDate.getMonth() - monthInput.value + 1;
            yearOutput.innerHTML = `${years}`;
            monthOutput.innerHTML = `${months}`;
            dayOutput.innerHTML = `${days}`;
        } else if (todaysDate.getDate() > dayInput.value && todaysDate.getMonth() + 1 > monthInput.value) { 
            months = todaysDate.getMonth() - monthInput.value + 1;
            days = todaysDate.getDate() - dayInput.value;
            yearOutput.innerHTML = `${years}`;
            monthOutput.innerHTML = `${months}`;
            dayOutput.innerHTML = `${days}`;
        } else if (todaysDate.getDate() < dayInput.value && todaysDate.getMonth() + 1 > monthInput.value){
            months = todaysDate.getMonth() - monthInput.value;
            days = todaysDate.getDate() + (monthTable[monthInput.value] - dayInput.value);
            yearOutput.innerHTML = `${years}`;
            monthOutput.innerHTML = `${months}`;
            dayOutput.innerHTML = `${days}`;
        } else { // and the same month
            days = todaysDate.getDate() + (monthTable[monthInput.value] - dayInput.value);
            yearOutput.innerHTML = `${years}`;
            monthOutput.innerHTML = `${months}`;
            dayOutput.innerHTML = `${days}`;
        }
    } else {
        if (todaysDate.getFullYear() - yearInput.value > 1) {
            if (todaysDate.getDate() >= dayInput.value && todaysDate.getMonth() + 1 >= monthInput.value) { //month and date >=
                years = todaysDate.getFullYear() - yearInput.value;
                months = todaysDate.getMonth() - monthInput.value + 1;
                days = todaysDate.getDate() - dayInput.value;
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            } else if (todaysDate.getDate() < dayInput.value && todaysDate.getMonth() + 1 >= monthInput.value){ //month >= date <
                years = todaysDate.getFullYear() - yearInput.value - 1;
                months = todaysDate.getMonth() - monthInput.value + 12;
                days = todaysDate.getDate() + (monthTable[monthInput.value] - dayInput.value);
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            } else if (todaysDate.getDate() >= dayInput.value && todaysDate.getMonth() + 1 < monthInput.value) {//month < day >= 
                years = todaysDate.getFullYear() - yearInput.value - 1;
                months = todaysDate.getMonth() - monthInput.value + 13;
                days = todaysDate.getDate() - dayInput.value;
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            } else if (todaysDate.getDate() < dayInput.value && todaysDate.getMonth() + 1 < monthInput.value){    //month < day <
                years = todaysDate.getFullYear() - yearInput.value - 1;
                months = todaysDate.getMonth() - monthInput.value + 12;
                days = todaysDate.getDate() + (monthTable[monthInput.value] - dayInput.value);
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            }
        } else { //if this year - birth year = 1
            if (todaysDate.getMonth() + 1 >= monthInput.value && todaysDate.getDate() >= dayInput.value) { 
                years = todaysDate.getFullYear() - yearInput.value;
                months = todaysDate.getMonth() - monthInput.value + 1;
                days = todaysDate.getDate() - dayInput.value;
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            } else if (todaysDate.getDate() < dayInput.value && todaysDate.getMonth() + 1 > monthInput.value){
                years = todaysDate.getFullYear() - yearInput.value;
                months = todaysDate.getMonth() - monthInput.value;
                days = todaysDate.getDate() + (monthTable[monthInput.value] - dayInput.value);
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            } else if (todaysDate.getDate() < dayInput.value && todaysDate.getMonth() + 1 == monthInput.value) {
                years = 0;
                months = 11;
                days = todaysDate.getDate() + (monthTable[monthInput.value] - dayInput.value);
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            } else if (todaysDate.getMonth() + 1 < monthInput.value && todaysDate.getDate() < dayInput.value) {
                years = 0;
                months = todaysDate.getMonth() - monthInput.value + 12;
                days = todaysDate.getDate() + (monthTable[monthInput.value] - dayInput.value);
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            } else { //birth month is less but date is greater
                years = 0;
                months = todaysDate.getMonth() - monthInput.value + 13;
                days = todaysDate.getDate() - dayInput.value;
                yearOutput.innerHTML = `${years}`;
                monthOutput.innerHTML = `${months}`;
                dayOutput.innerHTML = `${days}`;
            }
        }
    }
    if (!checkDay() || !checkMonth() || !checkYear() || !futureOrPast() || !checkDate()) {
        yearOutput.innerHTML = `--`;
        monthOutput.innerHTML = `--`;
        dayOutput.innerHTML = `--`;
    }
 
}

convertBtn.addEventListener("click", calculateAge)