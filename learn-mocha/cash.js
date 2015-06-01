var C = {};
C.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]                   
C.getChange = function (totalPayable, cashPaid) {  
	'use strict';
	var change = [];
	var length = C.coins.length;
	var remaining = cashPaid - totalPayable;
	for (var i = 0; i < length, remaining > 0; i+=1) {	
			var changeProcessed = remaining - remaining % C.coins[i];
			for (var n = 1; n <= remaining / C.coins[i]; n += 1) {
				change.push(C.coins[i]);
			}
			remaining -= changeProcessed;
	}
	return change;
};
module.exports = C;            
