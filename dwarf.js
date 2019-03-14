// abstract: danger, knowledge, fame


var grammar = {};

grammar['/'] = {
//	'{word}': 100,
	'{name}': 1000,
	'{name}, son of {Dwarfname}': 100,
	'{Dwarfname}, {epithet}': 100,
}

grammar['name'] = {
	'{Dwarfname}': 100,
//	'{Dwarfname}, the {Adjective}': 100,
	'{Adjective} {First}': 100,	
	'{Adjective} {Dwarfname}': 100,	
}

grammar['dwarfname'] = {
	'{First} {Surname}': 100,
	'{First}-{First} {Surname}': 5,
}

grammar['first'] = {
	'Bruenor': 	100,
	'Thorin': 	100,
	'Gimli':  	100,
	'Olaf': 	100,
	'Hrotgar': 	100,
	'{blabla}': 10000,
}

grammar['surname'] = {
	'{Material}{bodypart}': 100,
	'{Material}{equipment}': 100,
	'{Material}{verb}er': 100,
	'{Material}{monster}': 100,
	'{Adjective}{equipment}': 100,
	'{Adjective}{bodypart}': 100,
	'{Equipment}{verb}er': 100,
	'{Monster}sbane': 100,
	'{Monster}slayer': 100,
	'{Monster}hunter': 100,
}

grammar['material'] = {
	"gold": 100, "silver": 100, "bronze": 100, "mithril": 10, "iron": 100, "steel": 100, "oak": 100, 
	"rock": 100, "stone": 100, "diamond": 10,
}

grammar['equipment'] = {
	"axe": 100, "hammer": 100, "shield": 100, "helm": 100, "mug": 100, "beer": 100, "ale": 100,
}

grammar['bodypart'] = {
	"hand": 100, "face": 100, "beard": 500, "leg": 60,
}

grammar['adjective'] = {
	"swift": 100, "strong": 100, "fat": 100, "stubborn": 100, "thirsty": 100, "sharp": 100, "blunt": 100, 
	"brave": 100, "craven": 100, "angry": 100, "hungry": 100, "happy": 100, "sad": 100, "desperate": 100,
}

grammar['epithet'] = {
	'the {adjective}': 100,
	'who makes {monster}s {adjective}': 100,
	'who makes {monster}s {verb}': 100,
	'who makes {equipment}s {adjective}': 100,
	'slayer of {monster}s': 100,
	'bane of {monster}s': 100,
	'hunger of {monster}s': 100,
	'seeker of {monster}s': 100,
	'the {verb}ing {monster}': 100,
}

grammar['monster'] = {
	"monster": 100, "fiend": 10, "demon": 10, "devil": 5,
	"orc": 100, "troll": 40, "dragon": 5, "slug": 100, "wyvern": 10,
}


grammar['verb'] = {
	'crush': 100, 'walk': 100, 'eat': 100, 'speak': 100, 'shout': 100, 'seek': 100, 'fight': 100,
}


grammar['blabla'] = {
	'{Syllables+}': 100,
}

grammar['syllables'] = {
	'': 30,
	'{syllable}': 200,
	'{syllable}{syllables}': 30,
	'{syllable}-{syllables+}': 30,
}

grammar['syllables+'] = {
	'{Syllable}{syllables}': 100,
}

grammar['syllable'] = {
	'bang': 100, 'bork': 100, 'bronk': 100, 'birk': 100,
	'dorn': 100, 'dra': 100, 'drak': 100, 'dhung': 100, 'dong': 100,
	'gond': 100, 'grand': 100,
	'hork': 100, 'hrog': 100, 'hroth': 100, 'hruk': 100,
	'nor': 100, 'nard': 100, 'nung': 100,
	'ong': 100, 'ogh': 100,
	'tork': 100, 'tra': 100, 'thor': 100, 'than': 100, 'torp': 100, 'trop': 100,
	'warr': 100, 'wrag': 100, 
}



