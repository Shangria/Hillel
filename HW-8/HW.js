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
//     function camelize(arr) {
//         return arr.map(function (elem) {
//             let strings = elem.split('-');
//
//             strings = strings.map(function (elem1, index) {
//                 let firstLetter = elem1.charAt(0);
//                 let restLetters = elem1.substr(1);
//                 if (index !== 0) {
//                     firstLetter = firstLetter.toUpperCase();
//                 }
//                 return firstLetter + restLetters;
//             });
//
//             return strings.join('');
//         })
//
//     }
//
//     let result = camelize(stringArr);
//     console.log(result);
// })();
//
//
// (function () {
//     const stringArr = ["background-color", "list-style-image", "-webkit-transition"];
//
//     function camelize(arr) {
//         return arr.map(function (elem) {
//             const strings = elem.split('-');
//
//             let resultElem = '';
//             for (let i = 0; i < strings.length; i++) {
//                 let s = strings[i];
//                 let firstLetter = s.charAt(0);
//                 let restLetters = s.substr(1);
//
//                 if (i !== 0) {
//                     firstLetter = firstLetter.toUpperCase();
//                 }
//                 resultElem += firstLetter + restLetters;
//             }
//
//             return resultElem;
//         })
//
//     }
//
//     let result = camelize(stringArr);
//     console.log(result);
// })();
//
//
(function () {

    function camelize(str) {
        return str
            .split('-')
            .map((elem1, index) => (index === 0 ? elem1.charAt(0) : elem1.charAt(0).toUpperCase()) + elem1.substr(1))
            .join('')

    }

    console.log(camelize("background-color"));
    console.log(camelize("list-style-image"));
    console.log(camelize("-webkit-transition"));
})();


// (function () {
//
//     function camelize(str) {
//         return str
//             .split('-')
//             .reduce((accumulator, currentValue, index) => accumulator += (index === 0 ? currentValue : currentValue.charAt(0).toUpperCase() + currentValue.substr(1)));
//
//     }
//
//     console.log(camelize("background-color"));
//     console.log(camelize("list-style-image"));
//     console.log(camelize("-webkit-transition"));
// })();

//
// (function () {
//
//     function camelize(str) {
//         return str
//             .split('-')
//             .reduce((accumulator, currentValue) => {
//                 debugger;
//                 return accumulator += currentValue.charAt(0).toUpperCase() + currentValue.substr(1);
//             });
//
//     }
//
//     console.log(camelize("background-color"));
//     console.log(camelize("list-style-image"));
//     console.log(camelize("-webkit-transition"));
//     console.log(camelize("-zxzx-dfsdfsdf-sdfsdfsd-fsdfsdf-sdfdfsd-sdfsdf-d-d-d-d-dd-d--dd--d-d"));
// })();
//
//
//
//


// (function () {
//
//     function comparatorNumbersDesc(a, b) {
//         return a - b;
//     }
//
//     function comparatorDesc(a, b) {
//         if (a > b) {
//             return 1;
//         } else if (a < b) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
//
//     function comparatorAsc(a, b) {
//         return comparatorDesc(a, b) * -1;
//     }
//
//     function compareStrings(string1, string2) {
//         return comparatorDesc(string1.toLowerCase(), string2.toLowerCase());
//     }
//
//     console.log(['sdfsdf', 'abc', 'Abc'].sort(comparatorDesc));
//
//     const users = [
//         {name: 'Vasya', surname: 'Ivanov'},
//         {name: 'xxx', surname: 'Ivanov'},
//         {name: 'ccc', surname: 'Ivanov'},
//         {name: 'aaa', surname: 'Ivanov'},
//         {name: 'Vanya', surname: 'Ivanov'},
//         {name: 'Albert', surname: 'Vasyliev'},
//     ];
//
//     function userComparatorByName(user1, user2) {
//         const name1 = user1.name;
//         const name2 = user2.name;
//         return compareStrings(name1, name2);
//     }
//
//     console.log(['sdfsdf', 'abc', 'Abc'].sort(compareStrings));
//     console.log(users.sort(userComparatorByName));
//
//     console.log(users.sort(function (user1, user2) {
//         const name1 = user1.surname;
//         const name2 = user2.surname;
//         let result = compareStrings(name1, name2);
//         if (result === 0) {
//             return userComparatorByName(user1, user2);
//         } else {
//             return result;
//         }
//     }));
//
// })();
//
//
// (function () {
//
//     function random(min, max) {
//         let minimum = Math.min(min, max);
//         let maximum = Math.max(min, max);
//         return minimum + Math.random() * Math.abs(maximum - minimum);
//     }
//
//     console.log(random(-5, -10));
//
// })();
//
//
// (function () {
//
//
//     function getBy(array, key) {
//         let result = {};
//
//         for (let obj of array) {
//             let keyValue = obj[key];
//
//             let bucket = result[keyValue];
//             if (bucket == null) {
//                 bucket = [];
//                 result[keyValue] = bucket;
//             }
//             bucket.push(obj);
//
//         }
//
//         return result;
//     }
//
//
//     const arr = [
//         {name: 'Vasya', surname: 'Ivanov'},
//         {name: 'Vanya', surname: 'Ivanov'},
//         {name: 'Albert', surname: 'Vasyliev'},
//     ];
//
//     console.log(getBy(arr, 'name'));
//     console.log(getBy(arr, 'surname'));
//
// })();
//