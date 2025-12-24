// ===== MASTER JS =====

// PAGE SWITCHING
const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    buttons.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    // Add active class to selected page
    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});

// QUIZ AND AIRPORT FLIP FUNCTIONALITY ALREADY HANDLED IN CSS :hover
// Additional JS can be added here for future interactivity (like simulator feedback, modal popups, etc.)
