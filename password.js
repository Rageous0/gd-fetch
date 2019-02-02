'use strict';

const fetch = require('node-fetch');

module.exports = function(text) { 
return new Promise((resolve, reject) => {

	if(!text) reject({ response: 0, message: 'You need a string to password encode', password: null });
	if(text < 6) reject({ response: 0, message: 'Password cannot be less than 6 characters', password: null });
	
	fetch(`https://rageous0.altervista.org/gd/main.php?xor=${text}`, {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	})
	.then(res => res.text())
	.then(body => {
		if(body.startsWith('-1') || body.startsWith(-1) || body.length == 0) reject({ response: -1, message: 'The server did either return -1, nothing or string to encoding failed', password: null });
		resolve({ response: 1, message: null, password: body });
	}).catch(error => reject({ response: 0, message: ['Query caught an error', error], password: null }));
	
});
}