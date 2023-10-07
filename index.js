document.addEventListener("DOMContentLoaded", function () {
  const lang_list = document.getElementById("lang-list");
  const login_list = document.getElementById("login-list");
  const loging_btn = document.getElementById("login-btn");
  const lang_btn = document.getElementById("lang-btn");

  lang_btn.addEventListener("click", function (event) {
    event.stopPropagation();
    lang_list.classList.toggle("is-active");
    login_list.classList.remove("is-active");
  });
  loging_btn.addEventListener("click", function (event) {
    event.stopPropagation();
    login_list.classList.toggle("is-active");
    lang_list.classList.remove("is-active");
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!login_list.contains(event.target)) {
      login_list.classList.remove("is-active");
    }
    if (!lang_list.contains(event.target)) {
      lang_list.classList.remove("is-active");
    }
  });
});
