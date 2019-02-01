'use strict';

const fetch = require('node-fetch');

module.exports = function(obj) {
return new Promise((resolve, reject) => {
	let res;
	function isObject(val) {
        if(val == null) { return false; }
        return ((typeof val == 'function') || (typeof val == 'object'));
    }
    if(!isObject(obj) || isObject(obj) == null || isObject(obj) == false || !obj) reject({ response: 0, message: "Obj must be an object", diff: null, type: null, res: null });
    if(typeof obj.type == "string" && obj.type == "Demon" || typeof obj.diff == "string" && obj.diff == "Demon") {
		obj.type = 2;
		obj.diff = 50;
	}
    if(typeof obj.type == "string" && obj.type == "Auto" || typeof obj.diff == "string" && obj.diff == "Auto") {
		obj.type = 3;
		obj.diff = 50;
	}
    if(!obj.diff || isNaN(obj.diff) || obj.diff.toString().includes('.')) reject({ response: 0, message: "Diff must be a valld non-decimal value", diff: null, type: null, res: null });
    if(!obj.type || isNaN(obj.type) || obj.type.toString().includes('.')) reject({ response: 0, message: "Type must be a valld non-decimal value", diff: null, type: null, res: null });
    if(obj.type == 1) {
    	switch(obj.diff) {
	    	case 10:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "Easy" });
			break;
	    	case 20:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "Normal" });
			break;
	    	case 30:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "Hard" });
			break;
	    	case 40:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "Harder" });
			break;
	    	case 50:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "Insane" });
			break;
			case 0:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "NA" });
			break;
	    }
    } else if(obj.type == 2) {
    	if(obj.diff == 50) {
	    	resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "Demon" });
	    } else {
			reject({ response: 0, message: "Difficult must be 50 for this to work", diff: null, type: null, res: null });
		}
    } else if(obj.type == 3) {
    	if(obj.diff == 50) {
	    	resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, res: "Auto" });
	    } else {
			reject({ response: 0, message: "Difficult must be 50 for this to work", diff: null, type: null, res: null });
		}
    } else {
    	reject({ response: 0, message: "Unknown error or invalid type", diff: null, type: null, res: null });
    }
}); 
}

//Last updated 0.0.3-BETA (WIP)