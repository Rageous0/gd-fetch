'use strict';

const fetch = require('node-fetch');
const fs = require('fs');

module.exports = function(id) {
return new Promise((resolve, reject) => {
	
	let fetchQueryLevel = ['gameVersion=21', 'binaryVersion=34', 'gdw=0', 'inc=0', 'extras=0', 'secret=Wmfd2893gb7'];
	if(isNaN(parseInt(id))) reject({ response: 0, message: 'ID is not a number', data: null });
	if(parseInt(id).toString().includes('.')) reject({ response: 0, message: 'ID cannot be a decimal', data: null });
	fetchQueryLevel.push(`levelID=${id}`);
	setTimeout(() => {
		let query = fetchQueryLevel.join('&');
		fetch('http://www.boomlings.com/database/downloadGJLevel22.php', {
			method: 'POST',
	        body: query,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(res => res.text())
        .then(body => {
        	if(body.startsWith('-1') || body.startsWith(-1) || body.length == 0) reject({ response: body, message: 'The server did either return -1 or nothing', data: null, file: null });
        	let level = body.split(':');
            let data = level[7];
            setTimeout(() => {
            	try {
		            resolve({ response: 1, message: null, data: data.slice(0,250)+'...', file: `${__dirname}/levels/${id}.txt` });
		            fs.writeFileSync(`${__dirname}/levels/${id}.txt`, data, "UTF-8");
				} catch(e) {
					reject({ response: 0, message: ['Download failed', e], data: null, file: null });
				}
			}, data.length / 100);
        }).catch(error => reject({ response: 0, message: ['Query failed', error], data: null, file: null }));
    }, 5);
});
}

//Last updated v0.0.2