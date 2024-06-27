const form = document.getElementById('form');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const queryType = document.getElementsByName('query-type');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

const formElements = [fName, lName, email, queryType, message];



form.addEventListener("submit", () => {
    e.preventDefault(); // Prevents reload on submit
       if (!fName) { 
        fName.setAttribute("missing", "true");
       }
       

});






