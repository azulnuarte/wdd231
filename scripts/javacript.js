// Mostrar el año actual en el footer
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// Mostrar la última fecha de modificación del documento
document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`;

// Cursos
const courses = [
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: false },
  { code: "CSE 210", name: "Programming with Classes", credits: 2, completed: false },
  { code: "CSE 310", name: "Data Structures and Algorithms", credits: 2, completed: false },
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 230", name: "Web Frontend Development I", credits: 2, completed: false },
  { code: "WDD 330", name: "Web Frontend Development II", credits: 2, completed: false },
  { code: "WDD 331", name: "Web Fullstack Development", credits: 2, completed: false }
];

// Mostrar cursos según filtro
function displayCourses(filter) {
  const courseContainer = document.querySelector(".courses");
  courseContainer.innerHTML = ""; // Limpiar

  // Filtrado
  let filteredCourses = courses;
  if (filter === "CSE") {
    filteredCourses = courses.filter(course => course.code.startsWith("CSE"));
  } else if (filter === "WDD") {
    filteredCourses = courses.filter(course => course.code.startsWith("WDD"));
  }

  // Total de créditos
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

  // Mostrar cada curso
  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.classList.add(course.code.startsWith("CSE") ? "cse" : "wdd");
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;
    courseContainer.appendChild(card);
  });

  // Mostrar créditos totales
  const creditTotal = document.createElement("p");
  creditTotal.textContent = `Total Credits: ${totalCredits}`;
  creditTotal.classList.add("credit-total");
  courseContainer.appendChild(creditTotal);
}

// Botones de filtro
document.querySelector(".filters").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    displayCourses(e.target.textContent);
  }
});

// Carga inicial
displayCourses("All");

document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    nav.classList.toggle('active');  // Añadimos o quitamos la clase 'active'
});


