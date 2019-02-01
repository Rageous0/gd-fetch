'use strict';

const fetch = require('node-fetch');

module.exports = function(q) {
return new Promise((resolve, reject) => {
	
	function isObject(val) {
        if(val == null) { return false; }
        return ((typeof val == 'function') || (typeof val == 'object'));
    }
    if(!isObject(q) || isObject(q) == null || isObject(q) == false) throw TypeError('The query must be type of object');
	
	let userQuery = ['gameVersion=21', 'binaryVersion=34', 'binaryVersion=34', 'gdw=0', 'total=0', 'secret=Wmfd2893gb7'];
	if(!q.search || typeof q.search !== 'string') reject({ response: 0, message: 'Search query must be type of string', username: null, userid: null, accountid: null });
    if(!q.page || typeof q.page !== 'number' || isNaN(q.page)) reject({ response: 0, message: 'Page cannot be decimal values', username: null, userid: null, accountid: null });
    if(q.page <= 0) reject({ response: 0, message: 'Pages cannot be a negative number', username: null, userid: null, accountid: null });
	if(q.search && q.page) {
		if(typeof q.search == 'string' && q.search.length > 0) {
			if(typeof q.page == 'number' && !isNaN(q.page)) {
				if(q.page.toString().includes('.')) {
					reject({ response: 0, message: 'Page cannot be decimal values', username: null, userid: null, accountid: null });
				} else {
					userQuery.push('str='+q.search);
					userQuery.push('page='+parseInt(q.page-1));
					let query;
					query = userQuery.join('&');
				    fetch('http://www.boomlings.com/database/getGJUsers20.php', {
				        method: 'POST',
	                    body: query,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    })
                    .then(res => res.text())
                    .then(body => {
                        if(body.startsWith('-1') || body.startsWith(-1) || body.length == 0) reject({ response: body, message: 'The server did either return -1 or nothing', username: null, userid: null, accountid: null });
                        let user = body.split(':');
                        let username = user[1];
                        let uid = user[3];
                        let aid = user[22];
                        setTimeout(() => {
					        resolve({ response: 1, message: null, username: username, userid: parseInt(uid), accountid: parseInt(aid) });
					    }, 5);
					}).catch(error => reject({ response: 0, message: ['Query caught an error', error], username: null, userid: null, accountid: null }));
				}
			} else {
				reject({ response: 0, message: 'The page is not a valid number', username: null, userid: null, accountid: null });
			}
		} else {
			reject({ response: 0, message: 'The search string needs to be existant and 1 character long', username: null, userid: null, accountid: null });
		}
	}
	
});
}

//Last updated v0.0.2