/*
Создайте функцию-конструктор Cat(name, breed), которая создаёт объект вида {name, breed} с методом meow(), который выводит сообщение “Мяу!”
Создайте функцию-конструктор User(firstName, lastName, age), которая создаёт объект вида {firstName, lastName, age} с методом greet, выводящим приветствие с именем юзера
*/


function Cat(name, breed) {
    this.name = name;
    this.breed = breed;

    this.meow = function () {
        alert(`привет я кот ${this.name} и я скажу тебе мяу!`);
    }
}

const cat = new Cat('Вася', 'сфинкс');
cat.meow();

// Создайте функцию-конструктор User(firstName, lastName, age), которая создаёт объект вида {firstName, lastName, age} с методом greet, выводящим приветствие с именем юзера;

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.greet = function () {
        alert(`Привет я ${this.firstName} ${this.lastName}`);
    }
}

const user = new User('Вася', 'Васильев');
user.greet();