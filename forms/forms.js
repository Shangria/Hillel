document.addEventListener('DOMContentLoaded', function (event) {

    let form = document.querySelector('form');
    let submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let object = {};
        [...form.querySelectorAll('textarea, input')].forEach(function (elem) {
            if (elem.value == '') {
                elem.classList.add('invalid');
            } else {
                elem.classList.remove('invalid');
            }

            object[elem.name] = elem.value;
        });
        alert(JSON.stringify(object));


    });


});