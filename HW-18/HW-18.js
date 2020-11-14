// Создайте функцию capitalize(string), которая принимает строку со словами через пробел и заменяет первую букву каждого слова на заглавную

(function () {

    function capitalize(string) {
        return string
            .split(' ')
            .map(value => (value[0].toUpperCase() + value.substr(1)))
            .join(' ');
    }

    capitalize('kla bla pla');

})();

// Напишите функцию checkSubstring(string, substring), которая проверяет наличие подстроки substring
// в строке string. Проверка должна быть нечувствительна к регистру.

(function () {

    function checkSubstring(string, substring) {
        return string.toLowerCase().includes(substring.toLowerCase());
    }

    checkSubstring('London is the capital of Great Britain', 'gahhht');
    checkSubstring('London is the capital of Great Britain', 'london');

})();