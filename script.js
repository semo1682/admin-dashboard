const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

if (openSidebar) {
  openSidebar.addEventListener("click", () => {
    sidebar.classList.add("show");
  });
}

if (closeSidebar) {
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
}