// Задание 7 по проекту

// · Получить кнопку "Начать расчет" через id
let start = document.getElementById('start');

// · Получить все блоки в правой части программы через классы (которые имеют класс название-value,
// начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
let budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value');

// · Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesInput = document.getElementsByClassName('expenses-item');

// · Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let confirmBtn = document.getElementsByClassName('expenses-item-btn'),
    calculateBtn = document.getElementsByClassName('count-budget-btn');

// · Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalexpensesInput = document.querySelectorAll('.optionalexpenses-item');

// · Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

// 3) Проверить, чтобы все работало и не было ошибок в консоли
// 4) Добавить папку с уроком на свой GitHub
// Вопросы к этому заданию
// Как можно изменить размер шрифта элемента при помощи JS?

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
    },
    chooseIncome: function() {
        let items;
        while (!items || typeof items !== 'string') {
           items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', ''); 
        } 
        appData.income = items.split(', ');
        appData.income.sort();
        console.log('Способы доп. заработка: ');
        appData.income.forEach(function(item) {
            console.log('· ' + item);
        });
    },
    showAppData: function() {
        console.log('Наша программа включает в себя данные: ');
        for (let key in appData) {
            console.log(key + ': ' + appData[key]);
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
// appData.chooseExpenses();

// appData.chooseOptExpenses();

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
// appData.detectDayBudget();

// appData.detectLevel();

// appData.checkSavings();

appData.chooseIncome();

appData.showAppData();