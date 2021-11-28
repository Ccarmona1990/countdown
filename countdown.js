/*
===============
Global
===============
*/


// query selector function
const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(`please double check your class names, there is no ${selector} class`)
}

// Variables
let today = new Date();

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'

]
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'


]

const month = today.getMonth();
const todaysdate = today.getDate();
const day = today.getDay();
const currentYear = today.getFullYear();
const hours = today.getHours();
const mins = today.getMinutes();
const secs = today.getSeconds();
// elements or html classes
const daysCD = getElement('.days');
const hoursCD = getElement('.hours');
const minsCD = getElement('.mins');
const secsCD = getElement('.secs');
const cdDisplay= [daysCD, hoursCD, minsCD, secsCD];

let giveawayText = getElement('.giveawayText');
let futureDate = todaysdate + 2;

const deadLine = new Date(currentYear, month, futureDate, 11, 30, 0);
let deadLineML = deadLine.getTime();

/*------- END OF VARIABLES --------- */

// Giveaway text
const sentence = `Giveaway ends on ${days[day]}, ${futureDate} ${months[month]} ${currentYear} 11:30am`;
giveawayText.textContent = sentence;


function getRemainingTime () {
    // Creating a new object of the date class is essential. That way a new object is created everytime the interval is set.
    let todayML = new Date().getTime();
    // remainder value in miliseconds
    let rmt = deadLineML - todayML;

    // 1 second = 1000 mili seconds
    // 1 minute = 60 seconds
    // 1 hour = 60 minutes
    // 1 day = 24 hours

    // value in mls
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;

    // remaining time
    let rmDays = Math.floor(rmt / oneDay);
    let rmHours = Math.floor((rmt % oneDay) / oneHour);
    let rmMin = Math.floor((rmt %  oneHour) / oneMin);
    let rmSec = Math.floor((rmt % oneMin) / oneSec);
    
    const rmtValues = [rmDays, rmHours, rmMin, rmSec];
    
    const names = ["Days",'Hours', 'Mins','Secs'];

    function format (item) {
        if (item < 10) {
        return (item = `0${item}`);
    }
        return item;
    }

    
    cdDisplay.forEach(function (item, index) {
        
        item.innerHTML = 
        `
        ${format(rmtValues[index])}
        <br> ${names[index]}
        `;
    })
}

// countdown
let countdown = setInterval(getRemainingTime
,1000);
getRemainingTime();


// zooming in and out of a picture
function zoomIn_n_Out() {
    const SGimg = getElement('.SG-A12');
    const modal = getElement('.modal')


    const btnsZIO = [modal, SGimg];
    
btnsZIO.forEach(function (item) {
    item.addEventListener('click',function () {
    modal.classList.toggle('is_visible');
});
})
}
zoomIn_n_Out();





