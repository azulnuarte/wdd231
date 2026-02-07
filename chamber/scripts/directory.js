const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const menuButton = document.querySelector("#myButton");
const navigation = document.querySelector("#navigation");

/* MENU */
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

/* LAST MODIFIED */
document.querySelector("#last-modified").textContent =
  `Last Modified: ${document.lastModified}`;

document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

/* MEMBERS */
async function getMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership">${member.membership} Member</p>
    `;

    membersContainer.appendChild(card);
  });
}

gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

getMembers();

