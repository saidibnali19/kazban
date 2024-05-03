const menuToggler = document.querySelector("[data-menu-toggler]");
const menu = document.querySelector("[data-header-menu]");
menuToggler.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    if (visibility === "false") {
        menu.setAttribute("data-visible", true);
        menuToggler.setAttribute("aria-expanded", true);
    } else {
        menu.setAttribute("data-visible", false);
        menuToggler.setAttribute("aria-expanded", false);
    }
});


// For custom play button
const playPauseButton = document.querySelector("[data-play-pause-button]")
const video = document.querySelector("[data-video]")

playPauseButton.addEventListener("click", () => {
    if (video.paused == true) {
        // Play the video
        video.play();
      } else {
        // Pause the video
        video.pause();
      }

})