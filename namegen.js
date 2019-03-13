// name gen

function Rule (param) {
	if( typeof(param) == 'object' ) {
		if( param.weight == undefined )
			param.weight = 100;
		return param;
	}
	else {
		var ret = {};
		if( typeof(param) == 'boolean') {
			ret.weight = 100;
		} else if( typeof(param) == 'number') {
			ret.weight = param;
		}
		else
			ret.weight = 100;
		return ret;
	}
}

function pickOne( rule ) {
	var probs = {};
	var max = 0;
	
	for( var key in rule ) {
		var r = new Rule(rule[key]);
		probs[key] = max + r.weight;
		max += r.weight;
	}
	
	if( max == 0 ) throw "no keys in: "+rule;
	
	var rnd = Math.trunc( Math.random()*max );
	
	for( var key in probs ) {
		if( probs[key]>rnd )
			return key;
	}	
	throw "sg went wrong... :(";
} 

function process( str, grammar ) {
	var t = str.match( /^(.*?){(.*?)}(.*)$/);
	if( !t )
		return str;
	
	return t[1] + process( pickOne(grammar[ t[2] ])+ t[3], grammar );
}

function randomName() {
	return process( '{ROOT}', grammar );
}


