console.log("year.js loaded");


const yearSpan = document.getElementById("copyright-year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

const lastModifiedParagraph = document.getElementById("last-modified");
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');
if (hamburgerElement && navElement) {
  hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
  });
}
