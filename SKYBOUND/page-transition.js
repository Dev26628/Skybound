const transition = document.getElementById("page-transition");
const links = document.querySelectorAll("a[href]");

// Fade IN on page load
window.addEventListener("load", () => {
  transition.classList.remove("active");
});

// Handle navigation clicks
links.forEach(link => {
  const href = link.getAttribute("href");

  if(
    href &&
    !href.startsWith("#") &&
    !href.startsWith("http") &&
    !link.hasAttribute("target")
  ){
    link.addEventListener("click", e => {
      e.preventDefault();
      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  }
});

// Fade OUT when page is shown (back/forward)
window.addEventListener("pageshow", () => {
  transition.classList.remove("active");
});
