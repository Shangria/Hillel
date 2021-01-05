// Создайте класс Vegetable(name), содержащий в себе имя овоща.

class Vegetable {

    constructor(name) {
        this.name = name;
    }
}

// Создайте класс Animal(legs), реализующий метод eat(food). У каждого животного должен быть массив объектов stomach, в который попадает еда food

class Animal {

    constructor(legs) {
        this.legs = legs;
        this.stomach = [];
    }

    eat(food) {
        return this.stomach.push({food});
    }
}


// Создайте класс Rabbit(breed), наследующий от Animal и реализующий метод jump(). При этом, метод eat должен выбрасывать ошибку, если кролик пытается съесть что-то, кроме овощей.


class Rabbit extends Animal {

    constructor(breed, legs) {
        super(legs);
        this.breed = breed;
    }

    jump() {
        console.log(`rabbit jump on ${this.legs} legs`)
    }

    eat(food) {
        if (food instanceof Vegetable) {
            return super.eat(food);
        } else {
            throw new Error('Error');
        }
    }
}

(function () {
    const rabbit = new Rabbit('rabbit', 4);
    console.log(rabbit);
    console.log(rabbit.jump(4));
    console.log(rabbit.eat(new Vegetable('tomato')));
})();


// Создайте класс Snake(isPoisonous), наследующий от Animal и реализующий метод crawl(). При этом, метод eat должен выбрасывать ошибку, если змея ест что-либо, кроме кроликов.


class Snake extends Animal {

    constructor(isPoisonous, legs) {
        super(legs);
    }

    crawl() {
        console.log('snake is crawl')
    }

    eat(food) {
        if (food instanceof Rabbit) {
            return super.eat(rabbit);
        } else {
            throw new Error('Error');
        }
    }
}

(function () {
    const snake = new Snake('viper', 0);
    console.log(snake);
    console.log(snake.crawl());
    console.log(snake.eat(new Rabbit('rabbit', 4)));
})()


// Создайте класс Human(firstName, lastName), наследующий от Animal и реализующий метод walk() и greet(). При этом, метод eat должен выбрасывать ошибку,
// если человек пытается съесть другого человека.
// Ошибка должна быть выброшена, а не просто выведена в консоль. То есть, дальнейшая работа кода должна быть остановлена из-за ошибки.

class Human extends Animal {

    constructor(firstName, lastName, legs) {
        super(legs);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    walk() {
        console.log(`Human walks on ${this.legs} legs`)
    }

    greet() {
        console.log(`Hi ${this.firstName} ${this.lastName}`)
    }

    eat(food) {
        if (food instanceof Human) {
            throw new Error('Error');
        } else {
            return super.eat(food);
        }
    }
}


(function () {
    const human = new Human('Vasya', 'Petrov', 2);
    console.log(human);
    console.log(human.walk());
    console.log(human.greet());
    console.log(human.eat(new Rabbit('rabbit')));
})();
