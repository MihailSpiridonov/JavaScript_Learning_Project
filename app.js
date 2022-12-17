/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const payRateUSD = 80; /* Ваша часовая ставка 80$ */
const workSchedule = 5; /* вы готовы работать не более 5 часов в день */
const workingDays = 5; /* вы готовы работать 5 дней в неделю */
const openingHours = 40; /* заказ на 40 часов работы */
const daysToWork = 11; /* Вы должны уехать через 11 дней */
const finalСost = payRateUSD * openingHours; /* Конечная стоимость работы */


const daysNeeded = openingHours / workSchedule;
const haveDaysForWork = daysToWork - 2;
let takeAnOrder = haveDaysForWork >= daysNeeded; /* взяться за работу или нет */

console.log('Нужно ' + daysNeeded + ' дней для выполнения заказа');
console.log('Успею поработать ' + haveDaysForWork + ' дней');
console.log('Брать заказ? - ' + takeAnOrder);
console.log('Работа будет стоить ' + finalСost + '$');