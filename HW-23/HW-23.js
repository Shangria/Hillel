// Напишите функцию, которая принимает объект с произвольным уровнем вложенности, а возвращает его глубокую копию.
//     Бонус:
// Функция также должна корректно работать как с обычными объектами, так и с массивами.

const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    subTags: [
        {
            tagName: 'tr',
            subTags: [
                {
                    tagName: "td",
                    text: "1x1",
                },
                {
                    tagName: "td",
                    text: "1x2",
                },
            ]
        },
        {
            tagName: 'tr',
            subTags: [
                {
                    tagName: "td",
                    text: "2x1",
                },
                {
                    tagName: "td",
                    text: "2x2",
                },
            ]
        }
    ]
}

function copyObject(obj) {
    debugger
    let tableCopy = {};
    let arr = [];

    for (let key in obj) {
        if (obj instanceof Array) {
            for (let value of obj) {
                arr.push(copyObject(obj[key]));
            }
            return arr;
        } else if ('object' === typeof obj[key]) {
            tableCopy[key] = copyObject(obj[key]);
        } else {
            tableCopy[key] = obj[key]
        }
    }
    return tableCopy;
}

const tableCopy = copyObject(table);


