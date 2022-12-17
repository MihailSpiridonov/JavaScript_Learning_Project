// Шаблонные строки
const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

// Вариант 1 без шаблонной строки
const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

// Вариант 1 с шаблонной строкой
const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

// Вариант 2 без шаблонной строки
const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);

// Вариант 2 с шаблонной строкой
const template4 = `Проект
Цена ${price}$`;
console.log(template4);
