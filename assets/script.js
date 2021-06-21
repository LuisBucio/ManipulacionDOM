
let subtitle = document.querySelector('#subtitle');

console.log(subtitle);

//Con textContent podemos acceder al valor del elemento HTML
//Tambien podemos cambiar el calor asignado a un nuevo valor
subtitle.textContent = 'Subtitulo';

//classList.add('Mi clase ') lo utilizamos para agregar clase al elemento
subtitle.classList.add('red');

//Para remover las clases
subtitle.classList.remove('red');

const animales = ['Perro','Gato','Mapache','Pez','Leopardo','Ratón','Zorro'];

//Agrega un elemento al final del arreglo
animales.push('Elefante');

const list = document.querySelector('#list');

//El forEach recorre toda la lista
animales.forEach( function (animal) {
    let item = document.createElement('li');
    item.textContent = animal;
    //<li>El appendChild  hace esto, agregar a la lista</li>
    list.appendChild(item);
});