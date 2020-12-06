// Напишите функцию, которая принимает объект с произвольным уровнем вложенности, а возвращает его глубокую копию.
//     Бонус:
// Функция также должна корректно работать как с обычными объектами, так и с массивами.


function copyObject(obj) {

    if (obj == null) {
        return null;
    } else if (obj instanceof Array) {
        const arr = [];
        for (let value of obj) {
            arr.push(copyObject(value));
        }
        return arr;
    } else if ('object' === typeof obj) {
        const result = {};
        for (let key in obj) {
            result[key] = copyObject(obj[key]);
        }
        return result;
    } else {
        return obj;
    }
}

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
const tableCopy = copyObject(table);