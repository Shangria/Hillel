/*
Придумайте хорошее имея для переменной, которая содежит в себе следующие значения:
Дата рождения текущего пользователя
Минимально допустимый возраст пользователя сайта
Сообщение об ошибке при чтении файла
Ответ на секретный вопрос для восстановления пароля на сайте
Имя первооткрывателя Америки
*/

let userBirthdate = '14.08.1990';
let minimumUserAge = '18 years';
let errorReadingOfTheFiles = 'Problem with files reading from Windows!';
let answerUserSecurityQuestion = 'Bla-bla';
let discovererOfAmerica = 'Christopher Columbus';

console.log(userBirthdate, minimumUserAge, errorReadingOfTheFiles, answerUserSecurityQuestion, discovererOfAmerica);


/*
Бонус:
Функция, открывающая главное меню сайта
Булевое значение (true/false) c информацией о том, может ли пользовать вносит изменения в документ
*/
function openMainMenu() {

}

openMainMenu();

function makeChangesToUserData() {
    let userAnswerToTheQuestions = confirm('Может ли пользовать вносит изменения в документ?');
    alert(userAnswerToTheQuestions);
}

makeChangesToUserData();

