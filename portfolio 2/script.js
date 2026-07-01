// Smooth scroll for "Hire Me" button
function scrollToSection() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Mobile menu toggle
const menu = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menu.onclick = () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
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
