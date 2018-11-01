// New
var displayInfo = function(section) {
	if(section === 'elves') {
		nazwa.innerHTML = 'Naiym\'vael';
		opis.innerHTML = 'Elfy jedzą szyszki i lubią chłopców.';
	} else if(section === 'humans') {
		nazwa.innerHTML = 'Ludzie Pustkowi';
		opis.innerHTML = 'Ludzie Pustkowi jedzą piasek i noszą gazety jako zbroję.';
	} else if (section === 'dwarves') {
		nazwa.innerHTML = 'Miasta Kuźnie';
		opis.innerHTML = 'Krasnoludy są fajne ponieważ powody.';
	} else if (section === 'constructs') {
		nazwa.innerHTML = 'Konstrukty';
		opis.innerHTML = 'Idzie taka kupa złomu i myśli, że jest fajna. Ale nie jest.';
	} else if (section === 'delaria') {
		nazwa.innerHTML = 'Delaria';
		opis.innerHTML = 'DEUS VULT';
	}
}

var resetInfo = function() {
	nazwa.innerHTML = '';
	opis.innerHTML = '';
}

