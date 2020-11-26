// Сверстайте произвольную таблицу на 3-5 колонок и 10-20 строк.
// Напишите функцию sortTable(columnIndex). При передаче в sortTable номера колонки, таблица должна отсортироваться по возрастанию по указанной колонке.

const table = document.getElementById('table');
const tbody = document.getElementById('tbody');
let trs = document.querySelectorAll('#tbody tr');
let arrTr = [];
let arrTd = [];
let arrRow = [];
let numberColumn = null;
let td = null;


function sortTable(columnIndex) {
    arrTr = Array.from(trs);
    console.log(arrTr);
    debugger
    arrTr.sort(function (tr1, tr2) {
        return tr1.children[0].innerHTML - tr2.children[0].innerHTML;
    });
    tbody.innerHTML = '';

    for (let tr of arrTr) {
        tbody.append(tr);
    }
}

sortTable(0);

function defineColumn() {
    for (let i = 0; i < trs.length; i++) {
        let tr = trs[i];
        let tds = tr.querySelectorAll('td');
        debugger
        for (let j = 0; j < tds.length; j++) {
            let td = tds[j];
            arrTd.push(td)
        }
    }
    console.log(arrTd);
}

// console.log(`колонка ${numberColumn}`)




