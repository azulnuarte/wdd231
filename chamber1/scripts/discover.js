// scripts/discover.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("discover.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo JSON.");
      }
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector(".cards-container");
      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error al cargar las tarjetas:", error);
    });
});




const yearSpan = document.getElementById("copyright-year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

const lastModifiedParagraph = document.getElementById("last-modified");
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');
if (hamburgerElement && navElement) {
  hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
  });
}
