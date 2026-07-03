
// Smooth scroll for "Hire Me" button
function scrollToSection() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
 
// Mobile menu toggle
const menu = document.getElementById("menu");
const nav = document.querySelector("nav ul");
let menuOpen = false;
 
menu.onclick = () => {
    menuOpen = !menuOpen;
    nav.style.display = menuOpen ? "flex" : "none";
    if (menuOpen) {
        nav.style.flexDirection = "column";
    }
};
 
// Certificate click-to-expand descriptions
document.querySelectorAll("#certificates li").forEach(item => {
    item.addEventListener("click", () => {
        // Toggle: remove description if already open
        const oldDesc = item.querySelector(".certificate-desc");
        if (oldDesc) {
            oldDesc.remove();
            return;
        }
 
        // Create new description element
        let descBox = document.createElement("p");
        descBox.textContent = item.dataset.description;
        descBox.classList.add("certificate-desc");
        item.appendChild(descBox);
    });
});
 
// Contact form submission via Formspree (AJAX, no page redirect)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
 
contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
 
    const submitBtn = contactForm.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "";
 
    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { "Accept": "application/json" }
        });
 
        if (response.ok) {
            formStatus.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
            formStatus.className = "success";
            contactForm.reset();
        } else {
            formStatus.textContent = "Something went wrong. Please try again or email me directly.";
            formStatus.className = "error";
        }
    } catch (err) {
        formStatus.textContent = "Network error. Please check your connection and try again.";
        formStatus.className = "error";
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send";
    }
});