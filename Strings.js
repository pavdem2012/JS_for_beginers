//В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции их суммарную длину.

function testStr(a, b) {
     let x = a.toString().length + b.toString().length;
     console.log(x);
     return x;

}
testStr(5794675, 181683)

//В этом задании в нашу функцию testStr первым параметром передается строка (переменная str), а вторым - число
//(переменная n) . Вам нужно вернуть из функции символ строки , порядковый номер которого указан в переданном
//в функцию числе.

function testStr1(str, n) {
     console.log(str.charAt(n-1))
     return str.charAt(n-1)
}

testStr1('Ithardlycousinmealways', 19)

//В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции строку, которая будет
//включать в себя обе этих строки, преобразовав в первой строке все буквы в заглавные, а во второй - в строчные.

function testStr2(a, b) {
     console.log(a.toUpperCase().concat(b.toLowerCase()))
     return a.toUpperCase().concat(b.toLowerCase())
}

testStr2('Hello', 'World')

//В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть индекс позиции, с которой начинается
//вхождение второй строки в первую.

function testStr3(a, b) {
     console.log(a.indexOf(b, 0))
     return a.indexOf(b, 0)
}
let a = 'This is a test string'
let b = "test"
testStr3(a, b)