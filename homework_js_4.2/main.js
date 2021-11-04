// Создайте массив с четными числами в диапазоне от 500 до 888 включительно.

let array = []
for (let i = 500;i <= 888 ; i++ ) {
    if (i % 2 === 0) {
        array.push(i)
    }
}
console.log(array)
