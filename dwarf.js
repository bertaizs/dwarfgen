
var grammar = {};

grammar['ROOT'] = {
	'{dwarfname}': true,
} 

grammar['dwarfname'] = {
	'{first}, son of {first}': 100,
	'{first} {surname}': 100,
	'{first}-{first} {surname}': 10,
}

grammar['first'] = {
	'Bruenor': 	100,
	'Thorin': 	100,
	'Gimli':  	100,
	'Olaf': 	100,
	'Hrotgar': 	100,
}

grammar['surname'] = {
	'{noun}{verb}er': 100,
}

grammar['noun'] = {
	'Axe': 100,
	'Hammer': 100,
	'Beard': 100,
/*	'stone': 100,
	'rock': 100,
	'gold': 100,
	'silver': 100,
	'iron': 100,
	'steel': 100,
	'mithril': 1,	// because mithril is a rare metal
	'thunder': 10, */
}

grammar['verb'] = {
	'mine': 100,
	'crush': 100,
	'mine': 100,
	'walk': 100,
}



