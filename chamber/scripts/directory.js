const url = "scripts/members.json";
const container = document.getElementById("business-list");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = "";
  members.forEach(member => {
    let card = document.createElement("section");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo" loading="lazy">
     <div class="member-info">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership">${getMembershipLabel(member.membership)}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function getMembershipLabel(level) {
  switch(level) {
    case 1: return "Bronze";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Member";
  }
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


