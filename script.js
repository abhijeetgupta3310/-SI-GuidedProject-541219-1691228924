const loginBtn = document.getElementById("loginBtn");
const dropdown = document.getElementById("myDropdown");

loginBtn.addEventListener("click", function () {
  dropdown.classList.toggle("show");

  window.addEventListener("click", function (event) {
    if (!event.target.matches("#loginBtn")) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  });
});
