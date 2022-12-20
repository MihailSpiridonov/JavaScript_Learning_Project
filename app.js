/*
Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
Он не забанен (isBanned)
Игра не куплена (isExist)
Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат.
*/ 

let balanceMoney = 1000;
let balancePoints = 100;

const needMoney = 1000;
const needPoints = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

if ((balanceMoney >= needMoney || balancePoints >= needPoints) && !isBanned && !isExist && isSelling) {
    console.log('Да! Покупаю!');
} else {
    console.log('Нет! Купить не получится (((');
    switch(true) {
        case (balanceMoney < needMoney):
            console.log('Не достаточно денег');
        case (balancePoints < needPoints):
            console.log('Не достаточно бонусов');
            break;
        case isBanned:
            console.log('Вы забанены!');
            break;
        case isExist:
            console.log('Игра уже куплена!');
            break;
        case !isSelling:
            console.log('Игры нет в продаже!');
            break;
    };
};
