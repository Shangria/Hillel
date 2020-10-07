/*
Подключите к странице скрипт, который:

Запрашивает у пользователя два числа
Выводит натуральное число (целое и больше нуля), кратное второму и ближайшее к первому
Пример 1: при вводе 100 и 3 выводится 99.
Пример 2: при вводе 39 и 4 выводится 40.
Пример 3: при вводе 0 и 100 выводится 100.
Пример 4: при вводе 2 и 5 выводится 5.
Если пользователь ввёл дробное число - десятичные знаки отбрасываются.
    Если пользователь ввёл невалидные данные - вместо ответа выводится сообщение об ошибке.*/


let input1 = prompt(' Введите число 1');
let input2 = prompt(' Введите число 2');
const result = getResult(Number(input1), Number(input2));
alert(result);

// const userNumber1 = prompt('Введите число');
// const userNumber2 = prompt('Введите число');
//
// const s =Math.round(userNumber1 / userNumber2) * userNumber2
//
// console.log(s)


/*
function getResult(input1, input2) {
    if (input1 > 0 && input1 % input2 === 0) {
        return input1;
    } else {
        let step = 1;
        while (true) {
            let plus = input1 + step;
            let minus = input1 - step;
            let candidates = [plus, minus];
            for (let candidate of candidates) {
                if (candidate > 0 && candidate % input2 === 0) {
                    console.log(`${candidate} is ok`);
                    return candidate;
                } else {
                    console.log(`${candidate} is not ok`);
                }
            }
            step++;
        }
    }
}*/


// function getResult(input1, input2) {
//     if (isOk(input1, input2)) {
//         return input1;
//     } else {
//         let step = 1;
//         while (true) {
//             let plus = input1 + step;
//             let minus = input1 - step;
//             let candidates = [plus, minus];
//             for (let candidate of candidates) {
//                 if (isOk(candidate, input2)) {
//                     return candidate;
//                 }
//             }
//             step++;
//         }
//     }
// }

// function isOk(input1, input2) {
//     if (input1 > 0 && input1 % input2 === 0) {
//         console.log(`${input1} is ok`);
//         return true;
//     } else {
//         console.log(`${input1} is not ok`);
//         return false;
//     }
// }


function getResult(input1, input2) {
    debugger;
    let integers = Math.floor(input1 / input2);

    let candidate1 = (integers + 1) * input2;
    let candidate2 = integers * input2;
    let candidate1Diff = Math.abs(input1 - candidate1);
    let candidate2Diff = Math.abs(input1 - candidate2);

    let candidate1Obj = {value: candidate1, diff: candidate1Diff};
    let candidate2Obj = {value: candidate2, diff: candidate2Diff};

    let candidates = [candidate1Obj, candidate2Obj];
    let result = null;
    for (let candidate of candidates) {
        if (candidate.value > 0) {
            if (result == null || result.diff > candidate.diff) {
                result = candidate;
            }
        }
    }
    if (result == null) {
        return input2;
    } else {
        return result.value;
    }
}