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


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joinForm');
  const modal = document.getElementById('errorModal');
  const closeBtn = document.querySelector('.close-button');

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });

  form.addEventListener('submit', (event) => {
    const requiredFields = ['firstName', 'lastName', 'email'];
    let valid = true;

    requiredFields.forEach(id => {
      const input = document.getElementById(id);
      if (!input.value.trim()) {
        valid = false;
      }
    });

    if (!valid) {
      event.preventDefault();
      modal.classList.remove('hidden');
      return;
    }

    // ✅ Guardar datos en localStorage
    const formData = new FormData(form);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });
    localStorage.setItem('lastJoinData', JSON.stringify(userData));
  });
});

