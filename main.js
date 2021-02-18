let trigger = document.querySelector("#expand");

trigger.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  document.getElementById("menu").classList.toggle("visible");
}
