// INFO: W poniszym kodzie są następujace problemy:
// 1. handlery eventow(onmouseout) są w javascripcie a nie w html.
// 2. Za kazdym razem musisz zerować innerHTML.
// 3. Uzywasz inner Html zamiast css class. Ale o tym porozmawiamy pózniej.
// --
// Moje rozwiazanie: Handlery w html, jedna funkcja na reset. Przerobiłem tak p1 i p2.

var p3 = document.getElementById('krasnoludy');
var p4 = document.getElementById('konstrukty');
var p5 = document.getElementById('delaria');
var nazwa = document.getElementById('nazwa');
var opis = document.getElementById('opis');

// New
var displayInfo = function(section) {
	if(section === 'elves') {
		nazwa.innerHTML = 'Naiym\'vael';
		opis.innerHTML = 'Elfy jedzą szyszki i lubią chłopców.';
	} else if(section === 'humans') {
		nazwa.innerHTML = 'Ludzie Pustkowi';
		opis.innerHTML = 'Ludzie Pustkowi jedzą piasek i noszą gazety jako zbroję.';
	}
}

var resetInfo = function() {
	nazwa.innerHTML = '';
	opis.innerHTML = '';
}

// Old
p3.onmouseover = function() {
	nazwa.innerHTML = 'Miasta Kuźnie';
	opis.innerHTML = 'Krasnoludy są fajne ponieważ powody.';
}

p3.onmouseout = function() {
	nazwa.innerHTML = '';
	opis.innerHTML = '';
}

p4.onmouseover = function() {
	nazwa.innerHTML = 'Konstrukty';
	opis.innerHTML = 'Idzie taka kupa złomu i myśli, że jest fajna. Ale nie jest.';
}

p4.onmouseout = function() {
	nazwa.innerHTML = '';
	opis.innerHTML = '';
}

p5.onmouseover = function() {
	nazwa.innerHTML = 'Delaria';
	opis.innerHTML = 'DEUS VULT';
}

p5.onmouseout = function() {
	nazwa.innerHTML = '';
	opis.innerHTML = '';
}
