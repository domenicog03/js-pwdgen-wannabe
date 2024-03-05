
const nome=prompt('Digita il tuo nome');
const cognome=prompt('Digita il tuo cognome');
const colore= prompt('Digita il tuo colore preferito');

const pass=nome+cognome+colore+'23';

document.getElementById('pass').innerHTML = pass;


const num=parseInt(prompt('Digita un numero'));

const pass2=nome+cognome+colore+(23+num);
//console.log(pass2);

document.getElementById('pass2').innerHTML = pass2;