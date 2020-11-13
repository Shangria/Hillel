// Напишите функцию, random(min, max), которая возвращает случайное целое число от min до max.

(function () {
    const userNumber1 = Number(prompt('Enter number'));
    const userNumber2 = Number(prompt('Enter number'));

    const minimum = Math.min(userNumber1, userNumber2);
    const maximum = Math.max(userNumber1, userNumber2);
    console.log(`min ${minimum} max ${maximum}`);

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    random(minimum, maximum);

})();








































































































