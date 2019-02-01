'use strict';

const fetch = require('node-fetch');
let mainLib = require('./main.js');

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
	mainLib.userSearch({ search: id.toString(), page: 1 }).then(getid => {
		mainLib = getid.accountid;
	}).catch(error => reject({ response: 0, message: ['Failed getting ID', error] }));
	setTimeout(() => {
		if(isNaN(parseInt(id))) reject({ response: 0, message: 'ID is not a number' });
		if(parseInt(id).toString().includes('.')) reject({ response: 0, message: 'ID cannot be a decimal' });
		fetchQueryUser.push(`targetAccountID=${mainLib}`);
	}, 100);
	setTimeout(() => {
		fetch('https://www.boomlings.com/database/getGJUserInfo20.php', {
			method: 'POST',
			body: fetchQueryUser,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.then(res => res.text())
		.then(body => {
			let result = DataToMap(body);
			resolve({ response: 1, message: null, userid: result["2"], accountid: result["16"], username: result["1"], role: result["49"], stats: { stars: parseInt(result["3"]), secretcoins: parseInt(result["13"]), usercoins: parseInt(result["17"]), diamonds: parseInt(result["46"]), demons: parseInt(result["4"]), cp: parseInt(result["8"]), rank: parseInt(result["30"]) }, social: { youtube: `https://www.youtube.com/channel/${result["20"]}`, twitter: `https://twitter.com/${result["44"]}`, twitch: `https://twitch.tv/${result["44"]}` }});
		}).catch(error => reject({ response: 0, message: ['Failed getting ID', error] }));
	}, 250);
});
}