const form = document.getElementById("form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const queryType = document.getElementsByName("query-type");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

const fNameError = document.getElementById("fname-error");
const lNameError = document.getElementById("lname-error");

// const formElements = [fName, lName, email, queryType, message];




fName.addEventListener("input", () => {  
  if (fName.value) {
    fName.setAttribute("missing", "false");

  }
  else {  
    fName.setAttribute("missing", "true");
  }
});



form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents reload on submit
  if (!fName.value) {
    fName.setAttribute("missing", "true");
  }
  if (!lName.value) {
    lName.setAttribute("missing", "true");
  }
  if (!email.value) {
    email.setAttribute("missing", "true");
  }
  if (!message.value) {
    message.setAttribute("missing", "true");
  }
});



