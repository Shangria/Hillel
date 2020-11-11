// Напишите функцию, random(min, max), которая возвращает случайное целое число от min до max.

(function () {
    const userNumber1 = checkNumber(Number(prompt('Enter number')));
    const userNumber2 = checkNumber(Number(prompt('Enter number')));


    function random(min, max) {
        const minimum = Math.min(min, max);
        const maximum = Math.max(min, max);
        console.log(`min ${minimum} max ${maximum}`);
        const randomNumber = Math.floor(Math.random() * (maximum - minimum)) + minimum;
        console.log(randomNumber);
        return randomNumber;
    }

    random(userNumber1, userNumber2);


    function checkNumber(number) {
        while (isNaN(number)) {
            number = Number(prompt('Enter number,stupid'));
        }
        return number;
    }
})();








































































































