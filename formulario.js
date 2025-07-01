const form = document.getElementById("formulario");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let formularioValido = true;

  inputs.forEach((input) => {
    input.classList.remove("required-no-input", "required-input");

    const mensagemErro = input.nextElementSibling;

    if (input.value.trim() === "") {
      input.classList.add("required-no-input");

      if (mensagemErro && mensagemErro.classList.contains("required")) {
        mensagemErro.style.display = "block";
      }

      formularioValido = false;
    } else {
      input.classList.add("required-input");

      if (mensagemErro && mensagemErro.classList.contains("required")) {
        mensagemErro.style.display = "none";
      }
    }
  });

});