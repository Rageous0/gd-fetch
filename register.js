'use strict';

const fetch = require('node-fetch');

module.exports = function(name, pass, mail) {
return new Promise((resolve, reject) => {
	
	let latinChr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	let mailChr = ['.', '@', '-', '_'];
	if(!name || name.length < 3) reject({ response: 0, message: 'Username cannot be empty and needs to be at least 3 characters', registered: null });
	if(pass.length == 0) pass = `${latinChr[Math.floor(Math.random() * latinChr.length)]}${latinChr[Math.floor(Math.random() * (latinChr.length / 2))]}${latinChr[Math.floor(Math.random() * (latinChr.length / 3))]}${latinChr[Math.floor(Math.random() * latinChr.length)]}${latinChr[Math.floor(Math.random() * (latinChr.length / 4))]}${latinChr[Math.floor(Math.random() * (latinChr.length / 2))]}${latinChr[Math.floor(Math.random() * latinChr.length)]}${latinChr[Math.floor(Math.random() * (latinChr.length / 5) + (latinChr.length / 5))]}`;
	if(pass.length < 6) reject({ response: 0, message: 'Password cannot be empty and needs to be at least 6 characters', registered: null, username: name, email: mail, password: pass });
	if(!mail || mail.length < 5) reject({ response: 0, message: 'Mail cannot be empty and needs to be at least 5 characters', registered: null, username: name, email: mail, password: pass });
	if(!mail.includes('@')) reject({ response: 0, message: 'Mail doesn\'t contain any @', registered: null, username: name, email: mail, password: pass });
	if(!mail.includes('.')) reject({ response: 0, message: 'Mail doesn\'t contain any .', registered: null, username: name, email: mail, password: pass });
	for(let i = 0; i <= (name.length - 1); i++) {
		if(latinChr.includes(name.charAt(i))) {
			//continue
		} else {
			reject({ response: 0, message: `Invalid character ${name.charAt(i)} at position ${i} (${i+1})`, registered: null, username: name, email: mail, password: pass });
		}
	}
	for(let i = 0; i <= (pass.length - 1); i++) {
		if(latinChr.includes(pass.charAt(i))) {
			//continue
		} else {
			reject({ response: 0, message: `Invalid character ${pass.charAt(i)} at position ${i} (${i+1})`, registered: null, username: name, email: mail, password: pass });
		}
	}
	for(let i = 0; i <= (mail.length - 1); i++) {
		if(latinChr.includes(mail.charAt(i)) || mailChr.includes(mail.charAt(i))) {
			//continue
		} else {
			reject({ response: 0, message: `Invalid character ${pass.charAt(i)} at position ${i} (${i+1})`, registered: null, username: name, email: mail, password: pass });
		}
	}
	let query = `userName=${name}&password=${pass}&email=${mail}&secret=Wmfv3899gc9`;
	fetch('http://www.boomlings.com/database/accounts/registerGJAccount.php', {
		method: 'POST',
	    body: query,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	})
	.then(res => res.text())
	.then(body => {
		if(body != "1") {
			reject({ response: body, message: 'Registration failed', registered: false, username: name, email: mail, password: pass });
		} else {
			resolve({ response: body, message: null, registered: true, username: name, email: mail, password: pass });
		}
	})
	.catch(error => reject({ response: 0, message: ['Query failed', error], registered: false, username: name, email: mail, password: pass }));
	
});
}

//Last updated 0.0.2