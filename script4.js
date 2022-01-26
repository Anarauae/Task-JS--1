// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

let souvenir = 75;
let trinket = 112;
let countSouvenir = Number(prompt("Введите количество сувениров"));
let countTrinket = Number(prompt("Введите количество безделушек"));

let totalWeight = ((souvenir * countSouvenir) + (trinket * countTrinket));

console.log("Общий вес составляет: " + totalWeight + " гр.");