/* ===============================
   Responsive Menu
================================ */
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

/* ===============================
   Footer Dates
================================ */
document.getElementById("copyright-year").textContent =
    new Date().getFullYear();

document.getElementById("last-modified").textContent =
    `Last Modified: ${document.lastModified}`;

/* ===============================
   Course List Array
================================ */
const courses = [
    { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
    { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true },
    { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: true },
    { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: true },
    { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { subject: "WDD", number: 231, title: "Frontend Web Development I", credits: 2, completed: false }
];

/* ===============================
   Display Courses
================================ */
const container = document.querySelector("#course-cards");
const creditTotal = document.getElementById("totalCredits");

function displayCourses(courseList) {
    container.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;

        container.appendChild(card);
    });

    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditTotal.textContent = total;
}

/* ===============================
   Filters
================================ */
document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("cse").addEventListener("click", () =>
    displayCourses(courses.filter(course => course.subject === "CSE"))
);
document.getElementById("wdd").addEventListener("click", () =>
    displayCourses(courses.filter(course => course.subject === "WDD"))
);

/* Initial Load */
displayCourses(courses);
