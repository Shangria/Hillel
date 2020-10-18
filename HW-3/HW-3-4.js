// Напишите скрипт, который принимает порядковый номер числа из ряда и возвращает число.

// Бонус:
// Напишите скрипт, который выводит все простые числа до введённого пользователем.

function returnFibonacciNumber(number) {
    let fibonacciNumber1 = 0;
    let fibonacciNumber2 = 1;
    let currentNumber = 1;
    const arr = [];
    for (let i = 1; i <= number; i++) {
        for (let j = 0; j < i; j++) {
            if (!arr.includes(i)) {
                arr.push(i);
            }
        }
        currentNumber = fibonacciNumber1 + fibonacciNumber2;
        fibonacciNumber1 = fibonacciNumber2;
        fibonacciNumber2 = currentNumber;
    }
    const newArr = arr.slice(0, -1);
    console.log(newArr);
    return currentNumber;
}

console.log(returnFibonacciNumber(prompt('Введите число')));
