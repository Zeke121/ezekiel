document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav ul li");

    // Remove active class on page load to ensure only one is active
    navItems.forEach(item => item.classList.remove("active"));

    // Get the current page's URL path
    const currentPage = window.location.pathname;

    // Loop through all nav items
    navItems.forEach(item => {
        const link = item.querySelector("a").getAttribute("href");

        // If the href matches the current page URL, add the active class
        if (currentPage.includes(link)) {
            item.classList.add("active");
        }
    });
});

const themeToggle = document.getElementById("theme-toggle");
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

        themeToggle.onclick = () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        };