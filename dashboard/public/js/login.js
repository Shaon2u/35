(function () {
  var passwordField = document.querySelector("#password");
  var toggle = document.getElementById("togglePassword");
  var openeye = document.getElementById("openeye");
  var closeeye = document.getElementById("closeeye");
  var form = document.getElementById("kt_sign_in_form");
  var button = document.getElementById("kt_sign_in_submit");

  if (toggle && passwordField) {
    toggle.addEventListener("click", function () {
      var show = passwordField.getAttribute("type") === "password";
      passwordField.setAttribute("type", show ? "text" : "password");
      if (openeye && closeeye) {
        openeye.classList.toggle("hidden", !show);
        closeeye.classList.toggle("hidden", show);
      }
    });
  }

  if (form && button) {
    form.addEventListener("submit", function () {
      button.setAttribute("data-kt-indicator", "on");
      button.disabled = true;
    });
  }
})();
