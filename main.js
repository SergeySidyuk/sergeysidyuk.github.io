let distance = prompt('Введите пройденное расстояние машины в километрах');
distance = Number(distance);
if (isNaN(distance)) {
    alert('Не является числом,повторите ввод')
}
let diameter = prompt('Введите диаметр колеса');
diameter = Number(diameter);
if (isNaN(distance)) {
    alert('Не является числом,повторите ввод')
}
const pi = 3.14;

let LINEAR_SPEED = ( distance * 1000 / 3600 );/* Переводим километры в час в метры в секунду. В одном километре 1000 метров, а в одном часе 3600 секунд. */
let CIRCULATION_PERIOD = ( pi * diameter / LINEAR_SPEED ); /*  Период обращения колеса = Число Пи * Диаметр колеса /  линейную скорость */
alert(`Период обращения колеса машины равен ${CIRCULATION_PERIOD}`)