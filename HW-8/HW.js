// Напишите функцию powNumbers(arr), которая принимает массив чисел и возвращает их общее произведение.

// (function () {
//     const arr = [2, 1, 3]
//
//     function powNumbers(arr) {
//         const sumArr = arr.reduce((value, elem) => value + elem)
//         console.log(sumArr);
//     }
//
//     powNumbers(arr);
//
// })();

// Напишите функцию camelize, которая принимает строку в кебаб-кейсе, а возвращает в кэмелкейсе:
// camelize("background-color") -> 'backgroundColor';
// camelize("list-style-image") -> 'listStyleImage';
// camelize("-webkit-transition") -> 'WebkitTransition';

// (function () {
//     const stringArr = ["background-color", "list-style-image", "-webkit-transition"];
//
//     function transformInCamelcase(arr) {
//         debugger
//         const newStringArr = arr.map(function (elem) {
//           return   elem.split('-').join('');
//
//         })
//        console.log(newStringArr);
//     }
//
//     transformInCamelcase(stringArr);
// })();
//
