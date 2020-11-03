// Создайте массив [‘Apple’, ‘Banana’, ‘Pineapple’]
// Добавьте в конец массива ‘Orange’ и ‘Grapes’
// Замените значение ‘Banana’ на ‘Peer’
// Удалите последний элемент массива и выведите его в консоль
// Добавьте в начало массива “Watermelon”

const arr = ['Apple', 'Banana', 'Pineapple'];
arr.push('Orange', 'Grapes');
arr.splice(1, 1, 'Peer');
const fruit = arr.pop();
console.log(fruit);
arr.unshift('Watermelon');