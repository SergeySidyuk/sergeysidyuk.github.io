let x = prompt('Введите первое число :', 0);
x = Number(x);
let y = prompt('Введите второе число :', 0);
y = Number(y);
let result1 = 0;
let result2 = 0;
if (x>y){
    state_x=x;
    x=y;
    y=state_x;
}

for (let i= x; i <= y; i++) {
    if (i % 6  == 0) {
        console.log(i);
        result1 += i;
        result2++;
    }
}
alert (`Количество кратных чисел шести от ${x} до ${y} = ${result2} , а сумма этих чисел = ${result1}`);
