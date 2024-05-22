const topMenu = document.getElementById("cus-top-menu");
const toggleTopMenuIcon = document.getElementById("cus-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to toggle top menu icon
    topMenu.classList.toggle("cus-topmenu-expand");
    topMenu.classList.toggle("hidden");
  } else {
    // Click outside from toggle top menu icon
    if (topMenu.classList.contains("cus-topmenu-expand")) {
      topMenu.classList.remove("cus-topmenu-expand");
      topMenu.classList.add("hidden");
    }
  }
});
