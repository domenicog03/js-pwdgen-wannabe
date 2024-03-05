
const nome=prompt('Digita il tuo nome');
const cognome=prompt('Digita il tuo cognome');
const colore= prompt('Digita il tuo colore preferito');

const pass=nome+cognome+colore+'23';

document.getElementById('pass').innerHTML = pass;