// Напишите вывод числа Фибоначчи по порядковому номеру двумя способами: рекурсией и циклом
// row     => 1, 1, 2, 3, 5, 8, 13, 21
// indexes => 1, 2, 3, 4, 5, 6,  7,  8

function fibonachiIterative(index) {
    if (index === 1 || index === 2) {
        return 1;
    } else {
        let currentIndex = 2;
        let previous = 1;
        let current = 1;
        while (index > currentIndex) {
            let next = previous + current;
            previous = current;
            current = next;
            currentIndex++;
        }
        return current;
    }
}

function fibonachiRecursive(index) {
    if (index < 2) {
        return index
    } else {
        const previous = fibonachiRecursive(index - 1);
        const prePrevious = fibonachiRecursive(index - 2);
        return previous + prePrevious
    }
}

// Напишите функцию, которая считает факториал числа рекурсивно и циклом
function factorialIterative(number) {
    if (number === 0) {
        return 1;
    } else {
        let result = 1;
        while (number > 1) {
            result *= number;
            number--;
        }
        return result;
    }
}

function factorialRecursive(number) {
    if (number <= 1) {
        return 1;
    } else {
        return number * factorialRecursive(--number);
    }
}