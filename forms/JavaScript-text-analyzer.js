// Дан textarea. Пусть в него вводится текст.
// Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.
// В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра. Сделайте 4 чекбокса,
// которые будут регулировать, какие именно параметры показывать.

(function () {


    const form = document.createElement('form');
    document.body.appendChild(form);
    const textArea = document.createElement('textarea');
    form.appendChild(textArea);
    const divInputs = document.createElement('div');
    divInputs.innerHTML = `<input type="checkbox"  id="checkbox1">сколько в этом тексте слов?<Br>
                      <input type="checkbox" id="checkbox2">сколько в тексте символов?<Br>
                      <input type="checkbox"  id="checkbox3">сколько в тексте символов за вычетом пробелов?<Br> 
                      <input type="checkbox"  id="checkbox4">какое процентное содержание каждого символа в тексте? 
                      <div id="results"></div> 
                      `
    form.appendChild(divInputs);



    divInputs.addEventListener('click', function (event) {
        debugger;
        const resultsContainer = form.querySelector('#results');
        resultsContainer.innerHTML = '';

        let target = event.target;
        const allInputs = [...divInputs.querySelectorAll('input')];
        console.log(allInputs);
        allInputs.forEach(function (checkbox) {
            if (checkbox !== target) {
                checkbox.checked = false;
            }
        })

        const textAreaValue = String(textArea.value).trim();


        const div = document.createElement('div');


        if (target.id === 'checkbox1') {
            const countWord = (textArea.value).trim().split(' ').length;
            div.innerText = `Вы ввели ${countWord} слово`;
            resultsContainer.appendChild(div);
        } else if (target.id === 'checkbox2') {
            const countSymbol = (textArea.value).trim().length;
            div.innerText = `Вы ввели ${countSymbol} символов`;
            resultsContainer.appendChild(div);
        } else if (target.id === 'checkbox3') {
            const countWithoutSpace = (textArea.value).replace(/ /g, "").length;
            div.innerText = `Вы ввели  без учета пробелов ${countWithoutSpace} символов`;
            resultsContainer.appendChild(div);
        } else if (target.id === 'checkbox4') {
            function calculatePercentCharacters(str) {

                const newStr = [...str];
                const objElements = {};

                for (let element of newStr) {
                    objElements[element] = (objElements[element] || 0) + 1;
                }
                return objElements;
            }

            const objElements = calculatePercentCharacters(textAreaValue);
            calcPercent(objElements);

            function calcPercent(obj) {
                let result;
                const lengthText = textAreaValue.length;
                for (const [key, value] of Object.entries(obj)) {
                    const span = document.createElement('span')
                    let h = value * 100 / lengthText;
                    result = `буква ${key}: встречается ${value} раз, процент  ${Math.abs(h)}%`;
                    span.innerText = result;
                    resultsContainer.appendChild(span);
                }
            }
        }

    })


})();