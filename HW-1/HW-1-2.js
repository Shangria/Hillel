/*
Подключите к станице (во внешнем файле) скрипт, который:

Запрашивает у пользователя имя и фамилию
Запрашивает у пользователя возраст
Выводит произвольное приветствие с полученной информацией

Ответ на вопрос, которй у вас может возникнуть в процессе выполнения: Конкатенация строк.*/

const nameAndSurnameUser = prompt('Your first and last name, please.');
const ageUser = prompt('Enter your age');
alert(`Hello ${nameAndSurnameUser}, you age ${ageUser}`);


/*
Бонус:
* Имя переводится в верхний регистр, фамилия сокращается до первой буквы ("Вася Иванов" -> "ВАСЯ И."). Подсказка: Строки
** Выводится одно случайно выбранное приветствие из трёх. Подсказка: Числа, Условные конструкции*/


const nameUser = prompt("Enter your name", '');
const surnameUser = prompt("Enter your surname", '');

function showConvertedUserName() {
    let resultName = nameUser.toUpperCase();
    let resultSurname = surnameUser.toUpperCase().substr(0, 1) + '.';
    alert(`Your name ${resultName} ${resultSurname}`);
}

showConvertedUserName();


const listArray = ['Hello', 'Hi', 'Hola'];
let rand = Math.floor(Math.random() * listArray.length);

alert(listArray[rand]);



