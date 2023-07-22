let date = new Date();

console.log(date);
date = date.toLocaleString();
console.log(date);

let date1 = new Date();
// date1 = date1.toLocaleDateString();
date1 = date1.toLocaleTimeString();
console.log(date1);

let date2 = new Date(0);
// date2 = date2.toLocaleDateString();
// date2 = date2.toLocaleTimeString();
console.log(date2);

let date3 = new Date(100000000000);
console.log(date3);

let date4 = new Date(2023, 0, 2, 3, 5, 6);
console.log(date4);

let date5 = new Date('Jan 2025 27');
console.log(date5);
let year = date5.getFullYear();
console.log(year);
let month = date5.getMonth();
console.log(month);
let day = date5.getDate();
console.log(day);
let day1 = date5.getDay();
console.log(day1);
let hours = date5.getDay();
console.log(hours);

let date6 = new Date(2023, 0, 2, 3, 5, 6);
console.log(date6);
date6.setFullYear(2034);
date6.setMonth(11);
console.log(date6);

function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
    console.log(year, month, date);
}
let date7 = new Date();
console.log(date7);
formatDate(date7);

function formatTime(date) {
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var amOrpm = hour >= 12 ? 'PM' : 'AM';
    hour = (hour%12) || 12;
    console.log(hour, min, sec, amOrpm);
}
let date8 = new Date();
console.log(date8);
formatTime(date8);