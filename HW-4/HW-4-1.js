// Функция pow(a, b), которая возводит a в степень b. Оператор ** и Math.pow не использовать.

function toPower(a, b) {
    let result = 1;
    if (a === 0) {
        return 0;
    } else {
        for (let i = 0; i < b; i++) {
            result *= a;
        }
    }
    return result;
}

toPower(5, 6);


// Функция createUser(firstName, lastName, age), которая принимает имя, фамилию и возраст,
// а возвращает объект вида {firstName, lastName, age}. Если один из параметров не задан - свойство принимает значение null.


function createUser(firstName, lastName, age) {

    const userObj = {};

    userObj.firstName = firstName || null;
    userObj.lastName = lastName || null;
    userObj.age = age || null;

    return userObj;
}

createUser(prompt('Enter firstName'), prompt('Enter lastName'), Number(prompt('Enter age')));

// Напишите функцию, которая принимает число и две другие функции. Если число меньше 100 - вызывается первая функция. Если больше - вторая.


function doJob(number, fn1, fn2) {
    if (number < 100) {
        if (typeof fn1 === 'function') {
            fn1();
        }
    } else if (number > 100) {
        if (typeof fn2 === 'function') {
            fn2();
        }
    }
}

const number = prompt('Enter number');


// references to functions
function a() {
    alert('A');
}

function b() {
    alert('B');
}

doJob(number, a, 5);


// anonymous functions
doJob(number, function () {
    alert('anonymous1')
}, function () {
    alert('anonymous2')
});

// arrow functions
doJob(number, () => alert('arrow1'), () => alert('arrow2'));

