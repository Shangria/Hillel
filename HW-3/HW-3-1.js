// Присвойте переменные двумя способами для каждой схемы: с помощью конструкции if и с помощью тернарного оператора. Операции со строками не использовать.

let answerBeer1;
let userResponse1 = confirm('Хочешь пива?');
if (userResponse1) {
    answerBeer1 = 'Выпей пива!'
} else {
    answerBeer1 = 'Всё равно выпей пива!'
}
console.log(answerBeer1);

const userResponse2 = confirm('Хочешь пива?');
const answerBeer2 = userResponse2 ? 'Выпей пива!' : 'Всё равно выпей пива!';

console.log(answerBeer2);




let answerAge;
const userAge1 = prompt('Введите свой возраст');
if (userAge1 >= 18) {
    if (userAge1 > 30) {
        answerAge = 'Здравствуйте, уважаемый!';
    } else {
        answerAge = 'Тебе нет 30ты, ты ничего не знаешь о жизни!';
    }
} else {
    answerAge = 'Тебе надо подрасти!';
}

console.log(answerAge);

const userAge2 = prompt('Введите свой возраст');
const answerAge2 = userAge2 >= 18 ? userAge2 > 30 ? 'Здравствуйте, уважаемый!' : 'Тебе нет 30ты, ты ничего не знаешь о жизни!' : 'Тебе надо подрасти!';

console.log(answerAge2);




let result;
if (confirm('чай?')) {
    if (confirm('чай с сахаром?')) {
        result = 'чай с сахаром';
    } else {
        result = 'чай без сахара';
    }
} else {
    if (confirm('кофе с сахаром?')) {
        result = 'кофе с сахаром';
    } else {
        result = 'кофе без сахара';
    }
}
console.log(result);


let result1 = confirm('чай?')
    ?
    confirm('чай с сахаром?') ?
        'чай с сахаром' : 'чай без сахара'
    :
    confirm('кофе с сахаром?') ?
        'кофе с сахаром' : 'кофе без сахара';
console.log(result1);


