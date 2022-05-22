//1
//function max(a, b) {
//return a > b ? a : b;
//}

//2
//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

//function pow(x, n) {
//let result = x;

//for (let i = 1; i < n; i++) {
//result *= x;
// }

//return result;
//}
//let x = prompt("Введите x", '');
//let n = prompt("Введите n", '');
//if (n < 1) {
//alert(`Степень ${n} должно быть больше 0`);
//} else {
// alert(pow(x, n));
//}

//3

//function howManyDays(month) {
//let days = +prompt('Введите месяц');
//switch (days) {
//case 1:
//case 3:
//case 5:
//case 7:
//case 8:
//case 10:
//case 12:
//alert('31 день');
//break;
//case 4:
//case 6:
//case 9:
//case 11:
//alert('30 дней');
//break;
//case 2:
//alert('28 дней');
//break;
//}
// return days;
//}
//howManyDays();

//4

//function calcМultiplication(a, b, even, odd) {
//let multiplication = a * b;

// if (multiplication % 2 === 0) {
//even();
// } else {
//odd();
//}
//}

//let a = prompt('Введите первое число');
//let b = prompt('Введите второе число');

//function even() {
//console.log('число четное');
//};

//function odd() {
//console.log('число нечетное');
//};

//calcМultiplication(a, b, even, odd);

//5
let number = +prompt('Введите число от 1 до 18');

if (number < 1 || number > 18 || number === null || isNaN(number)) {
    alert('Попробуйте снова');
} else {
    for (let number = 1; number <= 19; number++) {
        if (number % 2 === 0) {
            alert(number);
        }
    }
}