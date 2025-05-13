// prophets.js

// URL del archivo JSON que contiene los datos de los profetas
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Selecciona el contenedor en el HTML donde se van a agregar las tarjetas de los profetas
const cards = document.querySelector('#cards');

// Función asincrónica que obtiene los datos de los profetas desde la URL
const getProphetData = async () => {
  // Realiza una solicitud HTTP para obtener los datos
  const response = await fetch(url);
  
  // Convierte la respuesta en un objeto JavaScript (JSON)
  const data = await response.json();

  // Llama a la función que mostrará a los profetas en pantalla
  displayProphets(data.prophets);
};

// Función que recibe un arreglo de profetas y los muestra en tarjetas en la página
const displayProphets = (prophets) => {
  // Itera sobre cada profeta del arreglo
  prophets.forEach((prophet) => {
    // Crea elementos HTML para la tarjeta
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');

    // Asigna el nombre completo del profeta al encabezado
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Asigna la fecha y lugar de nacimiento a párrafos
    birthdate.textContent = `Date Of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place Of Birth: ${prophet.birthplace}`;

    // Configura los atributos de la imagen del profeta
    portrait.setAttribute('src', prophet.imageurl); // URL de la imagen
    portrait.setAttribute('alt', `Retrato de ${prophet.name} ${prophet.lastname}`); // Texto alternativo
    portrait.setAttribute('loading', 'lazy'); // Carga diferida para optimizar rendimiento
    portrait.setAttribute('width', '340'); // Ancho de la imagen
    portrait.setAttribute('height', '440'); // Alto de la imagen

    // Añade los elementos creados a la tarjeta (section)
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // Añade la tarjeta completa al contenedor principal en el HTML
    cards.appendChild(card);
  });
};

// Llama a la función principal para iniciar el proceso al cargar el script
getProphetData();


