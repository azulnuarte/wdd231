document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  fetch("data.json")
    .then(response => {
      if (!response.ok) throw new Error("Could not load data.json");
      return response.json();
    })
    .then(data => {
      displayFlag(data.flag);
      displayDiameter(data.diameter);
      displaySection("Typical Drinks", data.typicalDrinks);
      displaySection("Typical Dances", data.typicalDances);
      displaySection("Typical Foods", data.typicalFood);
      displayAnthem(data.culture.anthem);
    })
    .catch(error => {
      console.error("Error loading data:", error);
      main.innerHTML = "<p>Content could not be loaded.</p>";
    });

  function displayFlag(flagData) {
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
    main.appendChild(section);
  }

  function displayDiameter(diameterData) {
    const section = document.createElement("section");
    section.classList.add("diameter");

    const title = document.createElement("h2");
    title.textContent = diameterData.title;

    const desc = document.createElement("p");
    desc.textContent = diameterData.description;

    section.appendChild(title);
    section.appendChild(desc);
    main.appendChild(section);
  }

  function displaySection(titleText, items) {
    const section = document.createElement("section");
    section.classList.add("info-section");

    const title = document.createElement("h2");
    title.textContent = titleText;
    section.appendChild(title);

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
      section.appendChild(card);
    });

    main.appendChild(section);
  }

  function displayAnthem(anthemData) {
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
    main.appendChild(section);
  }

  // Footer: current year and last modified
  document.getElementById("copyright-year").textContent =
    new Date().getFullYear();

  document.getElementById("last-modified").textContent =
    `Last modified: ${document.lastModified}`;
});
