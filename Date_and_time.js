//В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
// Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
// Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".

function testDateTime(a, b) {
    let x = new Date (a);
    let y = new Date (b);
    let day =['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    let i = new Date();
    x.getTime()>=y.getTime() ? i=x : i=y;
    console.log(day[i.getDay()]);
    return day[i.getDay()];
}

testDateTime('19 October 1909 10:27', '28 March 1909 00:59')