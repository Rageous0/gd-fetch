'use strict';

const fetch = require('node-fetch');

module.exports = function(obj) {
return new Promise((resolve, reject) => {
	let res;
	function isObject(val) {
        if(val == null) { return false; }
        return ((typeof val == 'function') || (typeof val == 'object'));
    }
    if(!isObject(obj) || isObject(obj) == null || isObject(obj) == false || !obj) reject({ response: 0, message: "Obj must be an object", diff: null, type: null, dtype: null, res: null });
    if(typeof obj.type == "string" && obj.type == "Demon" || typeof obj.diff == "string" && obj.diff == "Demon") {
		obj.type = 2;
		obj.diff = 50;
	}
    if(typeof obj.type == "string" && obj.type == "Auto" || typeof obj.diff == "string" && obj.diff == "Auto") {
		obj.type = 3;
		obj.diff = 50;
	}
	if(!obj.dtype) obj.dtype = -1;
    if(!obj.diff || isNaN(obj.diff) || obj.diff.toString().includes('.')) reject({ response: 0, message: "Diff must be a valld non-decimal value", diff: null, type: null, dtype: null, res: null });
    if(!obj.type || isNaN(obj.type) || obj.type.toString().includes('.')) reject({ response: 0, message: "Type must be a valld non-decimal value", diff: null, type: null, dtype: null, res: null });
    if(!obj.dtype || isNaN(obj.dtype) || obj.dtype.toString().includes('.')) reject({ response: 0, message: "Type must be a valld non-decimal value", diff: null, type: null, dtype: null, res: null });
    if(obj.dtype < -1 || obj.dtype > 6) reject({ response: 0, message: "Not valid demon type", diff: null, type: null, dtype: null, res: null });
    if(obj.type == 1) {
    	switch(obj.diff) {
	    	case 10:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: null, res: "Easy" });
			break;
	    	case 20:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: null, res: "Normal" });
			break;
	    	case 30:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: null, res: "Hard" });
			break;
	    	case 40:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: null, res: "Harder" });
			break;
	    	case 50:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: null, res: "Insane" });
			break;
			case 0:
			resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: null, res: "NA" });
			break;
	    }
    } else if(obj.type == 2) {
    	if(obj.diff == 50) {
	    	switch(obj.dtype) {
				case 2:
				resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: obj.dtype, res: "Easy Demon" });
				break;
				case 3:
				resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: obj.dtype, res: "Medium Demon" });
				break;
				case 4:
				resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: obj.dtype, res: "Hard Demon" });
				break;
				case 5:
				resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: obj.dtype, res: "Insane Demon" });
				break;
				case 6:
				resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: obj.dtype, res: "Extreme Demon" });
				break;
				case -1:
				case 0:
				default:
		    	resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: obj.dtype, res: "Demon" });
				break;
			}
	    } else {
			reject({ response: 0, message: "Difficult must be 50 for this to work", diff: null, type: null, dtype: null, res: null });
		}
    } else if(obj.type == 3) {
    	if(obj.diff == 50) {
	    	resolve({ response: 1, message: null, diff: obj.diff, type: obj.type, dtype: null, res: "Auto" });
	    } else {
			reject({ response: 0, message: "Difficult must be 50 for this to work", diff: null, type: null, dtype: null, res: null });
		}
    } else {
    	reject({ response: 0, message: "Unknown error or invalid type", diff: null, type: null, dtype: null, res: null });
    }
}); 
}

//Last updated 0.0.3-BETA (WIP)