const monthNamesEt = [
    "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"
];
const daysEt = [
    "pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"
];

const dateEt = function(){
    let timeNow = new Date();
    let dateNow = timeNow.getDate();
    let monthNow = timeNow.getMonth();
    let yearNow = timeNow.getFullYear();

    let dateNowEt = dateNow + ". " + monthNamesEt[monthNow] + ", " + yearNow;
    return dateNowEt
};

const dayEt = function() {
    let timeNow = new Date();
    day = timeNow.getDay()

    day = daysEt[day]
    return day
};

const timeEt = function(){
    let timeNow = new Date();
    minutes = timeNow.getMinutes()
    hours = timeNow.getHours()
    seconds = timeNow.getSeconds()

    let time = [hours, minutes, seconds]
    return time
}

const partOfDay = function() {
    let timeNow = new Date();
    let dayPart = "--123 error--"
    if (timeNow.getHours() >= 8 && timeNow.getHours() < 16){
        dayPart = "Praegu on kooliaeg. Miks sa ei õpi? \nHakka õppima!";
    }
    else if (timeNow.getHours() >= 16 && timeNow.getHours() < 22){
        dayPart = "Hetkel on sul vaba aeg. \nRäägi, kas kodused tööd on tehtud?";
    }
    else if (timeNow.getHours() >= 22 && timeNow.getHours() < 24){
        dayPart = "Oi oi...\nPoiss, miks sa ei maga?! \nTundub, et...\n...sa tegeled millegi salakavalaga...\nhmm...?"; 
    }
    else if (timeNow.getHours() >= 0 && timeNow.getHours() < 6){
        dayPart = "Oi oi...\nPoiss, miks sa ei maga?! \nTundub, et...\n...sa tegeled millegi salakavalaga...\nhmm...?"; 
    }
    return dayPart;
    
}
const weekDay = function() {
    let timeNow = new Date();
    currentDay = "--234 error--"
    if (timeNow.getDay() == 0){
        currentDay = `Kirikusse. `
    }
    else if (timeNow.getDay() == 1){
        currentDay = `Mõista mõista mis päev täna on hahahahahahahaahahhahahahaahaha `
    }
    else if (timeNow.getDay() == 2){
        currentDay = `Täna on teine nädalapäev, see on koolipäev. Koolis tuleb käia. Kes koolis ei käi, see kooli läs ke s ss k.... `
    }
    else if (timeNow.getDay() == 3){
        currentDay = `k4lm4s n4d4l4p44v `
    }
    else if (timeNow.getDay() == 4){
        currentDay = `n3ljas n3dalap33v`
    }
    else if (timeNow.getDay() == 5){
        currentDay = `Reede `
    }
    else if (timeNow.getDay() == 6){
        currentDay = `Aeg reisile minna. `
    }
    return currentDay
}
module.exports = {monthsEt:monthNamesEt, dateEt:dateEt, dayEt:dayEt, timeEt:timeEt, partOfDay, weekDay};

