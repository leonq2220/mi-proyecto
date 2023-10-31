function showAlert() {
  alert(" !hola, esta es una alerta!");
}

const form = document.getElementById("myform")

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
function validateForm() {
  const input = document.getElementById("email")
  const inputValue = input.value

  if (!validateEmail(inputValue)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

if (form) {
  form.addEventListener("submit", function (lalala) {
    lalala.preventDefault()
    validateForm();
  })
  
  
  
}


document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").
      classList.toggle("nav-links-responsive")
  })
