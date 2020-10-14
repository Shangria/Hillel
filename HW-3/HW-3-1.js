// Присвойте переменные двумя способами для каждой схемы: с помощью конструкции if и с помощью тернарного оператора. Операции со строками не использовать.


const userResponse1 = confirm('Хочешь пива?');
if (userResponse1) {
    alert('Выпей пива!')
} else {
    alert('Всё равно выпей пива!')
}

const userResponse2 = confirm('Хочешь пива?');
userResponse2 ? alert('Выпей пива!') : alert('Всё равно выпей пива!');

const userAge1 = prompt('Введите свой возраст');
if (userAge1 >= 18) {
    if (userAge1 > 30) {
        alert('Здравствуйте, уважаемый!');
    } else {
        alert('Тебе нет 30ты, ты ничего не знаешь о жизни!');
    }
} else {
    alert('Тебе надо подрасти!');
}


const userAge2 = prompt('Введите свой возраст');
alert(userAge2 >= 18 ? userAge2 > 30 ? 'Здравствуйте, уважаемый!' : 'Тебе нет 30ты, ты ничего не знаешь о жизни!' : 'Тебе надо подрасти!');

let userChoice = prompt('Введите название напитка');
if (userChoice === 'чай') {
    userChoice = confirm('C сахаром?')
    if (userChoice) {
        alert('Вот Ваш чай с сахаром')
    } else {
        alert('Вот Ваш чай без сахара')
    }
} else if (userChoice) {
    userChoice = confirm('C сахаром?')
    if (userChoice) {
        alert('Вот Ваш кофе с сахаром')
    } else {
        alert('Вот Ваш кофе без сахара')
    }
}


let userChoice2 = prompt('Введите название напитка');
alert(userChoice2 === 'чай' ? userChoice2 = confirm('C сахаром?') ? 'Вот Ваш чай с сахаром' : 'Вот Ваш чай без сахара' : userChoice2 = confirm('C сахаром?') ? 'Вот Ваш кофе с сахаром' : 'Вот Ваш кофе без сахара');


