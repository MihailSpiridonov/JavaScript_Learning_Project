/*
Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const depositUSD = 12000;
const annualRatePercent = 0.07;
const depositTerm = 24;
const homeValue = 13500;

const monthlyRate = annualRatePercent / 12;
const accumulatedAmount = depositUSD * (1 + monthlyRate) ** depositTerm;
const cashResidue = accumulatedAmount - homeValue;
const NotEnoughMoney = homeValue - accumulatedAmount;

if (accumulatedAmount > homeValue) {
    console.log(`Можно купить дом`);
    console.log(`На депозите осталось ${cashResidue}$`);
} else {
    console.log(`На дом нужно ещё накопить ${NotEnoughMoney}$`);
};
