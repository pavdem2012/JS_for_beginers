// вычислить факториал для числа, передаваемого в нашу функцию
function testFactorial(a) {
    let x = 1;
    for (let i = 1; i <= a; i++) {
        x = x * i
    }
    console.log(x)
    return x;
}

testFactorial(7)

// то же самое с рекурсией
function factorial(x) {        //Объявление функции
    if (x <= 1) return 1;        //Проверка условия окончания расчета
    return x * factorial(x - 1);   //Вызов этой же функции с уменьшенным на 1 аргументом
}

console.log(factorial(7))
factorial(7)

//сумма всех четных чисел, встречающихся в ряду от 1 до числа (включительно), передаваемого в нашу функцию (переменная "а").
function testWhile(a) {
    let x = 0;
    let y = 1;
    while (y <= a) {
        if (y % 2 === 0) {
            x = x + y;
        }
        y = y + 1;
    }
    console.log(x)
    return x;
}

testWhile(7)

//Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат.

function testCycle(n) {
    let x = 0;

    for (let i = 1; i <= n; ++i) {
        x += i;
    }
    console.log(x)
    return x;
}

testCycle(6)

//Даны два целых числа k и n. Верните из функции строку, которая состоит из чисел n, повторяющихся k раз, разделенных
//пробелом. Известно, что и k и n больше либо равно 1.


function testCycle1(k, n) {
    let x;
    x = ""
    for (let i = 1; i <= k; ++i) {
        x += " " + n
    }
    x = x.trim()
    console.log(x)
    return x;
}

testCycle1(6, 5)

//Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами. Известно, что b больше a.

function testCycle2(a, b) {
    let x = "";
    for (let i = a; i <= b; ++i) {
        x += i + " "
    }
    x = x.trim()
    console.log(x)
    return x;
}

testCycle2(6, 24);

//Даны числа a и b. Выведите строку с числами между а и b включая границы, отсортированными по возрастанию. Неизвестно,
//какое из чисел больше, но известно, что и a и b больше 0.

function testCycle3(a, b) {
    let x = "";
    if (a < b) {
        for (let i = a; i <= b; ++i) {
            x += i + " "
        }
        x = x.trim()
    } else {
        for (let i = b; i <= a; ++i) {
            x += i + " "
        }
        x = x.trim()
    }
    console.log(x)
    return x;
}

testCycle3(8, 1)

//Даны числа a и b. Выведите строку с числами от большего числа до меньшего. Известно, что и a и b больше либо равно 1,
//но неизвестно, какое из них больше.

function testCycle4(a, b) {
    let x = "";
    if (a > b) {
        for (let i = a; i >= b; --i) {
            x += i + " "
        }
        x = x.trim()
    } else {
        for (let i = b; i >= a; --i) {
            x += i + " "
        }
        x = x.trim()
    }
    console.log(x)
    return x;
}

testCycle4(13, 3)

//Даны числа a и b. Найдите сумму квадратов чисел между a и b включительно. Неизвестно, какое из чисел a или b больше.

function testCycle5(a, b) {
    let x = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        x += i ** 2
    }
    console.log(x)
    return x;
}

testCycle5(9, 4)

//Дано целое число n, большее 1. Найти квадрат данного числа, используя формулу n^2 = 1 + 3 + 5 + ... + (2 * n - 1)
//Из функции необходимо вывести строку, состоящую из чисел, получающихся на каждом шаге при добавлении каждого
//слагаемого (таким образом, получится строка из квадратов всех чисел от 1 до n).

function testCycle6(n) {
    let x = ''
    let y = 0
    for (let i = 1; i <= n; i++) {
        y += (2 * i - 1)
        x += y + ' '
    }
    x = x.trim()
    console.log(x)
    return x;
}

testCycle6(8)

//Дано число n (n > 0). Верните из функции следующую сумму: 1 + 1.5 + 2 + 2.5 + ... + n1+1.5+2+2.5+...+n. Задача
//довольно простая, подумайте, как можно задавать изменение счетчика, чтобы легко получить нужную сумму.

function testCycle7(n) {
    let x = 0;
    for (let i = 1; i <= n; i += 0.5) {
        x += i;
    }
    console.log(x)
    return x;
}

testCycle7(9)

//Дано число n (n > 0). Верните из функции значение двойного факториала:
//n!! = n * (n - 2) * (n - 4) * ... * 2n!!=n∗(n−2)∗(n−4)∗...∗2 (или 1, в зависимости от четности n).

function testCycle8(n) {
    let x = n;
    for (let i = 2; i < n; i += 2) {
        x *= (n - i)
    }
    console.log(x);
    return x;
}

testCycle8(7)

//Найдите наибольший общий делитель чисел a и b. (Подсказка: вам поможет алгоритм Евклида и цикл while).

function testCycle9(a, b) {
    let x = 0;
    while (a !== 0 && b !== 0) {
        if (a >= b) {
            x = b;
            a = a - b;
        } else {
            x = a;
            b = b - a;
        }
    }
    console.log(x);
    return x;
}

testCycle9(13, 182)

//Дано число n (n > 1). Проверьте, простое оно или составное. Если число простое - верните из функции строку
//"Простое число", если нет - "Составное число". Воспользуйтесь методом перебора делителей числа.

function testCycle10(n) {
    let x = 'Простое число';
    for (let i = 1; i < n; i++) {
        if (i !== 1 & i !== n && (n % i === 0)) {
            x = 'Составное число';
            break;
        }
    }
    console.log(x);
    return x;
}

testCycle10(56)

//Дано число n (n > 1). Выведите строку, состоящую из простых чисел, меньших n. Воспользуйтесь решетом Эратосфена.
//Единицу не считаем простым числом.

function testCycle11(n) {
    let i;
    let x = [],
        p = 2;
    for (i = 0; i < n; i++) {
        x.push(true);
    }
    while (p * p < n) {
        for (i = 2 * p; i < n; i += p) {
            x[i] = false;
        }
        for (i = p + 1; i <= n; i++) {
            if (x[i]) {
                p = i;
                break;
            }
        }
    }
    const simpleNumbers = [];
    for (i = 2; i < n; i++) {
        if (x[i]) {
            simpleNumbers.push(i);
        }
    }
    console.log(simpleNumbers.toString().replace(/,/g, " "));
    return simpleNumbers.toString().replace(/,/g, " ");
}

testCycle11(5);

//Дано число n. Найдите сумму его цифр.

let n = 2267;

function testCycle12(n) {
    let x = 0;
    while (n !== 0) {
        x += n % 10;
        n = Math.trunc(n / 10);
    }
    console.log(x)
    return x;
}

testCycle12(n)

function testCycle13(n, x = 0) {
    for (let i of String(n)) {
        x += Number(i);
    }
    console.log(x)
    return x;
}

testCycle13(n, x = 0)


//Дано число n. Переведите его в двоичную систему счисления.
function testCycle14(n) {
    let x = '';
    if (n < 0) {
        n = n >>> 0;
    }
    while (Math.ceil(n / 2) > 0) {
        x = n % 2 + x;
        n = Math.floor(n / 2);
    }
    console.log(x)
    return x;
}

testCycle14(19)

//Дано число n (n > 1). Верните из функции n-ное число Фибоначчи

function testCycle15(n) {
    let x = 0;
    let y = 1;
    for (let i = 0; i < n; i++) {
        x = x + y;
        y = x - y;
    }
    console.log(x)
    return x;
}

testCycle15(7)
