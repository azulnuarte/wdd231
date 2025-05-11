// Matriz de cursos
const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to programming fundamentals like variables, decisions, loops, arrays, and input/output.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students explore web design/development careers and build basic websites using HTML and CSS.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students write, call, test, and debug functions in Python to become more effective programmers.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Covers object-oriented programming concepts including encapsulation, inheritance, and polymorphism.',
    technology: ['C#'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Create dynamic websites using JavaScript that respond to events and improve user experience.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focuses on user experience, accessibility, performance optimization, and APIs in web development.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

// Mostrar cursos en pantalla
function displayCourses(filteredCourses) {
  const container = document.querySelector('.courses');
  container.innerHTML = ''; // Limpiar

  filteredCourses.forEach(course => {
    const div = document.createElement('div');
    div.classList.add('course');
    if (course.completed) {
      div.classList.add('completed');
    }

    div.innerHTML = `
      <h3>${course.title} (${course.subject} ${course.number})</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p>${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;
    container.appendChild(div);
  });
}

// Filtro
function filterCourses(type) {
  if (type === 'all') {
    displayCourses(courses);
  } else {
    const filtered = courses.filter(course => course.subject === type);
    displayCourses(filtered);
  }
}

// Agregar eventos a botones
document.addEventListener('DOMContentLoaded', () => {
  displayCourses(courses); // Mostrar todos al cargar

  const buttons = document.querySelectorAll('.filters button');
  buttons[0].addEventListener('click', () => filterCourses('all'));
  buttons[1].addEventListener('click', () => filterCourses('CSE'));
  buttons[2].addEventListener('click', () => filterCourses('WDD'));

  // Mostrar fecha de última modificación
  const footer = document.createElement('footer');
  footer.innerHTML = `Last Modified: ${document.lastModified}`;
  document.body.appendChild(footer);
});




