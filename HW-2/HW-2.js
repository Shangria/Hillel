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


let input1 = parseInt(prompt(' Введите число 1'));
if (isNaN(input1)) {
    alert('input 1 is not a valid number');
} else {
    let input2 = parseInt(prompt(' Введите число 2'));
    if (isNaN(input2)) {
        alert('input 2 is not a valid number');
    } else if (input2 <= 0) {
        alert('input 2 must be greater than zero');
    } else {
        const result = getResult(input1, input2);
        alert(result);
    }
}


function getResult(input1, input2) {
    if (input1 < 0) {
        return input2;
    } else {
        if (input1 % input2 === 0) {
            return input1;
        } else {
            const rest = input1 / input2;
            const nearest = Math.round(rest);
            if (nearest === 0) {
                return input2;
            } else {
                return nearest * input2;
            }
        }
    }
}


// function getResult(input1, input2) {
// debugger;
//     if (isNaN(input1) || isNaN(input2)) {
//         alert('Введите число!!')
//
//     }
//
//     const integers = Math.floor(input1 / input2);
//     const candidate1 = (integers + 1) * input2;
//     const candidate2 = integers * input2;
//     const candidate1Diff = Math.abs(input1 - candidate1);
//     const candidate2Diff = Math.abs(input1 - candidate2);
//
//     const candidate1Obj = {value: candidate1, diff: candidate1Diff};
//     const candidate2Obj = {value: candidate2, diff: candidate2Diff};
//
//     const candidates = [candidate1Obj, candidate2Obj];
//     let result = null;
//     for (let candidate of candidates) {
//         if (candidate.value > 0) {
//             if (result == null || result.diff > candidate.diff) {
//                 result = candidate;
//             }
//         }
//     }
//     if (result == null) {
//         return input2;
//     } else {
//         return result.value;
//     }
// }


// function getResult(input1, input2) {
//     if (input1 > 0 && input1 % input2 === 0) {
//         return input1;
//     } else {
//         let number = performance.now();
//         let step = 1;
//         while (true) {
//             let plus = input1 + step;
//             let minus = input1 - step;
//             let candidates = [plus, minus];
//             for (let candidate of candidates) {
//                 if (candidate > 0 && candidate % input2 === 0) {
//                     console.log(`${candidate} is ok`);
//                     alert((performance.now() - number) + ' ms');
//                     return candidate;
//                 } else {
//                     console.log(`${candidate} is not ok`);
//                 }
//             }
//             step++;
//         }
//     }
// }


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


