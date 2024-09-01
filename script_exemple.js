/*----------------Exemple for me-------------------*/
window.onload = function () {

    //const nav = document.getElementsByTagName('nav')[0].style.backgroundColor = "red";
    const nav = document.getElementsByTagName('nav')[0].children[0].children[1].style.backgroundColor = "red";
    console.log([nav]);

    // Modif of class
    // .classList.add     .classList.remove      .classList.toggle
    const accueilText = document.getElementsByClassName('accueil-text')[0];
    accueilText.classList.add("test-color");
    console.log(accueilText);


    // Get of attribut href src etc...
    const src = document.getElementsByTagName("img")[0]; // Select first element <img>
    src.getAttribute("src");
    console.log(src);

    // Modif of attribut
    // const src = document.getElementsByTagName("img")[0];
    // src.setAttribute("src", "path of another image");

    console.log(document.getElementById('accueil').parentElement.children);

    // on-event-handler
    /*const buttonSubmit = document.querySelector('button');
    buttonSubmit.onclick = function (event) {
        console.log(event);
        buttonSubmit.textContent = 'Message envoyé';
        console.log(buttonSubmit);
    };*/

    // event-listener
    const h1 = document.querySelector('h1');
    console.log(h1);
    /*clickH1.addEventListener('click', function (event) {
        clickH1.textContent = 'Portfolio de Magaly Nouguerède';
    });*/

    // ou
    function clickH1() {
        h1.textContent = 'Portfolio de Magaly Nouguerède';
    };
    h1.addEventListener('click', clickH1);

    // Method of event
    const form = document.querySelector('form');
    form.addEventListener('submit', envoyerForm);
    function envoyerForm(event) {
        event.preventDefault();
        console.log('Formulaire envoyé!');
    }
};

// Objet Date
/*const aujourdHui = new Date();
let dateFrench = aujourdHui.toLocaleDateString();
console.log(dateFrench);*/

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const aujourdHui = new Date();
console.log(aujourdHui.toLocaleDateString('fr-FR', options));

// setTimeOut and setInterval
function hello() {
    console.log('Hello');
};

const interval = setInterval(hello, 5000);

setTimeout(function () {
    clearInterval(interval);
    console.log('On fait clearInterval')
}, 12000);

// Array
const monArray = [1, 2, 3, 4, 5];

monArray.forEach(function (element) {
    console.log(element); // display 1 2 3 4 5
}) // we can use arrows functions :        monArray.forEach(element => console.log(element));

const monArrayTwo = [1, 2, 3, 4, 5];
monArrayTwo.forEach(function (element) {
    element = element * 2;
    console.log(element); // display 2 4 6 8 10
})

const array = [2, 4, 6];
const monArrayThree = array.map(function (element) {
    return element * 3;
});
console.log(monArrayThree);
const monArrayFour = array.filter(function (element) {
    return element >= 3;
});
console.log(monArrayFour);