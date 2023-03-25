function toggleNav() {
    let nav = $("nav");
    let menu = $(".menu");
    if (nav.classList.contains("closed")) {
        nav.classList.remove("closed");
        menu.classList.add("open");
    }
    else {
        nav.classList.add("closed");
        menu.classList.remove("open");
    }
    console.log("toggle");
}