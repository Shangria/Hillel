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
    name: 'Vanya',
    password: 2222
};

arrObj.push(user1);
arrObj.push(user2);

const userLogin = prompt('Enter login');

function checkUser(login) {
    let resultLogin = null;
    let resultPassword = null;
    let userFound = false;
    for (let value of arrObj) {
        if (login === value.name) {
            userFound = true;
            resultLogin = login === value.name;
            resultPassword = value.password;
            if (resultLogin) {
                let userChoice = confirm('This username already exists. Enter password')
                while (userChoice) {
                    const password = prompt('Enter password');
                    userChoice = password == resultPassword ? userChoice = false : userChoice = true;
                }
            }
            break;
        }
    }
    if (!userFound) {
        const newUserObj = createNewUser();
        arrObj.push(newUserObj);
        logIn();
    }
}

checkUser(userLogin);


function createNewUser() {
    let newUserObj = {};
    const newName = prompt('Enter new login');
    const newPassword = prompt('Enter new password');

    newUserObj.name = newName;
    newUserObj.password = newPassword;

    return newUserObj
}

function logIn() {
    let logInChoice = confirm('want to log in?')
    if (logInChoice) {
        while (logInChoice) {
            const userLogin = prompt('Enter login')
            logInChoice = false;
            checkUser(userLogin);
        }
    } else {
        alert('by');
    }
}
