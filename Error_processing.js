//в нашу функцию передаются два параметра: целочисленная переменная ("а") и некоторая функция ("func"). Вам необходимо
//запустить функцию "func", с переменной "а" в качестве аргумента. Но вот проблема - в функции, похоже,
//оказалась ошибка. Вам нужно возвратить имя (свойство "name") возникающей ошибки.

function testErrorFunc(a, func) {

    try {
        func(a);
    } catch(ex) {
        ex.name = 'EvalError'
        console.log(ex.name)
        return ex.name;
    }
}

function testErrorFunc1(a, func) {
    try {
        func(a);
    } catch (error) {
        return error.name;
    }
}

function func() {
    return a / 0
}

testErrorFunc(9, func)