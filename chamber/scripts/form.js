document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const nombre = params.get("nombre") || "(No proporcionado)";
  const apellido = params.get("apellido") || "(No proporcionado)";
  const email = params.get("email") || "(No proporcionado)";
  const telefono = params.get("telefono") || "(No proporcionado)";
  const empresa = params.get("empresa") || "(No proporcionado)";
  const timestamp = params.get("timestamp") || new Date().toLocaleString();

  const listItems = document.querySelectorAll("main ul li");

  if(listItems.length >= 6){
    listItems[0].innerHTML += ` ${nombre}`;
    listItems[1].innerHTML += ` ${apellido}`;
    listItems[2].innerHTML += ` ${email}`;
    listItems[3].innerHTML += ` ${telefono}`;
    listItems[4].innerHTML += ` ${empresa}`;
    listItems[5].innerHTML += ` ${timestamp}`;
  }
});
