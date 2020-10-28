// Создайте функцию, которая будет возвращать true для пустого объекта ({}) и false для любого, в котором есть хотя бы одной свойство.


const obj1 = {};

const obj2 = {
    name: 'Vasya',
    age: 25
};

function checkTheObject(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

console.log(checkTheObject(obj1));
console.log(checkTheObject(obj2));