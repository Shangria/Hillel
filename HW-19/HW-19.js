// Выберите section с id “container” без метода querySelector и с ним.
const container = document.querySelector('#container');
console.log(container);
const containerId = document.getElementById('container');
console.log(containerId);

// Выберите все li с классом "second".
const liSecond = document.querySelectorAll('li.second');
console.log(liSecond);

// Выберите li с классом "third" внутри ol .
const liThird = document.querySelectorAll('ol >li.third');
console.log(liThird);

// Поместите текст “Hello” в элемент с классом “header”.
const addHello = document.querySelector('.header');
addHello.textContent = 'Hello';
console.log(addHello);

// Добавьте класс “main” элементу с классом “footer”, а затем уберите его.
const footer = document.querySelector('.footer');
footer.classList.add('main');
footer.classList.remove('main');

// Создайте новый элемент li, затем добавьте в него текст "four".
// Поместите li в элемент u.
const li = document.createElement('li');
const ul = document.querySelector('ul');
li.textContent = 'four';
ul.append(li);

// Сделайте зелёный фон всем li внутри ol.
const greenLi = document.querySelectorAll('ol>li');
for (let i = 0; i < greenLi.length; i++) {
    greenLi[i].style.backgroundColor = "green";
}

// Удалите div с классом “footer”.
const removeDiv = document.querySelector('.footer');
removeDiv.remove();






