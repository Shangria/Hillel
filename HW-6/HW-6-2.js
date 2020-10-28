/*
Создайте функцию, которая будет выводить в консоль значения только с числовыми ключами.
Пример:
{
“0”: “zero”,
“42”: “answer”,
“greeting”: “Hello”,
“3.14”: “PI”,
} -> “zero”, “answer”, “PI”*/

const object = {
    '0': 'zero',
    '42': 'answer',
    'greeting': 'Hello',
    '3.14': 'PI',
};

function outputValueWithNumber(obj) {

    let arrNumbersValue = [];
    for (let key in obj) {
        if (!isNaN(key)) {
            arrNumbersValue.push(obj[key])
        }
    }
    return arrNumbersValue;
}

console.log(outputValueWithNumber(object));
