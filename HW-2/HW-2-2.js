/*
Бонус:
   Напишите скрипт-калькулятор, который:
Запрашивает два числа и оператор (в любом порядке)
Производит указанную операцию с двумя числами
Выводит ответ
Скрипт должен поддерживать +, -, *, /, **
В случае, если введён неподдерживаемый оператор или невалидные числа - должен выводить ошибку, вместо ответа.*/


const operators = ['+', '-', '*', '/', '**'];
const numbers = [];
let operator = null;
const valuesArr = [];
debugger;


enterValue();
enterValue();
enterValue();

console.log(valuesArr);


function enterValue() {

    let validValue = null;
    while (validValue == null) {
        const enteredValue = prompt('введите число или оператор');

        if (enteredValue == null) {
            alert('Введите число, null не подходит');
        } else if (enteredValue == '') {
            alert('Введите число, пустая строка не подходит');
        } else {
            if (isNaN(enteredValue)) {
                if (operators.includes(enteredValue)) {
                    if (operator === null) {
                        operator = enteredValue;
                        validValue = enteredValue;
                    } else {
                        alert('Оператор уже введен');
                    }
                } else {
                    alert(`Введите число, '${enteredValue}' не подходит`);
                }
            } else {
                const number = Number(enteredValue);
                numbers.push(number);
                validValue = number;
            }
        }
    }
    valuesArr.push(validValue);
}


switch (operator) {
    case '+':
        alert(`результат ${numbers[0] + numbers[1]}`);
        break
    case '-':
        alert(`результат ${numbers[0] - numbers[1]}`);
        break
    case '*':
        alert(`результат ${numbers[0] * numbers[1]}`);
        break
    case '/':
        alert(`результат ${numbers[0] / numbers[1]}`);
        break
    case '**':
        alert(`результат${numbers[0] ** numbers[1]}`);
        break
}


