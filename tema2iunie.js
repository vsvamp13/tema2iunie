//BOM - Browser Object Model obiecte suplimentare care permit javaScript sa comunice cu browserul
console.log(window.navigator.userAgent); //ne afiseaza informatii despre browser
console.log(navigator.platform); //denumirea Sistemului de operare

//Window - este obiectul care insasi reprezinta fereastra browserului care se afiseaza, toate componentele js devin parti ale window
//window size - reprezenta marimea ferestrei browserului deschis si poate fi aflata prin metoda data
let w = window.innerWidth //pentru aflarea lungimii
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let h = window.innerHeight //pentru aflarea inaltimii
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log("Browser inner window width: " + w + ", height: " + h + ".");
/*alte proprietati 
window.screen, se scrie fara window 
screen.width            se poate afla informatii despre ecranul userului latime
screen.height           inaltime            
screen.availWidth       
screen.availHeight
screen.colorDepth
screen.pixelDepth*/

//Window Location - afla locatia curenta a paginii (URL) deschise si poate directiona care alta pagina
console.log("Te afli pe adresa url " + window.location.href);
console.log("Host name-ul: " + window.location.hostname); //sunt o multime care nu vad rostul pina ce ))

function myNewPage() {
	window.location.assign("http://www.google.md");
}

//BOM History - incarca ultima pagina vizitata salvata in storicul browserului, functia sagetii back de la browser
function goBack() {
  window.history.back();
} // nu merge, mai este si forward, merge inainte spre urmatorul url din history

//window navigator - afla detalii despre aplicatia cu care utilizatorul navigheaza
//navigator.appName, navigator.appCodeName, navigator.platform, navigator.cookieEnabled

//cookie, timing si popup alert sunt de asemenea functionalitati ale BOM


//DOM 
//cum selectam un obiect HTML din js?
let element = document.body; //dupa body putem indica orice din html pentru a fi afisat in consola
console.log(element); //codul dat ne afiseaza toate elementele ale parintelui body
console.log(element.firstElementChild); //afiseaza primul element copil al lui body

let parentEl = element.parentElement;  //afiseaza elementul parinte al documentului html-ul
console.log(parentEl);
let unordered = document.body.children;
console.log(unordered);

//gasirea unui element dupa ID
let myElement = document.getElementById("color"); //gaseste elementul ce contine id-ul color
myElement.style.color = "red"; //schimba culoarea textului
console.log(myElement);

//gasirea unui element dupa tag
let a = document.getElementsByTagName("h4"); //afiseaza toate elementele h4
console.log(a);

//gasirea unui element dupa className
let a2 = document.getElementsByClassName("tehnologie");
console.log(a2);

//querySelectorAll - gaseste toate elementele care intrunesc solicitarea noastra
let a3 = document.querySelectorAll('.tehnologie');
console.log(a3);

//querySelector - gaseste doar primul element din document care intruneste solicitarea noastra
let a4 = document.querySelector("li");
console.log(a4);

//matches - afiseaza rezultat boolean daca a fost gasit asa element
let a5 = document.getElementById("demo");
console.log(element.matches(`zaz`));


//getComputedStyle - este o metoda de a selecta anumite stiluri deja aplicate prin css sau html, dar si alte frames
const box = document.getElementById("computed");
const boxComputed = window.getComputedStyle(box);
console.log(boxComputed.backgroundColor);


let a6 = document.getElementById("styling");
a6.innerHTML = '<p>Am fost modificat cu inner</p>';
a6.style.color = "violet";
a6.style.fontSize = "20px"; //se utilizeaza camelCase in cazul cand in CSS era font-size
console.log(a6);
//Metode

//Practica
//gasiti un element cu clasa list
let clasList = document.getElementsByClassName("list");
console.log(clasList);

//gasiti un alt li si schimbati textul din el
let ellist = document.getElementsByClassName("list");
let li = document.getElementsByTagName("li");
console.log(li[0].innerHTML = "JavaScript");

//faceti textul in div cu rosu
let changeColor = document.getElementById("tehno");
changeColor.style.color = "red";


//Events - schimbarea stilului unui element atunci cand se apasa click pe el
function myFunction() {
document.getElementById("click").style.background = "green";
};

//Atribute - metoda de a efectua diferite actiuni cu orice atribut
let atb1 = document.getElementById("atrb").hasAttribute("id"); //afiseaza boolean
let atb2 = document.getElementById("atrb").getAttribute("class"); //afiseaza numele atributului
let atb3 = document.getElementById("atrb").setAttribute("style", "color: blue"); //setam atribut style
let atb4 = document.getElementById("atrb").removeAttribute("style"); //eliminam atributul style
console.log(atb1);
console.log(atb2);

//ClassName - o metoda de a efectua diferite actiuni cu clasele
let newClass = document.getElementById("atrb").classList.contains("getatribcl"); //boolean se afiseaza
let newClass1 = document.getElementById("atrb").classList.add("cheked"); //setam o clasa noua
let newClass2 = document.getElementById("atrb").getAttribute("class"); //afisam toate clasele
let newClass3 = document.getElementById("atrb").classList.remove("getatribcl"); //eliminam clasa care ne adauga un font-family
//pentru a alterna intre 2 clase atunci cand este un event se foloseste .classList.toogle(numeclasa)
console.log(newClass);
console.log(newClass2);

//practica, daca elementul are o clasa text, o stergem, daca nu adaugam
function myAnim() {
  document.getElementById("myImg").classList.toggle("text");
}

//adaugarea si eliminarea elementelor
let addNewEl = document.createElement(`h1`);
addNewEl.innerText = "Creat cu createElement";
document.body.appendChild(addNewEl);
console.log(addNewEl);

let insBefore = document.createElement("UL");
let insBeforeNode = document.createTextNode("Lista Before"); // s-a adaugat inainte de ementul creat mai sus h1
insBefore.appendChild(insBeforeNode);
document.body.insertBefore(insBefore, addNewEl);

//adaugarea unui li la un ul deja creat
let newLi = document.createElement("LI");
    newLi.innerHTML = "3";
    lists.appendChild(newLi);

let newLi2 = document.createElement("li");
    newLi2.innerHTML = "4";
    lists.insertBefore(newLi2, lists.children[4]);

//Practica Adaugati 5 elemente li cu text de la 1-5 la lista
function getListContent() {
  let fragment = new DocumentFragment();

    for (let i=1; i<=5; i++) {
 let lis = document.createElement("li");
 lis.append(i);
 fragment.append(lis);
}
return fragment;
}
lista.append(getListContent());