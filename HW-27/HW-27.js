(function () {


    (function () {
        let request = new XMLHttpRequest();
        request.open('get', 'http://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');
        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                for (let i = 0; i < Number(request.response); i++) {
                    console.log('Hello world');
                }
            } else {
                console.error(request.response);
            }
        };
        request.send();
    })();


    (function () {

        function sendJsonRequest(url, httpMethod, payload, onSuccess, onError) {
            let request = new XMLHttpRequest();
            request.open(httpMethod, url);

            request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                    if (onSuccess) {
                        let data
                        try {
                            data = request.response === '' ? null : JSON.parse(request.response);
                        } catch (e) {
                            applyCallback(onError, `Incorrect data returned form server ${request.response}`);
                        }
                        applyCallback(onSuccess, data);
                    }
                } else {
                    applyCallback(onError, request.response);
                }
            };

            request.onError = function () {
                applyCallback(onError, request.response);
            };

            if (payload) {
                let json = JSON.stringify(payload);
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                request.setRequestHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
                request.send(json);
            } else {
                request.send();
            }


            function applyCallback(callback, data) {
                if (callback) {
                    callback(data);
                }
            }

        }

        function createPerson(person, onSuccess, onError) {
            sendJsonRequest('https://async-demo.herokuapp.com/objects?prob=20', 'POST', person, onSuccess, onError);
        }


        function extendPerson(id, person, onSuccess, onError) {
            sendJsonRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=20`, 'PATCH', person, onSuccess, onError);
        }

        function deletePerson(id, onSuccess, onError) {
            sendJsonRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=20`, 'DELETE', null, onSuccess, onError);
        }


        let person = {firstName: 'Vasya', lastName: 'Ivanov'};

        createPerson(person, (response1) => {
            person.id = Number(response1);
            console.log(`Person created: ${JSON.stringify(person)}`);

            extendPerson(person.id, {age: 255}, (response2) => {
                console.log(`Person extended: ${JSON.stringify(person)}`);

                deletePerson(person.id, null, (response3) => {
                    console.log(`Person deleted: ${JSON.stringify(person)}`);
                }, (error) => {
                    console.error(`Error on deleting person: ${error}`);
                })

            }, (error) => {
                console.error(`Error on extending person: ${error}`);
            })


        }, (error) => {
            console.error(`Error on creating person: ${error}`);
        });


    })();

})();