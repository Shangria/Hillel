// Напишите функцию keyBy(arr, key), которая принимает массив объектов, а возвращает объект, сгруппированный по ключу key.
//     Пример:
// const arr = [
//     {name: ‘Vasya’, surname: ‘Ivanov’},
// {name: ‘Vanya’, surname: ‘Ivanov’},
// {name: ‘Albert’, surname: ‘Vasyliev’},
// ]
//
// keyBy(arr, ‘name’) // -> {
// ‘Vasya’: [{name: ‘Vasya’, surname: ‘Ivanov’}],
// ‘Vanya’: [{name: ‘Vanya’, surname: ‘Ivanov’}],
// ‘Albert’: [{name: ‘Albert’, surname: ‘Vasyliev’}],
// }
//
// keyBy(arr, ‘surname’) // -> {
// ‘Ivanov’: [
//     {name: ‘Vasya’, surname: ‘Ivanov’},
// {name: ‘Vanya’, surname: ‘Ivanov’}
// ],
// ‘Vasyliev’: [{name: ‘Albert’, surname: ‘Vasyliev’}],
// }

(function () {

    const arr = [
        {name: 'Vasya', surname: 'Ivanov'},
        {name: 'Vanya', surname: 'Ivanov'},
        {name: 'Albert', surname: 'Vasyliev'},
    ];

    function keyBy(arr, key) {
        return arr.reduce(function (accumulator, current) {
            const keyValue = current[key];
            accumulator[keyValue] = accumulator[keyValue] || [];
            accumulator[keyValue].push(current);
            return accumulator;
        }, {});
    }

    keyBy(arr, 'name');
    keyBy(arr, 'surname');

})();