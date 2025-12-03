/* Contact form handling */
const form = document.getElementById("contact-form");
const msgDiv = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    msgDiv.textContent = "Please fill out all fields.";
    msgDiv.style.color = "tomato";
  } else {
    msgDiv.textContent = "Thanks! I will get back to you soon.";
    msgDiv.style.color = "lightgreen";
    form.reset();
  }
});
