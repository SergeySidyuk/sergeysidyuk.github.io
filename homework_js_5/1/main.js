// 1. Напишите функцию random(min, max), 
// которая будет возвращать случае целое число от min до max

function random(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  alert( random(1, 10) );
