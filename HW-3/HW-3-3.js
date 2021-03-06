/*
У вас есть 4 переменные:

name - имя пользователя (строка)
age - возраст поьлзователя (число)
role - роль пользователя (строка)
occupation - род деятельности пользователя (строка)

Используя эти переменные, напишите следующие операции только с помощью операторов:

Операцию, которая вернёт true, если имя пользователя определено И его возраст больше 18
Операцию, которая вернёт false, если роль пользователя НЕ "Admin" ИЛИ род деятельности НЕ "CEO".
Операцию, которая вернёт род деятельности пользователя, если он определён. Если нет - роль.
Операцию, которая вернёт true, если имя пользователя опеределено И ему больше 18, ЛИБО когда его роль "Admin".


Значения переменных можете захардкодить. Интересует только цепочка операторов.*/


const userName = 'Ivan';
const userAge = 25;
let userRole = 'user';
const userOccupation = 'librarian';


console.log(userAge > 18 && userName !== undefined);
console.log(userRole === 'Admin' || userOccupation === 'CEO');
console.log(userOccupation || userRole);
console.log(userName !== undefined && userAge > 18 || userRole === 'Admin');

// Операцию, которая вернёт возраст пользователя, если его роль НЕ "Admin" И имя опредено. В противном случае - false.
console.log(userRole !== 'Admin' && userName !== undefined && userAge || userRole === 'Admin' && userName === undefined);

userRole = 'Admin';
console.log(userRole !== 'Admin' && userName !== undefined && userAge || userRole === 'Admin' && userName === undefined);