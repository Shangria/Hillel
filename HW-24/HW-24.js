// Создайте функцию createRangeFilter(min, max), которая возвращает функцию filter(num).
// Функция должна возвращать true для значений, которые входят в интевал и false для значений, которые не входят.
// Пример: [1, 2, 3, 4, 5, 6].filter(createRangeFilter(2, 4)) -> [2, 3, 4]


function createRangeFilter(min, max) {
    return num => (num >= min && num <= max);
}

(function () {



    const arr = [1, 2, 3, 4, 5, 6]
    const result = arr.filter(createRangeFilter(2, 4));
    console.log(result);
})();


// Создайте функцию createKeyBy(propName),
//которая возвращает функцию keyBy(arr). Функция keyBy должна группировать массив по свойству propName объектов массива.


function createKeyBy(propName) {
    return function keyBy(arr) {
        return arr.reduce(function (accumulator, current) {
            const keyValue = current[propName];
            accumulator[keyValue] = accumulator[keyValue] || [];
            accumulator[keyValue].push(current);
            return accumulator;
        }, {});
    }
}

(function () {
    const arr1 = [
        {language: 'UA', number: '1', name: 'Vanya'},
        {language: 'UA', number: '4', name: 'Olga'},
        {language: 'RU', number: '1', name: 'Masha'},
        {language: 'RU', number: '5', name: 'Sasha'},
        {language: 'ENG', number: '4', name: 'Dasha'},
        {hre: 'jop'},
    ]


    arr1
        .reduce(function (accumulator, current) {
            Object.keys(current).forEach(function (key) {
                if (!accumulator.includes(key)) {
                    accumulator.push(key);
                }
            })
            return accumulator;
        }, [])
        .forEach(function (key) {
            console.log(`create by ${key}:`);
            console.log(createKeyBy(key)(arr1));
        });

    const createByNumber = createKeyBy('number');
    console.log(createByNumber(arr1));

    const createByName = createKeyBy('name');
    console.log(createByName(arr1));
})();


// Создайте функцию createCalcPercent(percent),
// которая возвращает функцию calcPercent(value). Функция calcPercent должна считать percent процентов от value.

function createCalcPercent(percent) {
    return value => (value / 100 * percent);
}

(function () {
    window.addEventListener('load', function () {
        debugger
        let form = document.createElement('form');
        form.setAttribute('autocomplete', 'off')
        form.innerHTML = `
                <h5>Calculate percent</h5>
                <div>
                    <input type="number" name="value" placeholder="value">
                    <input type="number" name="percent" placeholder="percent">
                    <button type="submit">Calculate</button>
                </div>
                <div data-role="result"></div>`;
        document.body.appendChild(form);

        let inputValue = form.querySelector('input[name="value"]');
        let inputPercent = form.querySelector('input[name="percent"]');
        let resultContainer = form.querySelector('[data-role="result"]');


        form.addEventListener('submit', function (event) {
            event.preventDefault();
            resultContainer.innerHTML = null;

            let percent = Number(inputPercent.value);
            let value = Number(inputValue.value);

            resultContainer.innerHTML = createCalcPercent(percent)(value);
        });
    });


    const calcPercent50 = createCalcPercent(50);
    console.log(calcPercent50(600));
})();








