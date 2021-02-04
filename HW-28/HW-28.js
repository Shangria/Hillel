// hw 28
(async function () {

    async function sendRequest(url, options) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: options?.method || 'GET',
                body: options?.body,
                headers: options?.headers
            })
                .then((response) => {
                    response.text().then((result) => {
                        if (response.ok) {
                            resolve(result);
                        } else {
                            reject(result);
                        }
                    });
                }, (a) => {
                    reject(a);
                });
        });
    }


    async function getRandom(max, probability) {
        return sendRequest(`https://async-demo.herokuapp.com/stable?maxRandom=${max}&prob=${probability}`)
    }

    async function createPerson(person, probability) {
        const json = await sendRequest(`https://async-demo.herokuapp.com/objects?prob=${probability}`, {
            method: 'POST',
            body: JSON.stringify(person)
        });
        return JSON.parse(json);
    }

    async function extendPerson(id, person, probability) {
        const json = await sendRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=${probability}`, {
            method: 'PATCH',
            body: JSON.stringify(person)
        });
        return JSON.parse(json);
    }

    async function deletePerson(id, probability) {
        const json = await sendRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=${probability}`, {
            method: 'DELETE'
        });
        return JSON.parse(json);
    }

    // 28.1
    await (async function () {
        console.info('start 28.1')
        try {
            const random = await getRandom(20, 50);
            for (let i = 0; i < Number(random); i++) {
                console.log('Hello world');
            }
        } catch (e) {
            console.error(e);
        }
    })();

    // 28.2
    await (async function () {
        console.info('start 28.2')
        let person = {firstName: 'Vasya', lastName: 'Ivanov'};

        try {
            let result = await createPerson(person, 20);
            Object.assign(person, result);
        } catch (e) {
            console.error(`Error on creating person: ${e}`);
            return;
        }

        try {
            let result = await extendPerson(person.id, {age: 33}, 20);
            Object.assign(person, result);
        } catch (e) {
            console.error(`Error on extending person: ${e}`);
            return;
        }

        try {
            await deletePerson(person, 20);
        } catch (e) {
            console.error(`Error on deleting person: ${e}`);
        }
    })();


    // 28.3
    await (async function () {
        console.info('start 28.3')
        const probability = 5;
        let persons = [
            {firstName: 'Vasya', lastName: 'Ivanov'},
            {firstName: 'Sobak', lastName: 'Kot'},
            {firstName: 'Yabloko', lastName: 'Grusha'},
        ];

        for (const person of persons) {
            try {
                let result = await createPerson(person, probability);
                Object.assign(person, result);
            } catch (e) {
                console.error(`Error on creating person ${JSON.stringify(person)}: ${e}`);
                return;
            }
        }

        for (const person of persons) {
            let random;
            try {
                random = await getRandom(3, probability);
                random = Number(random);
            } catch (e) {
                console.error(`Error on getting random: ${e}`);
                return;
            }

            try {
                let result = await extendPerson(person.id, {age: random}, probability);
                Object.assign(person, result);
            } catch (e) {
                console.error(`Error on extending person ${JSON.stringify(person)}: ${e}`);
                return;
            }
        }

        let random;
        try {
            random = await getRandom(3, probability);
            random = Number(random);
        } catch (e) {
            console.error(`Error on getting random: ${e}`);
            return;
        }

        for (let i = 0; i < persons.length; i++) {
            if (i !== random) {
                try {
                    await deletePerson(persons[i].id, probability);
                } catch (e) {
                    console.error(`Error on deleting person ${JSON.stringify(persons[i])}: ${e}`);
                    return;
                }
            }
        }
    })();

})();