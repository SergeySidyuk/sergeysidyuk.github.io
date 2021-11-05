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
