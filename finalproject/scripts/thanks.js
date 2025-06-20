document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const fields = ["firstName", "lastName", "email"];

  let hasData = false;

  fields.forEach(field => {
    const value = params.get(field);
    if (value) hasData = true;
    document.getElementById(`${field}Span`).textContent = value || "—";
    if (value) localStorage.setItem(field, value);
  });

  const optionalFields = ["country", "favorite", "comments"];
  optionalFields.forEach(field => {
    const value = params.get(field);
    document.getElementById(`${field}Span`).textContent = value || "—";
    if (value) localStorage.setItem(field, value);
  });

  // Modal si no hay datos
  if (!hasData) {
    const modal = document.getElementById("missingModal");
    modal.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
      modal.close();
    });
  }
});
