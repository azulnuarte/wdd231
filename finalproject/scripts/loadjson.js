document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  fetch("data.json")
    .then(response => {
      if (!response.ok) throw new Error("Could not load data.json");
      return response.json();
    })
    .then(data => {
      // Creamos un contenedor especial para himno, bandera y diámetro
      const topSection = document.createElement("div");
      topSection.classList.add("top-section");
      main.appendChild(topSection);

      // Insertamos himno, bandera y diámetro DENTRO de topSection
      displayAnthem(data.culture.anthem, topSection);
      displayFlag(data.flag, topSection);
      displayDiameter(data.diameter, topSection);

      // Las otras secciones van directamente debajo de topSection
      displaySection("Typical Drinks", data.typicalDrinks);
      displaySection("Typical Dances", data.typicalDances);
      displaySection("Typical Foods", data.typicalFood);
    })
    .catch(error => {
      console.error("Error loading data:", error);
      main.innerHTML = "<p>Content could not be loaded.</p>";
    });

  // ✅ Bandera
  function displayFlag(flagData, container) {
    const section = document.createElement("section");
    section.classList.add("flag");

    const title = document.createElement("h2");
    title.textContent = flagData.title;

    const img = document.createElement("img");
    img.src = flagData.image;
    img.alt = flagData.alt;
    img.loading = "lazy";

    const desc = document.createElement("p");
    desc.textContent = flagData.description;

    section.appendChild(title);
    section.appendChild(img);
    section.appendChild(desc);
    container.appendChild(section);
  }

  // ✅ Diámetro
  function displayDiameter(diameterData, container) {
  const section = document.createElement("section");
  section.classList.add("diameter");

  const title = document.createElement("h2");
  title.textContent = diameterData.title;

  const img = document.createElement("img");
  img.src = diameterData.image;
  img.alt = diameterData.alt;
  img.loading = "lazy";

  const desc = document.createElement("p");
  desc.textContent = diameterData.description;

  section.appendChild(title);
  section.appendChild(img);   // <- imagen justo después del título
  section.appendChild(desc);
  container.appendChild(section);
}


  // ✅ Himno
  function displayAnthem(anthemData, container) {
    const section = document.createElement("section");
    section.classList.add("anthem");

    const title = document.createElement("h2");
    title.textContent = anthemData.title;

    const iframe = document.createElement("iframe");
    iframe.src = anthemData.video.url;
    iframe.width = anthemData.video.width;
    iframe.height = anthemData.video.height;
    iframe.allow = anthemData.video.allow;
    iframe.allowFullscreen = anthemData.video.allowfullscreen;

    section.appendChild(title);
    section.appendChild(iframe);
    container.appendChild(section);
  }

  // ✅ Otras secciones (bebidas, comidas, bailes)
  function displaySection(titleText, items) {
  const section = document.createElement("section");
  section.classList.add("info-section");

  const title = document.createElement("h2");
  title.textContent = titleText;
  section.appendChild(title);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.alt;
    img.loading = "lazy";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);
    cardsContainer.appendChild(card);
  });

  section.appendChild(cardsContainer);
  main.appendChild(section);
}


  // ✅ Footer automático
  document.getElementById("copyright-year").textContent =
    new Date().getFullYear();

  document.getElementById("last-modified").textContent =
    `Last modified: ${document.lastModified}`;
});
