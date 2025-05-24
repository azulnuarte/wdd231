const url = "scripts/members.json";
const container = document.getElementById("business-list");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = ""; // limpiar antes de agregar
  members.forEach(member => {
    let card = document.createElement("section");
    card.classList.add("member-card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name} Logo" loading="lazy">
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership">${member.membershipLevel} Member</p>
    `;

    container.appendChild(card);
  });
}

document.getElementById("grid-view").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

document.getElementById("list-view").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

getMembers();


// Mostrar el año actual
  const yearSpan = document.getElementById("copyright-year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

// Mostrar la última fecha de modificación del documento
  const lastModified = document.lastModified;
  const lastModifiedParagraph = document.getElementById("last-modified");
  lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;


const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});