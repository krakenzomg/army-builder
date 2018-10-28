// INFO:
// Arraye w słuza do przechowywania prymitywów [1,2,3,'test', null], albo obiektów [{name: 'Kovalsky', age: 55}, {name: 'John', age: 25}]. Arraye przechowujące obiekty nazywamy kolekcją - collection.
// Arraye w arrayach są praktycznie nieuzywane, do poki nie parsujesz jakiegos pliku mozesz zapomniec o istnieniu zagnieżdzonych arrayow

// Moja wersja taktykaTab
var taktykaTab = [
  {name: 'Charyzma', value: 6},
  {name: 'Geniusz taktyczny', value: 8},
  {name: 'Handel', value: 10},
  {name: 'Informator', value: 5},
  {name: 'Inspirująca obecność', value: 12},
  {name: 'Mistrz pułapek', value: 15},
  {name: 'Taktyka', value: 10},
  {name: 'To ja decyduję co robimy!', value: 10}
];

// taktykaTab[0] = ['Charyzma', '6'];
// taktykaTab[1] = ['Geniusz taktyczny', '8'];
// taktykaTab[2] = ['Handel', '10'];
// taktykaTab[3] = ['Informator', '5'];
// taktykaTab[4] = ['Inspirująca obecność', '12'];
// taktykaTab[5] = ['Mistrz pułapek', '15'];
// taktykaTab[6] = ['Taktyka', '10'];
// taktykaTab[7] = ['To ja decyduję co robimy!', '10'];

var umyslTab = [
	{name: 'Farciarz', value: 7},
	{name: 'Leczenie', value: 7},
	{name: 'Mechanik', value: 6},
	{name: 'Nerwy ze stali', value: 5},
	{name: 'Nienawiść', value: 7},
	{name: 'Opanowanie', value: 5},
	{name: 'Straszliwa reputacja', value: 5},
	{name: 'Zastraszanie', value: 5}
];

// var umyslTab = [];
// umyslTab[0] = ['Farciarz', '7'];
// umyslTab[1] = ['Leczenie', '7'];
// umyslTab[2] = ['Mechanik', '6'];
// umyslTab[3] = ['Nerwy ze stali', '5'];
// umyslTab[4] = ['Nienawiść', '7'];
// umyslTab[5] = ['Opanowanie', '5'];
// umyslTab[6] = ['Straszliwa reputacja', '5'];
// umyslTab[7] = ['Zastraszenie', '5'];

var szabrowanieTab = [
	{name: 'Błyskawiczny refleks', value: 12},
	{name: 'Czujność', value: 5},
	{name: 'Harcownik', value: 8},
	{name: 'Odskoczenie', value: 5},
	{name: 'Padnij!', value: 10},
	{name: 'Skradanie się', value: 5},
	{name: 'Sprawność', value: 5},
	{name: 'Szabrowanie', value: 5},
	{name: 'Szybkość', value: 10},
	{name: 'Ucieczka', value: 6},
	{name: 'Zwiadowca', value: 10}
];

// var szabrowanieTab = [];
// szabrowanieTab[0] = ['Błyskawiczny refleks', '12'];
// szabrowanieTab[1] = ['Czujność', '5'];
// szabrowanieTab[2] = ['Harcownik', '8'];
// szabrowanieTab[3] = ['Odskoczenie', '5'];
// szabrowanieTab[4] = ['Padnij!', '10'];
// szabrowanieTab[5] = ['Skaradanie się', '5'];
// szabrowanieTab[6] = ['Sprawność', '5'];
// szabrowanieTab[7] = ['Szabrowanie', '5'];
// szabrowanieTab[8] = ['Szybkość', '10'];
// szabrowanieTab[9] = ['Ucieczka', '6'];
// szabrowanieTab[10] = ['Zwiadowca', '10'];

var walkaTab = [
	{name: 'Atak wielokrotny 1', value: 7},
	{name: 'Atak wielokrotny 2', value: 15},
	{name: 'Atak wielokrotny 3', value: 25},
	{name: 'Bijatyka', value: 5},
	{name: 'Brudne zagrania', value: 10},
	{name: 'Druzgocząca szarża', value: 5},
	{name: 'Kontratak', value: 5},
	{name: 'Miażdzący atak', value: 10},
	{name: 'Odporność', value: 5},
	{name: 'Rewolwerowiec', value: 9},
	{name: 'Rozbrojenie', value: 5},
	{name: 'Specjalista', value: 10},
	{name: 'Strzelec wyborowy', value: 5},
	{name: 'Szybki cyngiel', value: 10},
	{name: 'Twardziel', value: 10},
	{name: 'Unik', value: 10},
	{name: 'Walka', value: 5}
];

// var walkaTab = [];
// walkaTab[0] = ['Atak wielokrotny 1', '7'];
// walkaTab[1] = ['Atak wielokrotny 2', '15'];
// walkaTab[2] = ['Atak wielokrotny 3', '25'];
// walkaTab[3] = ['Bijatyka', '5'];
// walkaTab[4] = ['Brudne zagrania', '10'];
// walkaTab[5] = ['Druzgocząca szarża', '5'];
// walkaTab[6] = ['Kontratak', '5'];
// walkaTab[7] = ['Miażdzący atak', '10'];
// walkaTab[8] = ['Odporność', '5'];
// walkaTab[9] = ['Rewolwerowiec', '9'];
// walkaTab[10] = ['Rozbrojenie', '5'];
// walkaTab[11] = ['Specjalista', '10'];
// walkaTab[12] = ['Strzelec wyborowy', '5'];
// walkaTab[13] = ['Szybki cyngiel', '10'];
// walkaTab[14] = ['Twardziel', '10'];
// walkaTab[15] = ['Unik', '10'];
// walkaTab[16] = ['Walka', '5'];

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