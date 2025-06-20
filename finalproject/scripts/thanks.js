document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);

  const fields = ["firstName", "lastName", "email", "country", "favorite", "comments"];
  fields.forEach(field => {
    const value = params.get(field) || "—";
    document.getElementById(`${field}Span`).textContent = value;
    localStorage.setItem(field, value); // Guarda en localStorage
  });

  // Podés revisar localStorage después si necesitás hacer algo con los datos
});
