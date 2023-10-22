document.addEventListener("DOMContentLoaded", function () {
  const publication_btn = document.getElementById("publication_btn");
  const publication_part = document.getElementById("publication_part");
  const personal_btn = document.getElementById("personal_btn");
  const personal_part = document.getElementById("personal_part");
  personal_btn.addEventListener("click", () => {
    personal_part.classList.toggle("hide");
  });
  publication_btn.addEventListener("click", () => {
    console.log("publication");
    publication_part.classList.toggle("hide");
  });

  // const lang_list = document.getElementById("lang-list");
  // const login_list = document.getElementById("login-list");
  const login_btn = document.getElementById("login-btn");
  // const lang_btn = document.getElementById("lang-btn");

  lang_btn.addEventListener("click", function (event) {
    event.stopPropagation();
    lang_list.classList.toggle("is-active");
    login_list.classList.remove("is-active");
    // You can add an additional class to the button to indicate that it's active
    lang_btn.classList.toggle("is-active-btn");
    login_btn.classList.remove("is-active-btn");
  });

  login_btn.addEventListener("click", function (event) {
    event.stopPropagation();
    login_list.classList.toggle("is-active");
    lang_list.classList.remove("is-active");
    // You can add an additional class to the button to indicate that it's active
    login_btn.classList.toggle("is-active-btn");
    lang_btn.classList.remove("is-active-btn");
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !login_list.contains(event.target) &&
      !login_btn.contains(event.target)
    ) {
      login_list.classList.remove("is-active");
      // Remove the active class from the button
      login_btn.classList.remove("is-active-btn");
    }
    if (!lang_list.contains(event.target) && !lang_btn.contains(event.target)) {
      lang_list.classList.remove("is-active");
      // Remove the active class from the button
      lang_btn.classList.remove("is-active-btn");
    }
  });

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
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".modal-trigger-edit") || []).forEach(
    ($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

      $trigger.addEventListener("click", () => {
        openModal($target);
      });
    }
  );
  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".modal-trigger-delete") || []).forEach(
    ($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

      $trigger.addEventListener("click", () => {
        openModal($target);
      });
    }
  );
  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closeAllModals();
    }
  });
});
