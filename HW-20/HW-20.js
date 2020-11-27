// Сверстайте произвольную таблицу на 3-5 колонок и 10-20 строк.
// Напишите функцию sortTable(columnIndex). При передаче в sortTable номера колонки, таблица должна отсортироваться по возрастанию по указанной колонке.

const table = document.getElementById('table');
const tbody = table.querySelector('tbody');
let trs = tbody.querySelectorAll('tr');

let tds = tbody.querySelectorAll('td');
let arrTd = Array.from(tds);
let arrColumn = [];
let numberColumn = null;
let td = null;
let f;
debugger;

debugger;
Array.from(table.querySelectorAll('thead th')).forEach(function (th, index) {
    th.addEventListener('click', function () {
        sortTable(index);
    })
});


function sortTable(columnIndex) {
    let arrRow = Array.from(trs);

    let comparator;
    switch (columnIndex) {
        case 1:
            comparator = compareStrings;
            break;
        default:
            comparator = compareNumbers;
    }


    arrRow.sort(function (tr1, tr2) {
        let td1 = tr1.children[columnIndex];
        let td2 = tr2.children[columnIndex];
        return comparator(td1.innerHTML, td2.innerHTML);
    });
    tbody.innerHTML = '';

    for (let tr of arrRow) {
        tbody.append(tr);
    }
}


function compareNumbers(number1, number2) {
    return number1 - number2;
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


// function defineColumn() {
//     debugger
//     for (let i = 0; i < trs.length; i++) {
//         let tr = trs[i];
//         let tds = tr.querySelectorAll('td');
//
//         for (let j = 0; j < tds.length; j++) {
//             let td = tds[j];
//             td.innerText = j
//             arrColumn.push(tds[j])
//
//             console.log(arrColumn)
//         }
//
//     }
//
// }
//
//
// defineColumn()





