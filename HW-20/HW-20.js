// Сверстайте произвольную таблицу на 3-5 колонок и 10-20 строк.
// Напишите функцию sortTable(columnIndex). При передаче в sortTable номера колонки, таблица должна отсортироваться по возрастанию по указанной колонке.

const table = document.getElementById('table');
const tbody = table.querySelector('tbody');
const trs = tbody.querySelectorAll('tr');
const save = tbody.innerHTML;
const thead = table.querySelector('thead')
const tr = thead.querySelector('tr');

const trsHead=Array.from(tr.children)

let configs = {
    0: {
        comparator: compareNumbers,
        sortDir: 'asc',
        currentState: 'unsorted',
    },
    1: {
        comparator: compareStrings,
        sortDir: 'asc',
        currentState: 'unsorted',
    },
    2: {
        comparator: compareNumbers,
        sortDir: 'asc',
        currentState: 'unsorted',
    },
    3: {
        comparator: compareNumbers,
        sortDir: 'asc',
        currentState: 'unsorted',
    },
    4: {
        comparator: compareNumbers,
        sortDir: 'asc',
        currentState: 'unsorted',
    },
}

Array.from(table.querySelectorAll('thead th')).forEach(function (th, index) {
    th.addEventListener('click', function () {
        sortTable(index, configs);
    })
});

// th.addEventListener('click', addClass('arrow-down'));
// th.addEventListener('click', changeClass('arrow-up'));

function addClass(className, index) {
    trsHead[index].classList.add(className);
}

function changeClass(className, index) {
    trsHead[index].classList = className;
}

function removeClass(className,index) {
    trsHead[index].classList.remove(className);
}

function sortTable(columnIndex, configs) {
    debugger
    let config = configs[columnIndex];

    let comparator = config.comparator;
    let dir = config.sortDir;

    if (dir === 'asc') {
        config.sortDir = 'desc';
        addClass('arrow-down', columnIndex)
    } else if (dir === 'desc') {
        config.sortDir = config.currentState;
        changeClass('arrow-up', columnIndex)
    } else if (dir === 'unsorted') {
        tbody.innerHTML = save;
        config.sortDir = 'asc';
        removeClass('arrow-up', columnIndex);
        return;
    } else {
        config.sortDir = 'asc';

    }


    let arrRow = Array.from(trs);

    arrRow.sort(function (tr1, tr2) {
        let td1 = tr1.children[columnIndex];
        let td2 = tr2.children[columnIndex];
        let compareResult = comparator(td1.innerHTML, td2.innerHTML);
        if (dir === 'desc') {
            compareResult = compareResult * -1;
        }
        return compareResult;
    });
    tbody.innerHTML = '';

    for (let tr of arrRow) {
        tbody.append(tr);
    }
}


function compareNumbers(number1, number2) {
    return Number(number1) - Number(number2);
}

function compareStrings(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1 > str2) {
        return 1;
    } else if (str1 < str2) {
        return -1;
    } else {
        return 0;
    }
}




