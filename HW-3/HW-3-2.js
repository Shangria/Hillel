// Напишите скрипт, который запрашивает у пользователя логин и пароль и работает по следующей логике.


const userObj = {
    login: 'Alona',
    password: '1111'
}
const userLogin = prompt('Введите логин');
let userPassword = prompt('Введите пароль');
checkLogin(userLogin);


function checkPassword(password) {
    if (password === userObj.password) {
        console.log('Hi!');
    } else if (password !== userObj.password) {
        userPassword = prompt('Введите пароль еще раз');
        checkPassword(userPassword);
    } else {
        console.log(`${userPassword} неверный!!`);
    }
}

function checkLogin(loginD) {
    switch (loginD) {
        case 'Alona':
            checkPassword(userPassword);
            return;
        default:
            console.log(`Логин ${loginD} неверный`);
            return;
    }
}


// второй вариант

if (userObj.login !== prompt('Введите log')) {
    alert('login not correct');
} else if (userObj.password === prompt('Введите пароль')) {
    alert('hi');
} else if (userObj.password !== prompt('Введите пароль еще раз')) {
    alert('password not correct');
} else {
    alert('Hi');
}

