// sezione nome
let nome;
nome = prompt("Qual è il tuo nome?")

document.getElementById("first-name").innerHTML = nome ;

// sezione cognome
let cognome;
cognome = prompt("Qual è il tuo cognome?")

document.getElementById("surname").innerHTML = cognome ;

// sezione colore preferito
let colore;
colore = prompt("Qual è il tuo colore preferito?")

document.getElementById("fav-colour").innerHTML = colore ;

// sezione password

document.getElementById("password").innerHTML = 'La tua password generata è: ' + nome + cognome + colore + '23' ;