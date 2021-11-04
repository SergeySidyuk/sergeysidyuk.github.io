// Ввести с помощью функции prompt любое число и вывести в уведомление в таком формате:
// 1 день
// 2 дня
// 5 дней
// 17 дней
// 35 дней
// 1532 дня.

let number = prompt('Введите число');
number = Number(number);

if (isNaN(number)) {
    alert('Не является числом')

} else if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13 || number % 100 === 14) {
    alert(`${number} Дней`)
} else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4 ) {
    alert(`${number} Дня`)
} else if (number % 10 === 5 || number % 10 === 6 || number % 10 === 7 || number % 10 === 8 || number % 10 === 9 || number % 10 === 0) {
    alert(`${number} Дней`)
} else if (number % 10 === 1) {
    alert(`${number} День`)
}


console.log('Конец')
