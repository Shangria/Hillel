/*
Бонус: Аутентификация 2.0
Создайте скрипт, который будет запрашивать логин и пароль.
Если пользователь существует - скрипт предлагает ввести пароль, пока пользователь не угадает или откажется угадывать.
 Если пользователя с введённым логином не существует - скрипт предлагает создать такого пользователя с новым паролем, а затем предлагает залогиниться.
*/

const user1 = {
    name: 'Vasya',
    password: 1111
}

const userLogin = prompt('Enter login');

function checkUser(login) {
    if (login === user1.name) {
        let userChoice = confirm('This username already exists. Enter password')
        while (userChoice) {
            const password = prompt('Enter password');
            password == user1.password ? userChoice = false : userChoice = true;
        }
    } else {
        createNewUser();
        logIn();
    }
}

checkUser(userLogin);

function createNewUser() {
    let newUserObj = user1;
    const newName = prompt('Enter new login');
    const newPassword = prompt('Enter new password');

    newUserObj.name = newName;
    newUserObj.password = newPassword;

    console.log(newUserObj)
    return newUserObj
}

function logIn() {
    let logInChoice = confirm('want to log in?')
    if (logInChoice) {
        while (logInChoice) {
            const userLogin = prompt('Enter login')
            logInChoice = false;
            checkUser(userLogin);
            alert('Hello!');
        }
    } else {
        alert('by');
    }
}
