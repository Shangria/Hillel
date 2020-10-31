/*
Дан объект следующего вида:
 const salaries = {
 HRs: { Alice: 500, Bob: 700  },
Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
  };
Создайте копию объекта, в которой все значения будут умножены на два. Первоначальный объект должен остаться неизменным.*/


const salaries = {
    HRs: {
        Alice: 500,
        Bob: 700
    },
    Devs: {
        Carol: 2500,
        Carlos: 1000,
        Charles: 1500
    },
    QAs: {
        Chuck: 1650,
        Craig: 850,
        Dave: 3000
    }
};


function multiplyValues(obj) {
    let salariesCopy = {};

    for (let key in obj) {
        salariesCopy[key] = {};
        for (let key2 in obj[key]) {
            salariesCopy[key][key2] = obj[key][key2] * 2;
        }
    }
    return salariesCopy;
}

console.log(multiplyValues(salaries));


