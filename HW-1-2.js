/*
Подключите к станице (во внешнем файле) скрипт, который:

Запрашивает у пользователя имя и фамилию
Запрашивает у пользователя возраст
Выводит произвольное приветствие с полученной информацией

Ответ на вопрос, которй у вас может возникнуть в процессе выполнения: Конкатенация строк.*/

let nameAndSurnameUser = prompt('Your first and last name, please.');
let ageUser = prompt('Enter your age');
alert(`Hello ${nameAndSurnameUser}, you age ${ageUser}`);


/*
Бонус:
* Имя переводится в верхний регистр, фамилия сокращается до первой буквы ("Вася Иванов" -> "ВАСЯ И."). Подсказка: Строки
** Выводится одно случайно выбранное приветствие из трёх. Подсказка: Числа, Условные конструкции*/


let nameUser = prompt("Enter your name", '');
let surnameUser = prompt("Enter your surname", '');

function changeUserName() {
    let resultName = nameUser.toUpperCase();
    let resultSurname = surnameUser.toUpperCase().substr(1, 1) + '.';
    alert(`Your name ${resultName} ${resultSurname}`);
}

changeUserName();


let listArray = ['Hello', 'Hi', 'Hola'];
let rand = Math.floor(Math.random() * listArray.length);

alert(listArray[rand]);



