'use strict';

let money = +prompt('Ваш месячный доход?'),
    income = 'реклама',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 20000,
    period = 2;
    
    

    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);

    console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяца');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));



let expenses1 = prompt('Введите обязательную статью расходов?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    amount2 = +prompt('Во сколько это обойдется?'),
    budgetMonth = (money - (amount1 + amount2));
    console.log(budgetMonth);
let target1 = (mission / budgetMonth);
    console.log(Math.ceil(target1));
let budgetDay = +budgetMonth / 30;
    console.log(Math.floor(budgetDay));
    switch (true) {
        case (+budgetDay > 1200):
            console.log('У вас высокий уровень дохода');
            break;
        case ((+budgetDay > 600) && (+budgetDay < 1200)):
            console.log('У вас средний уровень дохода');
            break;
        case ((+budgetDay < 600) && (+budgetDay > 0)):
            console.log('К сожалению у вас уровень дохода ниже среднего');
            break;
        case (+budgetDay < 0):
            console.log('Что то пошло не так');
            break;
            default:
                console.log('не работает');       


    }






