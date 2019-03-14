// name gen

var namegen = {};

namegen.grammar = { '{/}': {empty: true} }
	
// counts keys (attributes) in an object
namegen.count = function( obj ) { 
		if( typeof obj == "string")
			obj = this.grammar[obj];
		return Object.keys(obj).length; 
}	
	

// returns a canonically formatted param as a rule
// a rule should have a key element and a weight element
// this makes sure that the weight element is populated; with a default value of 100
namegen.Rule = function (param) {
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

// receives rules, i.e. an associative array of {key: weight} pairs
// returns a randomly selected key based on weight
// e.g. pickone( {foo: 9, bar: 1}) returns "foo" 90% of the time and "bar" 10% of the time
// if rulename starts with a capital letter, 
namegen.pickOne = function( rules, rulename ) {
//	console.log(rule);
	var probs = {};
	var max = 0;
	
	for( var key in rules ) {
		var r = this.Rule(rules[key]);
		probs[key] = max + r.weight;
		max += r.weight;
	}
	
	if( max == 0 ) throw "no keys in: "+rules;
	
	var rnd = Math.trunc( Math.random()*max );
	
	for( var key in probs ) {
		if( probs[key]>rnd ) {
			if( rulename[0] == rulename[0].toLowerCase() )
				return key;		// return transformation as is
			else
				return key[0].toUpperCase() + key.slice(1);	// return transformation with first letter capitalized
		}
	}	
	throw "sg went wrong... :(";
} 

// returns a random transformation of param str as per param grammar
// grammar defines a set of rules, str is a pattern to be transformed
namegen.process = function( str, grammar ) {
	var t = str.match( /^(.*?){(.*?)}(.*)$/);	// checks if any rules can be appied to str 
	if( !t )
		return str;	// if not, returns str as is
	
	// otherwise executes one random transformation, call process on the resulting string and return the result
	return t[1] + this.process( this.pickOne(grammar[ t[2].toLocaleLowerCase() ], t[2])+ t[3], this.grammar ); 
}

// default entry point
function randomName() {
	return namegen.process( '{/}', grammar );
}


