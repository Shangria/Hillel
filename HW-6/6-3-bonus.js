/*
Бонус: Аутентификация 2.0
Создайте скрипт, который будет запрашивать логин и пароль.
Если пользователь существует - скрипт предлагает ввести пароль, пока пользователь не угадает или откажется угадывать.
 Если пользователя с введённым логином не существует - скрипт предлагает создать такого пользователя с новым паролем, а затем предлагает залогиниться.
*/

const arrObj = [];
const user1 = {
    name: 'Vasya',
    password: 1111
};

const user2 = {
    name: 'Vasya',
    password: 2222
};

arrObj.push(user1);
arrObj.push(user2);

const userLogin = prompt('Enter login');

function checkUser(login) {
    debugger
    for (let value of arrObj) {
        if (login === value.name) {
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

}

checkUser(userLogin);

function createNewUser() {
    let newUserObj = {};
    const newName = prompt('Enter new login');
    const newPassword = prompt('Enter new password');

    newUserObj.name = newName;
    newUserObj.password = newPassword;
    arrObj.push(newUserObj);

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
