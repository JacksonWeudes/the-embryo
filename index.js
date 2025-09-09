function initSideMenu()
{
    const menuBtn = document.querySelector(".mobile-icon")
    const sideMenu = document.querySelector(".side-menu-nav")
    const overlay = document.querySelector(".overlay")
    const body = document.body

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active")
        sideMenu.classList.toggle("active")
        overlay.classList.toggle("active")
        body.classList.toggle("active")
    })
}

function initHideOnScroll()
{
    const body = document.body
    let lastScroll = 0

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset

        if(currentScroll <= 0){
            body.classList.remove("scroll-up")
        }

        if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
        }

        if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
            body.classList.add("scroll-up")
            body.classList.remove("scroll-down")
        }

        lastScroll = currentScroll
    })
}

document.addEventListener("DOMContentLoaded", () => {
    initSideMenu()
    initHideOnScroll()
})
