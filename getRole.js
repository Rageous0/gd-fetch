'use strict';

const fetch = require('node-fetch');

module.exports = function(role, ignoreErr) {
	if(!role) return console.error("Role is not passed as a parameter");
	if(!ignoreErr) ignoreErr = false;
	if(typeof ignoreErr !== "boolean") return console.error("ignoreErr must be a boolean");
	if(isNaN(role)) {
		if(ignoreErr == true) {
			return console.error("Role is not a number");
		} else if(ignoreErr == false) {
			throw TypeError("Role is not a number");
		}
	}
	if(role.toString().includes('.')) {
		if(ignoreErr == true) {
			return console.error("Role cannot include decimal values");
		} else if(ignoreErr == false) {
			throw RangeError("Role cannot include decimal values");
		}
	}
	switch(role) {
		case 0:
		return "None";
		break;
		case 1:
		return "Mod";
		break;
		case 2:
		return "Elder Mod";
		break;
		default:
		throw RangeError("Couldn't validate role");
	}
}

//Last updated 0.0.3-BETA