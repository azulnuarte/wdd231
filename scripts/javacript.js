// Defer para que el script cargue después del HTML
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el año actual en el pie de página
    const copyrightYear = new Date().getFullYear();
    const copyrightElement = document.querySelector("footer p");
    copyrightElement.innerHTML = `©${copyrightYear} 💙Azul Agustina Nuarte💙 Mendoza`;

    // Mostrar la fecha de la última modificación
    const lastModified = document.lastModified;
    const footerParagraph = document.createElement("p");
    footerParagraph.textContent = `Last modified: ${lastModified}`;
    document.querySelector("footer").appendChild(footerParagraph);

    // Array de cursos
    const courses = [
        { name: "CSE 110", completed: true, credits: 3, category: "CSE" },
        { name: "WDD 130", completed: false, credits: 4, category: "WDD" },
        { name: "WDD 131", completed: false, credits: 3, category: "WDD" },
        { name: "CSE 111", completed: false, credits: 3, category: "CSE" },
        { name: "CSE 210", completed: true, credits: 3, category: "CSE" },
        { name: "WDD 231", completed: false, credits: 4, category: "WDD" }
    ];

    // Función para mostrar los cursos
    function displayCourses(coursesToDisplay) {
        const coursesDiv = document.querySelector(".courses");
        coursesDiv.innerHTML = ""; // Limpiar la lista de cursos
        let totalCredits = 0;

        coursesToDisplay.forEach(course => {
            const button = document.createElement("button");
            button.textContent = course.name;
            button.classList.add(course.category.toLowerCase());

            // Estilo para cursos completados
            if (course.completed) {
                button.style.backgroundColor = "#8fbc8f"; // Verde claro
                button.style.color = "white";
            }

            // Mostrar los cursos en la página
            coursesDiv.appendChild(button);
            totalCredits += course.credits;
        });

        // Mostrar el total de créditos
        const totalCreditsElement = document.createElement("p");
        totalCreditsElement.textContent = `Total credits: ${totalCredits}`;
        document.querySelector(".certificate").appendChild(totalCreditsElement);
    }

    // Mostrar todos los cursos al cargar
    displayCourses(courses);

    // Filtrar por categoría (CSE, WDD o Todos)
    const buttons = document.querySelectorAll(".filters button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let filteredCourses;
            if (button.textContent === "All") {
                filteredCourses = courses;
            } else {
                filteredCourses = courses.filter(course => course.category === button.textContent);
            }
            displayCourses(filteredCourses);
        });
    });
});
