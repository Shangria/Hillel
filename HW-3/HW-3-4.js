// Напишите скрипт, который принимает порядковый номер числа из ряда и возвращает число.


function fibonacci(number){
    let fibonacciNumber1 = 1,
        fibonacciNumber2 = 0,
        currentNumber;

    while (number >= 0){
        currentNumber = fibonacciNumber1;
        fibonacciNumber1 = fibonacciNumber1 + fibonacciNumber2;
        fibonacciNumber2 = currentNumber;
        number--;
        console.log(currentNumber)
    }

    return fibonacciNumber2;
}
console.log(fibonacci(prompt('Введите число')));

