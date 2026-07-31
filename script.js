document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("open");
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");
      });
    });
  }

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      const subject = encodeURIComponent(
        "New NexScale Website Inquiry"
      );

      const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nService: " + service +
        "\n\nMessage:\n" + message
      );

      window.location.href =
        "mailto:hello@nexscale.com?subject=" +
        subject +
        "&body=" +
        body;
    });
  }

});
