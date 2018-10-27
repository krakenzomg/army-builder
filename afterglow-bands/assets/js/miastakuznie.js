// INFO: class UX pattern
// Zamiast pracowac na low-level properties takich jak 'style.display' mozemy dac elementom klasy ktore decyduja o ich wygladzie.

// New - simple
var bohater = document.getElementById('bohater');
var specjalna = document.getElementById('specjalna');
var podstawowa = document.getElementById('podstawowa');

var addHero = function() {
	bohater.classList.add('is-visible');
	specjalna.classList.remove('is-visible');
	podstawowa.classList.remove('is-visible');
}

var addSpecial = function() {
	bohater.classList.remove('is-visible');
	specjalna.classList.add('is-visible');
	podstawowa.classList.remove('is-visible');
}

var addBasic = function() {
	bohater.classList.remove('is-visible');
	specjalna.classList.remove('is-visible');
	podstawowa.classList.add('is-visible');
}

// New - like a pro
// var toogleSection = function(section) {
// 	document.getElementById(section).classList.add('is-visible');
// 	var allSections = ['bohater', 'specjalna', 'podstawowa'];
// 	allSections.splice(allSections.indexOf(section),1);
// 	allSections.forEach(function(section) {
// 		document.getElementById(section).classList.remove('is-visible');
// 	})
// }

// Old
// var dodajbohatera = document.getElementById('dodajbohatera'),
// 	bohaterwybor = document.getElementById('bohater'),
// 	dodajspecjalna = document.getElementById('dodajspecjalna'),
// 	specjalnawybor = document.getElementById('specjalna'),
// 	dodajpodstawowa = document.getElementById('dodajpodstawowa'),
// 	podstawowawybor = document.getElementById('podstawowa');

// dodajbohatera.onclick = function() {
// 	specjalnawybor.style.display = 'none';
// 	podstawowawybor.style.display = 'none';
// 	bohaterwybor.style.display = 'inline-block';
// }

// dodajspecjalna.onclick = function() {
// 	bohaterwybor.style.display = 'none';
// 	podstawowawybor.style.display = 'none';
// 	specjalnawybor.style.display = 'inline-block';
// }

// dodajpodstawowa.onclick = function() {
// 	specjalnawybor.style.display = 'none';
// 	bohaterwybor.style.display = 'none';
// 	podstawowawybor.style.display = 'inline-block';
// }
