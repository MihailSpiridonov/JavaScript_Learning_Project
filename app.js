/* 
Задача:
Переписать данную функцию в стрелочную  и положить её в переменную
 */

function toPower (num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));

/* Выполнение задачи */

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2, 3));