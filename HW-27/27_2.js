// (function () {
//         const xhr = new XMLHttpRequest();
//         const urlGet = 'https://async-demo.herokuapp.com/unstable?maxRandom=10&prob=50';
//         xhr.open('GET', urlGet);
//         xhr.addEventListener('load', function () {
//             if (xhr.status <= 200 && xhr.status > 300) {
//                 console.error(xhr.response);
//             } else {
//                 const xhrCount = xhr.response;
//                 for (let i = 0; i < xhrCount; i++) {
//                     console.log('Hi, world!')
//                 }
//             }
//         })
//         xhr.send();
//     }
// )();

(function () {
    const errorProbability = 0;

    function logMessage(message) {
        console.log(message);
        let div = document.createElement('div');
        div.innerText = message;
        document.body.appendChild(div);
    }

    function sendXMLHttpRequest(url, method, data, onSuccess, onError) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        if (data != null) {
            data = JSON.stringify(data);
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.addEventListener('load', function () {
            if (xhr.status < 200 || xhr.status >= 300) {
                onError(xhr.response);
            } else {
                let json = xhr.response;
                let object = json === '' ? null : JSON.parse(json);
                onSuccess(object);
            }
        });

        xhr.send(data);
    }

    function getAllUsers(onSuccess, onError) {
        sendXMLHttpRequest(`https://async-demo.herokuapp.com/objects?prob=${errorProbability}`, 'get', null, onSuccess, onError);
    }

    function createUser(user, onSuccess, onError) {
        sendXMLHttpRequest(`https://async-demo.herokuapp.com/objects?prob=${errorProbability}`, 'post', user, onSuccess, onError);
    }

    function extendUser(id, userPart, onSuccess, onError) {
        sendXMLHttpRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=${errorProbability}`, 'PATCH', userPart, onSuccess, onError);
    }

    function updateUser(user, onSuccess, onError) {
        sendXMLHttpRequest(`https://async-demo.herokuapp.com/objects/${user.id}?prob=${errorProbability}`, 'patch', user, onSuccess, onError);
    }

    function deleteUser(id, onSuccess, onError) {
        sendXMLHttpRequest(`https://async-demo.herokuapp.com/objects/${id}?prob=${errorProbability}`, 'delete', null, onSuccess, onError);
    }


    // let i = 0;
    // while (i++ < 20) {
    //     logMessage(`Create User`);
    //     debugger;
    //     createUser({firstName: 'Vasya', lastName: 'Ivanov'},
    //         function (successData) {
    //             debugger;
    //             logMessage(`User ${JSON.stringify(successData)} created successfully`);
    //         }, function (errorData) {
    //             debugger;
    //             logMessage(`Error on creating user`);
    //         })
    // }


    // logMessage(`Retrieve all users`);
    // getAllUsers(function (successData) {
    //     debugger;
    //     logMessage(`All users successfully retrieved: ${JSON.stringify(successData)}`);
    //
    //     successData.forEach(function (user) {
    //         logMessage(`Delete user ${user.id}`);
    //         deleteUser(user.id,
    //             function (successData1) {
    //                 debugger;
    //                 logMessage(`User ${user.id} Deleted successfully`);
    //             }, function (errorData1) {
    //                 debugger;
    //                 logMessage(`Error on deleting user ${user.id}: ${errorData1}`);
    //             })
    //     });
    //
    //
    // }, function (errorData) {
    //     debugger;
    //     logMessage(`Error on retrieving all users: ${errorData}`);
    // });


    let person = {
        firstName: 'Vasya',
        lastName: 'Ivanov',
    };

    debugger;
    logMessage(`Create user ${JSON.stringify(person)}`);
    createUser(person,
        function (successData) {
            debugger;
            logMessage(`User ${JSON.stringify(successData)} created successfully`);
            Object.assign(person, successData);

            let userPart = {age: 45, job: 'driver', firstName: 'Vova'};
            logMessage(`Extend user ${JSON.stringify(person)} with ${JSON.stringify(userPart)}`);
            extendUser(person.id, userPart,
                function (successData1) {
                    debugger;
                    logMessage(`User ${JSON.stringify(person)} extended with ${JSON.stringify(userPart)} successfully`);
                    Object.assign(person, successData1);


                    logMessage(`Delete user ${person.id}`);
                    deleteUser(person.id,
                        function (successData2) {
                            debugger;
                            logMessage(`User ${person.id} deleted successfully`);
                        }, function (errorData2) {
                            debugger;
                            logMessage(`Error on deleting user ${person.id}: ${errorData2}`);
                        })


                }, function (errorData1) {
                    debugger;
                    logMessage(`Error on extending user ${JSON.stringify(person)} with ${JSON.stringify(userPart)}: ${errorData1}`);
                })


        }, function (errorData) {
            debugger;
            logMessage(`Error on creating user ${JSON.stringify(person)}: ${errorData}`);
        })




})();