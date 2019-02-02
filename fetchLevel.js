'use strict';

const fetch = require('node-fetch');

module.exports = function(id) {
return new Promise((resolve, reject) => {
	
	function levelDataToMap(str) {
	    let map = {};
	    let split = str.split(":");
	    for(let i = 0; i < split.length - 1; i+=2) {
	        map[split[i]] = split[i + 1]
	    }
	    return map;
	}
	
	let fetchQueryLevel = ['gameVersion=21', 'binaryVersion=34', 'gdw=0', 'inc=0', 'extras=0', 'secret=Wmfd2893gb7'];
	if(isNaN(parseInt(id))) reject({ response: 0, message: 'ID is not a number' });
	if(parseInt(id).toString().includes('.')) reject({ response: 0, message: 'ID cannot be a decimal' });
	fetchQueryLevel.push('levelID='+id);
	setTimeout(() => {
		let query = fetchQueryLevel.join('&');
		fetch('http://www.boomlings.com/database/downloadGJLevel22.php', {
			method: 'POST',
	        body: query,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(res => res.text())
        .then(body => {
        	if(body.startsWith('-1') || body.startsWith(-1) || body.length == 0) reject({ response: body, message: 'The server did either return -1 or nothing' });
        	let result = levelDataToMap(body);
			fetch('http://teamhaxor.netau.net/OnlineHacks/passfinder.php',{
				method: 'POST',
				body: `levelid=${id}`,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.then(res => res.text())
			.then(async(body) => {
				//Credit to teamhaxor for password lookup
				let passc = await body.slice(105).trim();
				let diff = 0;
				let ddiff = '-';
				let isdemon = false;
				let isauto = false;
				let length = 'tiny';
				let original = null;
				let israted = false;
				if(parseInt(result["18"]) > 0) {
					israted = true;
				}
				switch(parseInt(passc)) {
					case -1:
					passc = null;
					break;
					case 0:
					passc = null;
					break;
					case 1:
					passc = 'Free copy';
					default:
					passc = passc;
				}
				switch(parseInt(result["17"])) {
					case 1:
					isdemon = true;
					break;
					default:
					isdemon = false;
				}
				switch(parseInt(result["25"])) {
					case 1:
					isauto = true;
					break;
					default:
					isauto = false;
				}
				switch(parseInt(result["15"])) {
					case 1:
					length = 'tiny';
					break;
					case 2:
					length = 'short';
					break;
					case 3:
					length = 'long';
					break;
					case 4:
					length = 'xl';
					break;
					default:
					length = length;
				}
				switch(parseInt(result["30"])) {
					case 0:
					original = null;
					break;
					default:
					original = original;
				}
				await resolve({ resposne: 1, message: null, name: result["2"], id: parseInt(result["1"]), description: new Buffer(result["3"], 'base64').toString('ascii'), version: parseInt(result["5"]), gameVersion: parseInt(result["13"]), creatorID: parseInt(result["6"]), difficult: parseInt(result["9"]), demondiff: parseInt(result["43"]), isdemon: isdemon, isauto: isauto, objects: parseInt(result["45"]), israted: israted, stars: parseInt(result["18"]), featurescore: parseInt(result["19"]), epic: parseInt(result["42"]), downloads: parseInt(result["10"]), likes: parseInt(result["14"]), length: length, original: original, passcode: passc, audioTrack: parseInt(result["12"]), songID: parseInt(result["35"]), coins: parseInt(result["37"]), verifiedcoins: parseInt(result["38"]), requestedstars: parseInt(result["39"]), uploaded: result["28"] + ' ago', updated: result["29"] + ' ago' });
			}).catch(error => reject({ response: 0, message: ['Query caught an error', error] }));
        }).catch(error => reject({ response: 0, message: ['Query caught an error', error] }));
	}, 5);
	
});
}

//Last updated v0.0.2