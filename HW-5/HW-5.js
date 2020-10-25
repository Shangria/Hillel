/*Напишите игру, в которой пользователь должен угадать число.
Генерируется случайное число от 1 до 100.
Пользователь вводит число
Если число больше сгенерированного - выводится сообщение “Много”.
Если меньше - “Мало”
Когда пользователь угадал - выводится поздравление и предложение сыграть ещё.
Если пользователь соглашается - начинается новая игра.
Если пользователь соглашается - начинается новая игра.
Если нет - скрипт прекращает работу.*/

const generateAnyNumber = () => Math.round(Math.random() * 100);
console.log(generateAnyNumber());

function toPlayAgain() {
    const playAgain = confirm('do you want to play more?')
    return playAgain ? guessTheNumber() : alert('bye Bye');
}

function guessTheNumber(userNumber) {
    debugger
    const generateNumber = generateAnyNumber();

    userNumber = Number(prompt('Enter number'));
    while (userNumber !== generateNumber) {
        if (userNumber > generateNumber) {
            alert('many');
            userNumber = Number(prompt('Enter number'));
        } else if (userNumber < generateNumber) {
            alert('few');
            userNumber = Number(prompt('Enter number'));
        }
    }
    alert('congratulations, play again');
    toPlayAgain();
}

guessTheNumber();