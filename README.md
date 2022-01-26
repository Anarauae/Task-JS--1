# Task-JS--1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task JS-1</title>
</head>
<body>
    
    <script src="script1.js"></script>
    <script src="script2.js"></script>
    <script src="script3.js"></script>
    <script src="script4.js"></script>
    <script src="script5.js"></script>
</body>
</html>

// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере

let message = 'We started again Java Script course.';
alert(message);
document.write(message);
console.log(message);

// 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение

let letter = 'Currently I would like to go to Kara-Kol, for skiing.';
//document.write(letter);
console.log(letter);

letter = 'Because now there snow and skiing is my favorite sport.';
//document.write(letter);
console.log(letter);

// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.

let myName = 'Anara Akimkanova';
let myEmail = 'anara.akimkanova.kk@gmail.com';

console.log("My name is: " + myName +'\n' + "My email is: " + myEmail);

// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

let souvenir = 75;
let trinket = 112;
let countSouvenir = Number(prompt("Введите количество сувениров"));
let countTrinket = Number(prompt("Введите количество безделушек"));

let totalWeight = ((souvenir * countSouvenir) + (trinket * countTrinket));

console.log("Общий вес составляет: " + totalWeight + " гр.");

// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
    // - сумма a и b; 
    // - разница между a и b;
    // - произведение a и b; 
    // - частное от деления a на b; 
    // - остаток от деления a на b;  
    // - результат возведения числа a в степень b

    let a = Number(prompt("Введите целое число"));
    let b = Number(prompt("Введите целое число"));

    console.log("a: " + a + ", " + "b: " + b);
    console.log("Сумма a и b: " + (a + b));
    console.log("Разница между a и b: " + (a - b));
    console.log("Произведение a и b: " + (a * b));
    console.log("Частное от деления a на b: " + (a / b));
    console.log("Остаток от деления a на b: " + (a % b));
    console.log("Результат возведения числа a в степень b: " + (a ** b));
