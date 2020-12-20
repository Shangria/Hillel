// Создайте функцию createRangeFilter(min, max), которая возвращает функцию filter(num).
// Функция должна возвращать true для значений, которые входят в интевал и false для значений, которые не входят.
// Пример: [1, 2, 3, 4, 5, 6].filter(createRangeFilter(2, 4)) -> [2, 3, 4]


function createRangeFilter(min, max) {
    return num => (num >= min && num <= max);
}

(function () {
    window.addEventListener('load', function () {
        let form = document.createElement('form');
        form.setAttribute('autocomplete', 'off')
        form.innerHTML = `
                <h5>Create range filter</h5>
                <div>
                    <input type="text" name="values" placeholder="coma separated values">
                    <input type="number" name="min" placeholder="min">
                    <input type="number" name="max" placeholder="max">
                    <button type="submit">Filter</button>
                </div>
                <div data-role="result"></div>`;
        document.body.appendChild(form);

        let inputValues = form.querySelector('input[name="values"]');
        let inputMin = form.querySelector('input[name="min"]');
        let inputMax = form.querySelector('input[name="max"]');
        let resultContainer = form.querySelector('[data-role="result"]');


        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let values = inputValues.value.split(',');
            let min = Number(inputMin.value);
            let max = Number(inputMax.value);

            let result = values.filter(createRangeFilter(min, max));
            resultContainer.innerHTML = result.join(', ');
        });
    });

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

    window.addEventListener('load', function () {
        const data = [
            {language: 'UA', number: '1', name: 'Vanya'},
            {language: 'UA', number: '4', name: 'Olga'},
            {language: 'RU', number: '1', name: 'Masha'},
            {language: 'RU', number: '5', name: 'Sasha'},
            {language: 'ENG', number: '4', name: 'Dasha'},
            {hre: 'jop'},
        ];

        let keys = data
            .reduce(function (accumulator, current) {
                Object.keys(current).forEach(function (key) {
                    if (!accumulator.includes(key)) {
                        accumulator.push(key);
                    }
                })
                return accumulator;
            }, []);


        let form = document.createElement('form');
        form.setAttribute('autocomplete', 'off')
        form.innerHTML = `
                <h5>Group by key</h5>
                <div>
                    <select name="keys"></select>
                    <button type="submit">Group by key</button>
                </div>
                <div>
                    <table data-role="source-data">
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div data-role="result">
                </div>`;
        document.body.appendChild(form);


        let select = form.querySelector('select[name="keys"]');

        {   // рисуем начальные данные в таблице
            let sourceTable = document.querySelector('table[data-role="source-data"]');
            populateTableWithData(sourceTable, data);
        }

        {   // заполняем выпадающий список
            select.innerHTML = keys.reduce((accumulator, key) => accumulator + `<option>${key}</option>`, '')
        }


        let resultContainer = form.querySelector('[data-role="result"]');


        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let key = select.value;
            let groupedData = createKeyBy(key)(data);

            resultContainer.innerHTML = null;

            for (const [k, v] of Object.entries(groupedData)) {
                let table = document.createElement('table');
                table.innerHTML = `
                    <caption>${k}</caption>
                    <thead></thead>
                    <tbody></tbody>
                `;
                populateTableWithData(table, v);
                resultContainer.appendChild(table);
            }
        });

        function populateTableWithData(tableElement, data) {
            let thead = tableElement.querySelector('thead');
            thead.innerHTML = null;

            let theadRow = document.createElement('tr');
            thead.appendChild(theadRow);
            theadRow.innerHTML = keys.reduce((accumulator, key) => accumulator + `<th>${key}</th>`, '')

            let tbody = tableElement.querySelector('tbody');
            tbody.innerHTML = null;

            data.forEach(function (object) {
                let tr = document.createElement('tr');
                tr.innerHTML = keys.reduce((accumulator, key) => accumulator + `<td>${object[key] ?? ''}</td>`, '')
                tbody.appendChild(tr);
            });
        }
    });
})();


// Создайте функцию createCalcPercent(percent),
// которая возвращает функцию calcPercent(value). Функция calcPercent должна считать percent процентов от value.

function createCalcPercent(percent) {
    return value => (value / 100 * percent);
}

(function () {
    window.addEventListener('load', function () {
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

            let percent = Number(inputPercent.value);
            let value = Number(inputValue.value);

            resultContainer.innerHTML = createCalcPercent(percent)(value);
        });
    });


    const calcPercent50 = createCalcPercent(50);
    console.log(calcPercent50(600));
})();







