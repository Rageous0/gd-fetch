'use strict';

const fetch = require('node-fetch');
let usrch = require('./userSearch.js');
let x;

module.exports = function(id) {
return new Promise((resolve, reject) => {
	function DataToMap(str) {
	    let map = {};
	    let split = str.split(":");
	    for(let i = 0; i < split.length - 1; i+=2) {
	        map[split[i]] = split[i + 1]
	    }
	    return map;
	}
	let fetchQueryUser = ['gameVersion=21', 'binaryVersion=34', 'gdw=0', 'udid=00000000-52ac-a9bf-2fd2-dbaf2f3f343c', 'uuid=98840428', 'secret=Wmfd2893gb7'];
	usrch({ search: id.toString(), page: 1 }).then(async(r) => {
		x = await r.accountid;
		if(isNaN(parseInt(id))) reject({ response: 0, message: 'ID is not a number' });
		if(parseInt(id).toString().includes('.')) reject({ response: 0, message: 'ID cannot be a decimal' });
		await fetchQueryUser.push(`targetAccountID=${x}`);
		await fetch('http://www.boomlings.com/database/getGJUserInfo20.php', {
			method: 'POST',
			body: encodeURI(fetchQueryUser.join('&')),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.then(async(res) => res.text())
		.then(async(body) => {
			if(body.startsWith('-1') || body.startsWith(-1) || body.length < 1) reject({ response: 0, message: 'The server did either return -1 or nothing' });
			let result = await DataToMap(body);
			await resolve({ response: 1, message: null, userid: parseInt(result["2"]), accountid: parseInt(result["16"]), username: result["1"], role: parseInt(result["49"]), stats: { stars: parseInt(result["3"]), secretcoins: parseInt(result["13"]), usercoins: parseInt(result["17"]), diamonds: parseInt(result["46"]), demons: parseInt(result["4"]), cp: parseInt(result["8"]), rank: parseInt(result["30"]) }, social: { youtube: result["20"] ? `https://www.youtube.com/channel/${result["20"]}` : "", twitter: result["44"] ? `https://twitter.com/${result["44"]}` : "", twitch: result[45] ? `https://twitch.tv/${result["45"]}` : ""}});
		}).catch(error => reject({ response: 0, message: ['Failed getting data', error] }));
	}).catch(error => reject({ response: 0, message: ['Failed getting ID', error] }));
});
};

//Last updated 0.0.3-BETA
