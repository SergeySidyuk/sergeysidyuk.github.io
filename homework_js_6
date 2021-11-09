// 1. Напишите функцию get_tomorrow(),
// которая возвращает завтрашнее число в формате 26 ноября 2019г
  
   
const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE *60;
const MS_DAY = MS_HOUR *24;

function get_tomorrow() {
    const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря', ]

    let now = new Date();
    let tomorrow = now.getTime() + MS_DAY;
    let resultTomorrow = new Date(tomorrow);

    let monthName = MONTH[resultTomorrow.getMonth()];
    let result = `${resultTomorrow.getDate()} ${monthName} ${resultTomorrow.getFullYear()}г`;
    return result;
}
console.log(get_tomorrow());
  
  
  
//   2. Написать функцию, которая находит разницу в днях между двумя заданными датами. 
//   Например, заданные даты «20/01/2010» и «15/01/2010»,
//   функция должна вернуть число 5. Разницу в днях необходимо считать по модулю.


const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;


date1 = new Date("2010-01-20");
date2 = new Date("2010-01-15");
function differenceOfDays(date1, date2) {
    let diff = parseInt(date2 - date1) / MS_DAY;
    diff = Math.abs(diff)
    return diff;
}
console.log(differenceOfDays(date1, date2));


  
//   3.Напишите функцию get_count_work_days(date1, date2),
//   которая будет считать количество рабочих дней между двумя заданными датами.
  
//   4.Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, 
//   если оно задано, иначе посчитать количество дней от текущей даты


let newYear = new Date(2021, 11, 31);
let date;
function getCountDays(date) {
    if (date != null) {
        dateFix = new Date(date);
    } else dateFix = new Date();
    alert((daysLeft = 'До Нового Года осталось ' + Math.floor((newYear - dateFix) / (1000 * 60 * 60 * 24)) + ' дней'));
}
console.log(getCountDays(date))


  
//  5.Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты.
//  Например: get_day(’27-11-1988’) должно вернуть «воскресенье»

date = new Date(2021, 10, 09) 
function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return alert(days[date.getDay()]);
}
console.log(getWeekDay(date));
