document.getElementById('joinForm').addEventListener('submit', function(e) {
  // Obtener valores
  const formData = {
    firstName: this.firstName.value.trim(),
    lastName: this.lastName.value.trim(),
    email: this.email.value.trim(),
    country: this.country.value.trim(),
    favorite: this.favorite.value,
    comments: this.comments.value.trim(),
    newsletter: this.newsletter.checked ? "Yes" : "No",
    events: this.events.checked ? "Yes" : "No"
  };

  // Guardar en localStorage
  localStorage.setItem('formData', JSON.stringify(formData));
});
