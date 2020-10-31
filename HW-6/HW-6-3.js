/*
Дан объект следующего вида:
 const salaries = {
 HRs: { Alice: 500, Bob: 700  },
Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
  };
Создайте копию объекта, в которой все значения будут умножены на два. Первоначальный объект должен остаться неизменным.*/


const salaries = {
    HRs: {
        Alice: 500,
        Bob: 700
    },
    Devs: {
        Carol: 2500,
        Carlos: 1000,
        Charles: 1500
    },
    QAs: {
        Chuck: 1650,
        Craig: 850,
        Dave: 3000
    }
};


function multiplyValues(obj) {
    let salariesCopy = {};

    for (let key in obj) {
        salariesCopy[key] = {};
        for (let key2 in obj[key]) {
            salariesCopy[key][key2] = obj[key][key2] * 2;
        }
    }
    return salariesCopy;
}

console.log(multiplyValues(salaries));


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
