async function loadPlaces() {
  const response = await fetch('datap.json');
  const places = await response.json();

  const container = document.querySelector('#places-container');

  places.forEach(place => {
    const card = document.createElement('article');
    card.classList.add('place-card');

    const img = document.createElement('img');
    img.src = `images/${place.image}`;
    img.alt = place.name;
    img.loading = "lazy";

    const title = document.createElement('h2');
    title.textContent = place.name;

    const location = document.createElement('p');
    location.textContent = `Location: ${place.location}`;
    location.classList.add('location');

    const desc = document.createElement('p');
    desc.textContent = place.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(location); 
    card.appendChild(desc);

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadPlaces);
