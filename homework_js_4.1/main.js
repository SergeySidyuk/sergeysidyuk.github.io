const array = [];
for ( i = 0; i < 10; i++ ) {
    let a = Math.round( Math.random() * 100 );
     array.push(a);
}

console.log(array)
let getMinArray = Math.min (... array);
console.log (getMinArray)
