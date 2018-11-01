var generateTable = function(id, object) {
    var el = document.getElementById(id);
    // var object = window.dwarfEngTable;

    // for (var key in object) {
    //     console.log('nazwa klucza', key);
    //     console.log('wartosc klucza', object[key]);

    //     object[key].forEach(element => {
    //         console.log('wartosc kazdego elementu:', element);
    //     });
    // }

    for (var key in object) {
        var tr = document.createElement("tr");
        el.appendChild(tr);

        object[key].forEach(element => {
            var td = document.createElement("td");
            tr.appendChild(td);

            var text = document.createTextNode(element);
            td.appendChild(text);
        });
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    generateTable('heroDwarfEng', window.heroDwarfEngTable);
    generateTable('heroDwarfGuildMaster', window.heroDwarfGuildMasterTable);
    generateTable('heroDwarfZarzadca', window.heroDwarfZarzadcaTable);
    generateTable('specialDwarfDewastator', window.specialDwarfDewastatorTable);
    generateTable('specialDwarfStraznikKuzni', window.specialDwarfStraznikKuzniTable);
    generateTable('specialDwarfStraznikPrawa', window.specialDwarfStraznikPrawaTable);
    generateTable('coreDwarfKrasnolud', window.coreDwarfKrasnoludTable);
    generateTable('coreDwarfTarczownik', window.coreDwarfTarczownikTable);
    generateTable('coreDwarfZoldak', window.coreDwarfZoldakTable);

  });

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
