/*
напишите функцию, которая принимает массив с числами, возвращает их сумму. Решите задачу двумя способами: с помощью цикла и с помощью метода reduce
*/


const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


(function () {

    function sumOfNumbers(arr) {
        let result = null;
        for (let value of arr) {
            result += value;
        }
        return result;
    }

    sumOfNumbers(arrNumbers);
})();

(function () {

    function sumOfNumbers(arr) {
        const sumArr = arr.reduce((sum, current) => sum + current);
        return sumArr;
    }

    sumOfNumbers(arrNumbers);
})();

// Напишите функцию mapToUpperCase(arr), которая принимает массив строк, а возвращает новый массив строк в верхнем регистре. Решите задачу с помощью цикла и метода map


const arrString = ['jingle', 'bells', 'jingle', 'bells', 'jingle', 'all', 'the', 'way'];

(function () {

    function mapToUpperCase(arr) {
        const newArrString = [];
        for (let value of arr) {
            newArrString.push(value.toUpperCase());
        }
        return newArrString;
    }

    mapToUpperCase(arrString);
})();

(function () {
    function mapToUpperCase(arr) {
        const newArrString = arr.map((elem) => elem.toUpperCase());
        return newArrString
    }

    mapToUpperCase(arrString);
})();

