document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const inputText = form.querySelector('.user-text');
    const buttonAdd = form.querySelector('.add');
    const buttonDel = form.querySelector('.del');
    const list = form.querySelector('ol');

    buttonAdd.addEventListener('click', function (event) {
        event.preventDefault();
        const li = document.createElement('li');
        li.classList.add('border');
        li.innerText = inputText.value;
        list.append(li);
        inputText.value = '';

        li.addEventListener('click', function () {
            li.classList.toggle('add-background');
        })
    });

    buttonDel.addEventListener('click', function (event) {
        event.preventDefault();
        form.querySelectorAll(".add-background").forEach(e => e.remove());
    });
});