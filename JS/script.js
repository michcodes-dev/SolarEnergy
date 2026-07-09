console.log("Script loaded!");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
    menuIcon.innerHTML = "&times;";
} else {
    menuIcon.innerHTML = "☰";
}
});