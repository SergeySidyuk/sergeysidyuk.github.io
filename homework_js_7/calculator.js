// Ч1
// С помощью функции-конструктора, написать создание объекта Калькулятор. 
// Функция конструктор принимает в качестве единственного параметра название калькулятора.
// Ч2
// Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
// В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
// Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.
// Ч3
// Калькулятор должен хранить историю действий в виде строки в таком формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
// Например после действия сумма в истории должна появится такая запись: "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
// Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.
function Calculator(name) {
    this.name = name
    this.history = []

    this.getHistory = function () {
        return this.history
    }
    this.removeHistory = function () {
        this.history.splice(0, this.history.length)
        console.log(this.history)
    }

    this.sum = function() {
        let result = 0;
        for (let i = 0; i < arguments.length; i++ ) {
            result = result + arguments[i]
        }

        const text = `сумма = ${result}, ${this.argumentsToString(arguments)}`
        this.log(text)

        return result;
    }

    this.mul = function() {
        let result = 1;
        
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i] 
        }

        const text = `умножение = ${result}, ${this.argumentsToString(arguments)}`
        this.log(text)

        return result;
    }
    
    this.sub = function (a, b) {
        const result = a - b;
        
        const text = `вычетание = ${result}, ${this.argumentsToString(arguments)}` 
        this.log(text)

        return result;
    }

    this.div = function (a, b) {
        if (a === 0 || b === 0) {
            const str = `деление = 0, ${this.argumentsToString(arguments)}`
            this.log(str)
            return 0
        } 
        const result = a / b;
        
        const str = `деление = ${result}, ${this.argumentsToString(arguments)}`
        this.log(str)

        return result
    }

    this.log = function (text) {
        let result = `${this.name} `
        
        const now = new Date
        let dayFormat = `(${now.getDate()}.${now.getMonth()}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()})`
        result += dayFormat

        result += `: ${text}`

        this.history.push(result)



        console.log(result)
    }
    this.argumentsToString = function (args) {
        let str = '('
        for (let i = 0; i < args.length; i++){
            str = str + args[i]
            if (i !== args.length - 1) {
                str += ', '
            }
        }
        str += ')'
        return str 
    }
}

const calculator = new Calculator('Мой калькулятор');
const a = calculator.sum(5, 3, 3);
console.log("calculator.sum",a)
console.log(calculator.getHistory())

const a2 = calculator.mul(5, 3, 3);
console.log("calculator.mul",a2)
console.log(calculator.getHistory())

const a3 = calculator.sub(10, 11);
console.log("calculator.sub",a3)
console.log(calculator.getHistory())

const a4 = calculator.div(10, 0);
console.log("calculator.div",a4)
console.log(calculator.getHistory())

calculator.removeHistory()
