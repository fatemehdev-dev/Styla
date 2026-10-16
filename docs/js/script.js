document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("bottom-menu-btn");
    const menuPanel = document.getElementById("bottom-menu-panel");
    if (!menuButton || !menuPanel) return;

    function setMenu(open) {
        menuPanel.classList.toggle("is-open", open);
        menuButton.classList.toggle("is-active", open);
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
        menuPanel.setAttribute("aria-hidden", String(!open));
    }

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        setMenu(!menuPanel.classList.contains("is-open"));
    });

    menuPanel.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { setMenu(false); });
    });

    document.addEventListener("click", function (event) {
        if (!menuPanel.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setMenu(false);
    });
});
