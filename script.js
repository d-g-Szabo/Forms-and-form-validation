console.log("Hello, world!");

//select the form element form the DOM
const form = document.getElementById("customer-form");

//make my button submit the user input
form.addEventListener("submit", function (event) {
  //prevent the default form submission
  event.preventDefault();

  //handle the form data by creating a new object to store the values
  //create a new object
  const formData = new FormData(form);
  //stores the input values in the object
  const formValues = Object.fromEntries(formData);

  console.log(formValues);
  //can acces the object properties by using the dot notation
  console.log(formValues.customerName);
});
