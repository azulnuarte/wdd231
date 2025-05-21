const memberContainer = document.getElementById("members");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  memberContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p><strong>${member.description}</strong></p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p class="membership level-${member.membership}">Membership: ${getLevel(member.membership)}</p>
    `;
    memberContainer.appendChild(card);
  });
}

function getLevel(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Unknown";
  }
}

gridBtn.addEventListener("click", () => {
  memberContainer.classList.add("grid-view");
  memberContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  memberContainer.classList.add("list-view");
  memberContainer.classList.remove("grid-view");
});

getMembers();
