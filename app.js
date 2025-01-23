// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// // Aquí deberás desarrollar la lógica para resolver el problema.

/*En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar 
un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista 
visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el 
resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer 
clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará 
en la página.*/

let amigos = [];
let lista = '';

function agregarAmigo(){ 
    
    let valorCampo = document.getElementById('amigo').value

    if(valorCampo === ''){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = '';
        recorreAmigos(amigos);
    }

}

function recorreAmigos(amigos){
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
   

    for (let index = 0; index < amigos.length; index++) {
        let amigo = amigos[index];
        //console.log(amigo);
        lista.innerHTML += '<li>'+amigo+'</li>';         
    }

    

}

function sortearAmigo(){

    if(amigos.length >0){
        maximoNumeroAmigos = amigos.length - 1;
        console.log(maximoNumeroAmigos);
        let numeroRandom = Math.floor(Math.random()*maximoNumeroAmigos);
        resultado.innerHTML = amigos[numeroRandom];
    }else{
        alert('La lista de amigos está vacía. Ingrese amigos por favor.')
    }

    
}