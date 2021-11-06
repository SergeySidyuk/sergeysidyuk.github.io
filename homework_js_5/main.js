// 1. Напишите функцию random(min, max), 
// которая будет возвращать случае целое число от min до max

function random(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  alert( random(1, 10) );



// 2. Написать функцию count_symbol( symbol, string ),
//   которая подсчитает количество указанного символа symbol, в строке string. 
//   Функция должна быть регистронезависимой и вернуть число


function countSymbol( symbol, string ){
    let _symbol = symbol.toLowerCase();
    let _string = string.toLowerCase();
    let result = 0;
    for(let i = 0; i < string.length; i++ ){
        if(_string[i] == _symbol) result++;
    }
    return result			
}
console.log(countSymbol('р', 'Белые бараны били в барабаны, без разбора били — лбы себе разбили'))



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



// 4. Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом, 
//  остальные символы должны быть в нижнем регистре (пример: up_first("иванов"),
//  должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")


function up_first(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  let str =  prompt ('Введите имя :')
  alert(up_first(str) ); 
  


// 12. Напишите функцию get_uniq_arr( arr ), 
// которая удаляет из заданного массива arr элементы, 
// которые дублируются (необходимо использовать цикл)

function  getUniqArr(arr){ 
    let arr1=[];
    for(let i = 0; i < arr.length; i++){
        if(arr1.indexOf(arr[i]) === -1)
            arr1.push(arr[i])
    }
    console.log(arr)
    return arr1;
}
let arr = ['Артем' ,'Сергей' ,'Сергей' ,'Артем' ,'Сергей'];
console.log(getUniqArr(arr));




// 13. Задача на синтаксис объектов. Напишите код, по строке на каждое действие.
// •  Создайте пустой объект user.
// •  Добавьте свойство name со значением Вася.
// •  Добавьте свойство surname со значением Петров.
// •  Поменяйте значение name на Сергей.
// •  Удалите свойство name из объекта.

let user ={}
 user['name'] = 'Вася'
 console.log(user)
 user['surname'] = 'Петров'
 console.log(user)
 user['name'] = 'Сергей'
 console.log(user)
 delete user.name
console.log(user)



// САМОСТОЯТЕЛЬНАЯ РАБОТА 

// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

function compareArray(a, b){
    if(!Array.isArray(a,b)) {
        return null;
    }
    if(a.length !== b.length)
       return false;

       for(i = 0; i < a.length; i++)
       console.log(i,a[i],b[i])
       if(a[i] !== b[i]){
        return false;
       } else {
        return true;
       }
    }

let a = [1 ,3 ,5];
let b = [1 ,3 ,5];
console.log(compareArray(a, b))
