'use strict';

const fetch = require('node-fetch');

module.exports = function(q) {
return new Promise((resolve, reject) => {
	
	let levelQueryA = ['gameVersion=21', 'binaryVersion=34', 'gdw=0', 'uncompleted=0', 'completed=0', 'total=0', 'secret=Wmfd2893gb7'];
	
	function levelDataToMap(str) {
	    let map = {};
	    let split = str.split(":");
	    for(let i = 0; i < split.length - 1; i+=2) {
	        map[split[i]] = split[i + 1]
	    }
	    return map;
	}
	
	//Type validation
	function isObject(val) {
        if(val == null) { return false; }
        return ((typeof val == 'function') || (typeof val == 'object'));
    }
    if(!isObject(q) || isObject(q) == null || isObject(q) == false || !q) reject({ response: 0, message: 'The query must be an object', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	if(q.search && q.type) reject({ response: 0, message: 'You cannot search while you provide type', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	
	//Type of the search
	if(!q.search && q.type == 'search') {
		levelQueryA.push('type=2'); //defaults to top liked with normal search so this is the same as type 'ml'
	}
	if(!q.search && q.type == 'md') {
		levelQueryA.push('type=1');
	}
	if(!q.search && q.type == 'ml') {
		levelQueryA.push('type=2');
	}
	if(!q.search && q.type == 'trending') {
		levelQueryA.push('type=3');
	}
	if(!q.search && q.type == 'recent') {
		levelQueryA.push('type=4');
	}
	if(!q.search && q.type == 'magic') {
		levelQueryA.push('type=7');
	}
	if(!q.search && q.type == 'awarded') {
		levelQueryA.push('type=11');
	}
	if(!q.search && q.type == 'featured') {
		levelQueryA.push('type=6');
	}
	if(!q.search && q.type == 'hof') {
		levelQueryA.push('type=16');
	}
	
	//Search by string (search query)
	if(!q.type && q.search) {
		if(!isNaN(parseInt(q.search))) reject({ response: -1, message: 'IDs are not yet supported', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
		if(q.search.length > 0) {
			levelQueryA.push('type=0');
			levelQueryA.push('str='+q.search);
		}
	}
	
	//Search by difficult
	if(q.diff == 'NA') {
		levelQueryA.push('diff=-1');
	}
	if(q.diff == 'Easy') {
		levelQueryA.push('diff=1');
	}
	if(q.diff == 'Normal') {
		levelQueryA.push('diff=2');
	}
	if(q.diff == 'Hard') {
		levelQueryA.push('diff=3');
	}
	if(q.diff == 'Harder') {
		levelQueryA.push('diff=4');
	}
	if(q.diff == 'Insane') {
		levelQueryA.push('diff=5');
	}
	if(q.diff == 'Demon') {
        levelQueryA.push('diff=-2');
	}
	if(q.diff == 'Easy Demon') {
	    levelQueryA.push('diff=-2');
	    levelQueryA.push('demonFilter=1');
	}
	if(q.diff == 'Medium Demon') {
	    levelQueryA.push('diff=-2');
	    levelQueryA.push('demonFilter=2');
	}
	if(q.diff == 'Hard Demon') {
	    levelQueryA.push('diff=-2');
	    levelQueryA.push('demonFilter=3');
	}
	if(q.diff == 'Insane Demon') {
		levelQueryA.push('diff=-2');
	    levelQueryA.push('demonFilter=4');
	}
	if(q.diff == 'Extreme Demon') {
	    levelQueryA.push('diff=-2');
	    levelQueryA.push('demonFilter=5');
	}
	if(q.diff == 'Auto') {
		levelQueryA.push('diff=-3');
	}
	if(!q.diff) {
		levelQueryA.push('diff=-');
	}
	
	//Search by length
	if(q.length == 'tiny') {
		levelQueryA.push('len=0');
	}
	if(q.length == 'short') {
		levelQueryA.push('len=1');
	}
	if(q.length == 'medium') {
		levelQueryA.push('len=2');
	}
	if(q.length == 'long') {
		levelQueryA.push('len=3');
	}
	if(q.length == 'xl') {
		levelQueryA.push('len=4');
	}
	if(!q.length) {
		levelQueryA.push('len=-');
	}
	
	//Get specified page
	if(!q.page) q.page = 1;
	if(isNaN(q.page)) reject({ response: 0, message: 'Page must be a valid number', page: null, names: null, ids: null, creatorids: null});
	if(!isNaN(q.page) && q.page.toString().includes('.')) reject({ response: 0, message: 'Page must be a decimal value', page: null, names: null, ids: null, creatorids: null, diffs: null });
	if(!isNaN(q.page) && !q.page.toString().includes('.')) {
		levelQueryA.push('page='+parseInt(q.page-1));
	}
	
	//Featured
	if(!q.feature) q.feature = false;
	if(typeof q.feature !== 'boolean') reject({ response: 0, message: 'Feature must be type of boolean', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	if(q.feature == true) {
		levelQueryA.push('featured=1');
	} else if(q.feature == false) {
		levelQueryA.push('featured=0');
	}
	
	//Original
	if(!q.original) q.original = false;
	if(typeof q.original !== 'boolean') reject({ response: 0, message: 'Original must be type of boolean', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	if(q.original == true) {
		levelQueryA.push('original=1');
	} else if(q.original == false) {
		levelQueryA.push('original=0');
	}
	
	//twoPlayer
	if(!q.twoplayer) q.twoplayer = false;
	if(typeof q.twoplayer !== 'boolean') reject({ response: 0, message: 'Twoplayer must be type of boolean', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	if(q.twoplayer == true) {
		levelQueryA.push('twoPlayer=1');
	} else if(q.twoplayer == false) {
		levelQueryA.push('twoPlayer=0');
	}
	
	//Epic
	if(!q.epic) q.epic = false;
	if(typeof q.epic !== 'boolean') reject({ response: 0, message: 'Epic must be type of boolean', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	if(q.epic == true) {
		levelQueryA.push('epic=1');
	} else if(q.epic == false) {
		levelQueryA.push('epic=0');
	}
	
	//Coins
	if(!q.coins) q.coins = false;
	if(typeof q.coins !== 'boolean') reject({ response: 0, message: 'Coins must be type of boolean', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	if(q.coins == true) {
		levelQueryA.push('coins=1');
	} else if(q.twoplayer == false) {
		levelQueryA.push('coins=0');
	}

    //Song searching
	if(!q.songType || q.songType == 1) q.songType = 1;
	if(q.songType <= 0 || q.songType > 2) reject({ response: 0, message: 'Valid songType integers are 1 and 2', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
	if(q.songType == 1) {
		if(q.song <= 0 || q.song > 21) reject({ response: 0, message: 'Valid official song numbers are 1-21', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
		if(q.song == 1) {
			levelQueryA.push('song=1');
		}
		if(q.song == 2) {
			levelQueryA.push('song=2');
		}
		if(q.song == 3) {
			levelQueryA.push('song=3');
		}
		if(q.song == 4) {
			levelQueryA.push('song=4');
		}
		if(q.song == 5) {
			levelQueryA.push('song=5');
		}
		if(q.song == 6) {
			levelQueryA.push('song=6');
		}
		if(q.song == 7) {
			levelQueryA.push('song=7');
		}
		if(q.song == 8) {
			levelQueryA.push('song=8');
		}
		if(q.song == 9) {
			levelQueryA.push('song=9');
		}
		if(q.song == 10) {
			levelQueryA.push('song=10');
		}
		if(q.song == 11) {
			levelQueryA.push('song=11');
		}
		if(q.song == 12) {
			levelQueryA.push('song=12');
		}
		if(q.song == 13) {
			levelQueryA.push('song=14');
		}
		if(q.song == 14) {
			levelQueryA.push('song=14');
		}
		if(q.song == 15) {
			levelQueryA.push('song=15');
		}
		if(q.song == 16) {
			levelQueryA.push('song=16');
		}
		if(q.song == 17) {
			levelQueryA.push('song=17');
		}
		if(q.song == 18) {
			levelQueryA.push('song=18');
		}
		if(q.song == 19) {
			levelQueryA.push('song=19');
		}
		if(q.song == 20) {
			levelQueryA.push('song=20');
		}
		if(q.song == 21) {
			levelQueryA.push('song=21');
		}
		levelQueryA.push('customSong=0');
	}
	if(q.songType == 2) {
		if(isNaN(q.song)) reject({ response: 0, message: 'SongID must be type of number', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
		levelQueryA.push('song='+q.song);
		levelQueryA.push('customSong=1');
	}
	
    let levelRes = levelQueryA.join('&');
	let query = `${levelRes}`;
    fetch('http://www.boomlings.com/database/getGJLevels21.php', {
	    method: 'POST',
	    body: query,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(res => res.text())
    .then(body => {
    	if(q.page <= 0) reject({ response: 0, message: 'Page must be be 1 or more', page: null, names: null, ids: null, creatorids: null, diffs: null });
    	if(body.startsWith('-1') || body.startsWith(-1) || body.length == 0) reject({ response: body, message: 'The server did either return -1 or nothing', page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null });
        let content = body.split('|');
        let names = [];
        let ids = [];
        let diffs = [];
        let creators = [];
        for(let i = 0; i <= (9); i++) {
            try {
                let result = levelDataToMap(content[i]);
                names.push(result["2"]);
                ids.push(result["1"]);
                diffs.push(result["9"]);
                creators.push(result["6"]);
            } catch(e) {
                (e);
            }
        }
        setTimeout(() => {
            if(names.length <= 1) {
                resolve({ response: 1, message: null, page: parseInt(q.page), names: names.toString(), ids: ids.toString(), creatorids: creators.toString(), diffs: diffs.toString() });
            } else {
                resolve({ response: 1, message: null, page: parseInt(q.page), names: names, ids: ids, creatorids: creators, diffs: diffs });
            }
        }, 100);
    }).catch(error => reject({ response: 0, message: ['Query caught an error', error], page: parseInt(q.page), names: null, ids: null, creatorids: null, diffs: null }));
    
});
}

//Last updated v0.0.1