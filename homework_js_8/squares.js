// Написать код, который будет выполнять 4 действия на странице index.html:
// 1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
// 2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
// 3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
// 4. Удалить все квадраты, и сделать фон страницы черным.
// Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.
setTimeout(function () {
let squaresDivs = [];
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    div.style.cssText = `width :50px;
    height : 50px;
    background-color: blue;
    margin-bottom: 10px;
    `;
    document.body.append(div)
    squaresDivs.push(div)
}
console.log(squaresDivs)
}, 3000);

setTimeout(function () {
let myElementsGreen = document.getElementsByTagName('div');
for (let i = 0; i < myElementsGreen.length; i++) {
    myElementsGreen[i].style.cssText = `width :100px;
        height : 100px;
        background-color: green;
        margin-bottom: 10px;
        `;
}
}, 6000);

setTimeout(function () {
let myElementsRedAndYellow = document.getElementsByTagName('div');
for (let i = 0; i < myElementsRedAndYellow.length; i++) {
    if (i % 3 === 0) {
        myElementsRedAndYellow[i].style.cssText = `width :100px;
            height : 100px;
            background-color: red;
            margin-bottom: 10px;
            `;
    } else myElementsRedAndYellow[i].style.cssText = `width :100px;
        height : 100px;
        background-color: yellow;
        margin-bottom: 10px;
        `;
}
}, 9000);






// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
