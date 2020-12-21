// 1
(function () {
    String.prototype.reverse = function () {
        const string = this;
        const arr = string.split('');
        const result = arr.reverse().join('');
        return result;
    };
})();

// 2
(function () {
    const sortNative = Array.prototype.sort;
    Array.prototype.sort = function () {
        const result = [...this];
        sortNative.apply(result, arguments);
        return result;
    }
})();

// 3
(function () {

    NodeList.prototype.find = function () {
        const array = Array.from(this);
        return Array.prototype.find.apply(array, arguments);
    }

    NodeList.prototype.map = function () {
        const array = Array.from(this);
        return Array.prototype.map.apply(array, arguments);
    }

    NodeList.prototype.reduce = function () {
        const array = Array.from(this);
        return Array.prototype.reduce.apply(array, arguments);
    }

})();


window.addEventListener('load', function () {
    const all = document.querySelectorAll('*');

    const findResult = all.find(elem => elem.tagName === 'DIV' ? elem : undefined);
    console.log('findResult');
    console.log(findResult);


    const mapResult = all.map(elem => elem.tagName);
    console.log('mapResult');
    console.log(mapResult);


    const reduceResult = all.reduce((accumulator, elem) => {
        accumulator.push(elem.tagName + ' -> ' + (elem.id || 'no id'));
        return accumulator
    }, []);
    console.log('reduceResult');
    console.log(reduceResult);

});

