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

    // ✅ Si todo es válido, guardar en localStorage
    const formData = new FormData(form);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    localStorage.setItem('lastJoinData', JSON.stringify(userData));
    // No hace falta event.preventDefault() aquí porque queremos que se redirija a thanks.html
  });
});


