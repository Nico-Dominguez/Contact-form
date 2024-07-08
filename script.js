const form = document.getElementById("form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const queryType = document.getElementsByName("query-type");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const consent = document.getElementById("consent");
const checkbox = document.getElementById("checkbox");

const fNameError = document.getElementById("fname-error");
const lNameError = document.getElementById("lname-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");

// const formElements = [fName, lName, email, queryType, message];

fName.addEventListener("input", () => {
  if (fName.value) {
    fName.setAttribute("missing", "false");
    fNameError.innerHTML = "";
  } else {
    fName.setAttribute("missing", "true");
    fNameError.innerHTML = "This field is required.";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents reload on submit
  if (!fName.value) {
    fName.setAttribute("missing", "true");
    fNameError.innerHTML = "This field is required.";
  }

  if (!lName.value) {
    lName.setAttribute("missing", "true");
    lNameError.innerHTML = "This field is required.";
  }

  if (!email.value) {
    email.setAttribute("missing", "true");
    emailError.innerHTML = "This field is required.";
  }

  if (!message.value) {
    message.setAttribute("missing", "true");
    messageError.innerHTML = "This field is required.";
  }

  if (!consent.checked) {
    consent.setAttribute("missing", "true");
    checkboxError.innerHTML =
      "To submit this form, please submit to being contacted";
  }
});
