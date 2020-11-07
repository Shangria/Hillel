/*
напишите функцию, которая принимает массив с числами, возвращает их сумму. Решите задачу двумя способами: с помощью цикла и с помощью метода reduce
*/


const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


(function () {
    let result = null;

    function sumOfNumbers(arr) {
        for (let value of arr) {
            result += value;
        }
        console.log(result);
        return result;
    }

    sumOfNumbers(arrNumbers);
})();

(function () {

    function sumOfNumbers(arr) {
        const sumArr = arr.reduce(
            function (sum, current) {
                return sum + current;
            });
        console.log(sumArr);
    }

    sumOfNumbers(arrNumbers);
})();

// Напишите функцию mapToUpperCase(arr), которая принимает массив строк, а возвращает новый массив строк в верхнем регистре. Решите задачу с помощью цикла и метода map


const arrString = ['jingle', 'bells', 'jingle', 'bells', 'jingle', 'all', 'the', 'way'];

(function () {
    const newArrString = [];

    function mapToUpperCase(arr) {
        for (let value of arrString) {
            newArrString.push(value.toUpperCase());
        }
        console.log(newArrString);
    }

    mapToUpperCase(arrString);
})();

(function () {
    function mapToUpperCase(arr) {
        const newArrString = arr.map(
            function (elem) {
                return elem.toUpperCase();
            })
        console.log(newArrString);
    }

    mapToUpperCase(arrString);
})();
