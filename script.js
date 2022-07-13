"use strict";

// alert('hello');

// let result = confirm("are u here?");

// document.writeln('<h4>'+ result +'</h4>');
// console.log(result);



// let verif = confirm("18 есть,чмо?");
// if (verif == false) {
//     alert("пошел нахуй отсюда!");
//     close();
// } else {
//     alert("zaxodi")
// };
var answer = {
    data: "тут данные ",
};
answer.age = prompt("age?","");
if (answer.age < 88) {
    alert("пошел нахуй отсюда!");
    close();
    stop(script);
};

answer.name = prompt("name?","");
answer.lastname = prompt("lastname?","");

document.write(`<div id='cent'><font color='white'><h3>${answer.data}${answer.name}а:</font><br>возраст: ${answer.age}<br>имя: ${answer.name}<br>фамилия:${answer.lastname}</h3></div>`);
