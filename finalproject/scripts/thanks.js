document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem('formData'));
  if (!savedData) return; // Si no hay datos guardados, no hacemos nada

  document.getElementById('firstNameSpan').textContent = savedData.firstName || '—';
  document.getElementById('lastNameSpan').textContent = savedData.lastName || '—';
  document.getElementById('emailSpan').textContent = savedData.email || '—';
  document.getElementById('countrySpan').textContent = savedData.country || '—';
  document.getElementById('favoriteSpan').textContent = savedData.favorite || '—';
  document.getElementById('commentsSpan').textContent = savedData.comments || '—';
  document.getElementById('newsletterSpan').textContent = savedData.newsletter || 'No';
  document.getElementById('eventsSpan').textContent = savedData.events || 'No';

  // Opcional: limpiar localStorage si quieres que no quede guardado
  // localStorage.removeItem('formData');
});
