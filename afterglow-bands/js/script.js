var p1 = document.getElementById('elfy'),
	p2 = document.getElementById('ludzie'),
	p3 = document.getElementById('krasnoludy'),
	p4 = document.getElementById('konstrukty'),
	p5 = document.getElementById('delaria'),
	nazwa = document.getElementById('nazwa'),
	opis = document.getElementById('opis');

p1.onmouseover = function() {
	nazwa.innerHTML = 'Naiym\'vael';
	opis.innerHTML = 'Elfy jedzą szyszki i lubią chłopców.';
}

p1.onmouseout = function() {
	nazwa.innerHTML = '';
	opis.innerHTML = '';
}

p2.onmouseover = function() {
	nazwa.innerHTML = 'Ludzie Pustkowi';
	opis.innerHTML = 'Ludzie Pustkowi jedzą piasek i noszą gazety jako zbroję.';
}

p2.onmouseout = function() {
	nazwa.innerHTML = '';
	opis.innerHTML = '';
}

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
