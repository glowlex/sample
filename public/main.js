'use strict';
/**
* @see http://artsiom.mezin.eu/technofront/
*/
function onSubmit (form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};

	let result = request('/users', data);

	if (result === '100') {
		form.hidden = true;
		window.helloWorld.innerHTML = hello(data.user);
	}
	
window.helloWorld.innerHTML = hello(data.user) + ',' + "ты уже сюда "
+ result + ' ' + russianPlural(result, ["раз", "раза", "раз",]) + " заходишь!";

	console.log(data, result);
}

function hello (text) {
	return 'Привет, ' + text;
}

if (typeof exports === 'object') {
	exports.hello = hello;
	exports.russianPlural= russianPlural;
}
 
 function russianPlural(num, forms) {
   let last = parseInt(num)%10;
   let rule = 2;
   if (last == 1 && num != 11)
    rule = 0;
   else if ([2,3,4].indexOf(last)>=0 && [12,13,14].indexOf(num)<0)
     rule = 1;
 
   return forms[rule];
  }
