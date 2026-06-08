document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("petForm");
  const successBox = document.getElementById("successBox");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    let isFormValid = true;

    if (nome.value.trim() === "") {
      setErrorFor(nome);
      isFormValid = false;
    } else {
      setSuccessFor(nome);
    }

    if (email.value.trim() === "") {
      setErrorFor(email);
      isFormValid = false;
    } else if (!isEmailValid(email.value.trim())) {
      setErrorFor(email);
      isFormValid = false;
    } else {
      setSuccessFor(email);
    }

    if (mensagem.value.trim() === "") {
      setErrorFor(mensagem);
      isFormValid = false;
    } else {
      setSuccessFor(mensagem);
    }

    if (isFormValid) {
      successBox.style.display = "block";
      form.reset();

      const formGroups = form.querySelectorAll(".form-group");
      formGroups.forEach((group) => group.classList.remove("success"));

      setTimeout(() => {
        successBox.style.display = "none";
      }, 5000);
    } else {
      successBox.style.display = "none";
    }
  });

  function setErrorFor(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add("invalid");
  }

  function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("invalid");
  }

  function isEmailValid(email) {
    const input = document.createElement("input");
    input.type = "email";
    input.value = email;
    return input.checkValidity();
  }
});
