// 3. Напишите функцию get_string_length(str), 
// которая в качестве аргумента принимает строку str и возвращает её длину, 
// предварительно удалив из строки все пробелы 
// (для решения данной задачи обязательно использовать цикл).

function get_string_length(str) {
    let result = str;

    if (str) {
        let temp = str.split(' ').join('')
        result = `${temp}`;
    }
    return result ;
}
let a = get_string_length('Что было бы если бы не было пробелов');
console.log(`${a} , Количество символов :${a.length}`);



