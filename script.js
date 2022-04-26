const countdown = document.querySelector("#countdown");

let currentDate = new Date()

const targetDate = {
    day: 26, 
    month: 10,
    year: 2022
}

let day = currentDate.getDate()
console.log("Day: ",day)
let month = currentDate.getMonth()
console.log("Month: ",month)
let year = currentDate.getFullYear()
console.log("Year: ",year)

function countDown() {
    
    let targetDayCount = ((targetDate.month)*30) + Math.floor((targetDate.month)/2) + targetDate.day;
    console.log("Target Day: ", targetDayCount);
    let currentDayCount = ((month+1)*30) + Math.floor((month+1)/2) + day;

    console.log("Today: ", currentDayCount);

    if (targetDayCount >= currentDayCount) {
        let daysLeft = (targetDayCount - currentDayCount) + (targetDate.year - year)*365;
        console.log(targetDayCount - currentDayCount);
        console.log("targetDayCount >= currentDayCount: ", daysLeft);
        countdown.innerHTML = `${daysLeft} days left..`
    } else {
        let daysLeft = 365 - (currentDayCount - targetDayCount) + ((targetDate.year - year)-1)*365;
        console.log("targetDayCount < currentDayCount: ", daysLeft);
        countdown.innerHTML = `${daysLeft} days left..`
    }

}

countDown();