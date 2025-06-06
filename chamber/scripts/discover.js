// Mostrar mensaje de última visita
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  visitMessage.innerHTML = "<p>¡Bienvenido! Esta es tu primera visita.</p>";
} else {
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const daysSince = Math.floor((now - lastVisit) / millisecondsInDay);

  if (daysSince === 0) {
    visitMessage.innerHTML = "<p>Bienvenido de nuevo. ¡Nos alegra verte otra vez hoy!</p>";
  } else if (daysSince === 1) {
    visitMessage.innerHTML = "<p>Pasó 1 día desde tu última visita.</p>";
  } else {
    visitMessage.innerHTML = `<p>Pasaron ${daysSince} días desde tu última visita.</p>`;
  }
}

localStorage.setItem('lastVisit', now);

// Cargar tarjetas de lugares
const cardsContainer = document.querySelector('.cards-container');

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(lugar => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${lugar.imagen}" alt="${lugar.nombre}">
        <h3>${lugar.nombre}</h3>
        <p>${lugar.descripcion}</p>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al cargar las tarjetas:', error);
    cardsContainer.innerHTML = '<p>Error al cargar los lugares de interés.</p>';
  });

// Footer dinámico
document.getElementById('last-modified').textContent =
  "Última modificación: " + document.lastModified;

document.getElementById('copyright-year').textContent =
  new Date().getFullYear();
