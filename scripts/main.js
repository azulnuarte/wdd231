/* ===============================
   Responsive Menu
================================ */
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

/* ===============================
   Dates in Footer
================================ */
// Current year
const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;

/* ===============================
   Course List Array
================================ */
const courses = [
    { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
    { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true },
    { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: false },
    { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: false },
    { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: false },
    { subject: "WDD", number: 231, title: "Front-End Web Development I", credits: 2, completed: false }
];

/* ===============================
   Display Courses
================================ */
const courseContainer = document.getElementById("courses");
const creditTotal = document.getElementById("totalCredits");

function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;

        courseContainer.appendChild(card);
    });

    // Calculate total credits
    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditTotal.textContent = total;
}

/* ===============================
   Filter Buttons
================================ */
document.getElementById("all").addEventListener("click", () => {
    displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

document.getElementById("cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

// Initial display
displayCourses(courses);
