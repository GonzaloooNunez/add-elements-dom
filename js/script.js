 // Aquí tu código
 const lista = document.getElementById('lista');
 const agregar = document.getElementById('agregar');
 
 agregar.addEventListener('click', function() {
     let nombre = prompt('Nombre');
     let apellidos = prompt('Apellidos');
     let domicilio = prompt('Domicilio');
     let estadoCivil = prompt('Estado Civil');
 
     let nuevoElemento = document.createElement('li');
     
     let nombreTexto = document.createTextNode(`Nombre: ${nombre}`);
     let apellidosTexto = document.createTextNode(`Apellidos: ${apellidos}`);
     let domicilioTexto = document.createTextNode(`Domicilio: ${domicilio}`);
     let estadoCivilTexto = document.createTextNode(`Estado Civil: ${estadoCivil}`);
 
     nuevoElemento.appendChild(nombreTexto);
     nuevoElemento.appendChild(document.createElement('br'));
     nuevoElemento.appendChild(apellidosTexto);
     nuevoElemento.appendChild(document.createElement('br'));
     nuevoElemento.appendChild(domicilioTexto);
     nuevoElemento.appendChild(document.createElement('br'));
     nuevoElemento.appendChild(estadoCivilTexto);
     
     lista.appendChild(nuevoElemento);
 });