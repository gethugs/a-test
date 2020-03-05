'use strict';

// создать 2 переменные (money и time), которые будут получать данные от пользователя:
// ·      Первая будет спрашивать "Ваш бюджет на месяц?"
// ·      Вторая "Введите дату в формате YYYY-MM-DD"
var money,
    time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || !money) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

// Создать объект appData, который будет содержать такие данные
// ·      бюджет (передаем сюда переменную из п.2)
// ·      данные времени - timeData (передаем сюда переменную из п.2)
// ·      объект с обязательными расходами - expenses (смотри пункт 4)
// ·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
// ·      массив данных с доп. доходом - income (оставляем пока пустым)
// ·      свойство savings (выставляем его как false)
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0, x, y; i < 2; i++) {
            x = prompt('Введите обязательную статью расходов в этом месяце');
            y = prompt('Во сколько обойдется?');

            if (x && y) {
                appData.expenses[x] = y;
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i] = prompt('Статья необязательных расходов?');
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        console.log(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 350) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 350 && appData.moneyPerDay < 1500) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 1500) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            console.log('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    }
};

// Задать пользователю по 2 раза вопросы:
// “Введите обязательную статью расходов в этом месяце”
// “Во сколько обойдется?”
// Записать ответы в объект expenses в формате: 
// expenses: {
// “ответ на первый вопрос” : “ответ на второй вопрос”
// }
appData.chooseExpenses();

appData.chooseOptExpenses();

// let i = 0,
//     x, y;
// while (i < 2) {
//     x = prompt('Введите обязательную статью расходов в этом месяце');
//     y = prompt('Во сколько обойдется?');

//     if (x && y) {
//         appData.expenses[x] = y;
//     } else {
//         i--;
//     }
    
//     i++;
    
// }

// let i = 0,
//     x, y;
// do {
//     x = prompt('Введите обязательную статью расходов в этом месяце');
//     y = prompt('Во сколько обойдется?');

//     if (x && y) {
//         appData.expenses[x] = y;
//         i++;
//     }
// } while (i < 2);


// Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать console.log)
appData.detectDayBudget();

appData.detectLevel();

appData.checkSavings();