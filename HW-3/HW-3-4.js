// Напишите скрипт, который принимает порядковый номер числа из ряда и возвращает число.

// Бонус:
// Напишите скрипт, который выводит все простые числа до введённого пользователем.

function returnFibonacciNumber(number) {
    let fibonacciNumber1 = 1;
    let fibonacciNumber2 = 1;
    let currentNumber = 1;
    for (let i = 1; i <= number; i++) {
        currentNumber = fibonacciNumber1 + fibonacciNumber2;
        fibonacciNumber1 = fibonacciNumber2;
        fibonacciNumber2 = currentNumber;
    }
    return currentNumber
}

console.log(returnFibonacciNumber(prompt('Введите число')));
