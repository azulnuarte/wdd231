async function loadSpotlights() {
  const response = await fetch('scripts/members.json');
  const members = await response.json();

  const goldSilver = members.filter(m => m.membership === 2 || m.membership === 3);
  const selected = [];

  while (selected.length < 3 && goldSilver.length > 0) {
    const randIndex = Math.floor(Math.random() * goldSilver.length);
    selected.push(goldSilver.splice(randIndex, 1)[0]);
  }

  const container = document.querySelector('.spotlight-container');
  container.innerHTML = "";

  selected.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <div class="member-info">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Website</a>
        <p class="membership">${member.membership === 3 ? 'Gold' : 'Silver'} Member</p>
      </div>
    `;
    container.appendChild(card);
  });
}
loadSpotlights();