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
