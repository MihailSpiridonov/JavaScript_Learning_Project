/* 
Задание для упражнения:
Пользователь:
- Возраст
- Наличие работы
- Деньги
Нужно проверить может ли он купить новый MacBook за 2000$? 
Он может брать не только свои деньги, но и взять кредит. 
Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. 
Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.
 */

const PRODUCT_COST_IN_USD = 2000;

function calculateCredit (age, isWorked=false) {
    return  (age >= 24 && isWorked) ? 500 : age >= 24 ? 100 : 0;
};

function canBuy (age, isWorked, cash) {
    if (cash>=PRODUCT_COST_IN_USD) {
        return 'Можете купить данный товар';
    }

    const creditcash =  calculateCredit (age, isWorked);

    return ((cash + creditcash) >= PRODUCT_COST_IN_USD) ? `Можете купить данный товар в кредит. Вам одобрено ${creditcash}` : 'К сожалению вы не можете купить данный товар';
}

console.log ('1 вариант - ' + canBuy(23, true, 2001));
console.log ('2 вариант - ' + canBuy(24, true, 1501));
console.log ('3 вариант - ' + canBuy(23, true, 1501));
console.log ('4 вариант - ' + canBuy(24, false, 1901));
console.log ('5 вариант - ' + canBuy(23, false, 1901));