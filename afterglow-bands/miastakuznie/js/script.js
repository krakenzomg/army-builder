var inzynier = {
	nazwa: "Inżynier",
	skill1: "Krasnoludzka inżynieria",
	skill2: "Wynalazki",
	skill3: "",
	koszt: "117",
	limiteq: "45"
};

var mistrzgildii = {
	nazwa: "Mistrz Gildii",
	skill1: "Handel",
	skill2: "Eksluzywny towar",
	skill3: "Ochrona",
	koszt: "115",
	limiteq: "45"
};

var zarzadcakuzni = {
	nazwa: "Zarządca Kuźni",
	skill1: "Charyzma",
	skill2: "Twardziel",
	skill3: "Kupię twoje życie",
	koszt: "115",
	limiteq: "45"
};

var dodajbohatera = document.getElementById('dodajbohatera'),
	bohaterwybor = document.getElementById('bohater'),
	dodajspecjalna = document.getElementById('dodajspecjalna'),
	specjalnawybor = document.getElementById('specjalna'),
	dodajpodstawowa = document.getElementById('dodajpodstawowa'),
	podstawowawybor = document.getElementById('podstawowa');

dodajbohatera.onclick = function() {
	specjalnawybor.style.display = 'none';
	podstawowawybor.style.display = 'none';
	bohaterwybor.style.display = 'inline-block';
}

dodajspecjalna.onclick = function() {
	bohaterwybor.style.display = 'none';
	podstawowawybor.style.display = 'none';
	specjalnawybor.style.display = 'inline-block';
}

dodajpodstawowa.onclick = function() {
	specjalnawybor.style.display = 'none';
	bohaterwybor.style.display = 'none';
	podstawowawybor.style.display = 'inline-block';
}
