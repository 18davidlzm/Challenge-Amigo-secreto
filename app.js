// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigos = document.getElementById("amigo");
const listadoAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado  = document.getElementById("resultado");
//console.log("prueba ullistamigos");
function agregarAmigo() {    
   listadoAmigos.push(inputAmigos.value); 
   //console.log(listadoAmigos);
   ulListaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;
}
function sortearAmigo(){
  // console.log("prueba de funcion soretear amigo")
   const random = Math.floor((Math.random()*listadoAmigos.length ));
   //console.log(random)
   const amigoSecreto =listadoAmigos [random];
   ulResultado.innerHTML = `<li>${amigoSecreto}</li>`;
}
