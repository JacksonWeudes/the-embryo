function initSideMenu()
{
    const menuBtn = document.querySelector(".mobile-icon")
    const sideMenu = document.querySelector(".side-menu-nav")

    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("active")
    })
}

initSideMenu()