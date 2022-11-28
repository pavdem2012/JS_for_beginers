//В этом задании вам нужно вписать в указанное место код, который будет присваивать переменной "х" значение суммы
//переменных "a" и "b" в случае если  a > b или их произведение в остальных случаях.

function testIf(a, b) {
    let x;
    if(a > b){
        x = a + b

    }else{
        x = a * b
    }
    console.log(x)
    return x;
}

testIf(3, 7)

//В этом задании вам нужно вписать в указанное место код, который будет присваивать переменной "х" значение суммы
//переменных "a" и "b" - в случае если  a < b, разность "a" и "b" - в случае если  a > b, и их произведение
//в остальных случаях.

function testIf1(a, b) {
    let x;
    if(a < b){
        x = a + b
    }else if(a > b){
        x = a - b
    }else{
        x = a * b
    }
    console.log(x)
    return x;

}

testIf1(9, 9)

//конструкция switch.case

function testCase(a) {
    let x;
    switch (a) {
        case 0:
            x = "Ноль";
            break;
        case 1:
            x = "Один";
            break;
        case 2:
            x = "Два";
            break;
        case 3:
            x = "Три";
            break;
        case 4:
            x = "Четыре";
            break;
        case 5:
            x = "Пять";
            break;
        case 6:
            x = "Шесть";
            break;
        case 7:
            x = "Семь";
            break;
        case 8:
            x = "Восемь";
            break;
        case 9:
            x = "Девять";
            break;
        default:
            x = "Переменная a не равна 1, 2, 3, 4, 5, 6, 7, 8 или 9!";
    }
    console.log(x)
    return x;
}

testCase(5);

