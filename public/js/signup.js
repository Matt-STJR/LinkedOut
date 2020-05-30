$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("#signup-form");
  var nameInput = $("#inputBusinessName");
  var addressInput = $("#inputBusinessAddress");
  var phoneInput = $("#inputPhoneNumber");
  var emailInput = $("#inputEmail");
  var pwdInput = $("#inputPassword");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      phone: phoneInput.val().trim(),
      email: emailInput.val().trim(),
      pwd: pwdInput.val().trim()
    };

    if (!userData.name || !userData.address || !userData.phone || !userData.email || !userData.pwd ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.name, userData.address, userData.phone, userData.email, userData.pwd,);
    nameInput.val("");
    addressInput.val("");
    phoneInput.val("");
    emailInput.val("");
    pwdInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, address, phone, email, pwd) {
    $.post("/api/LinkedOut/signup", {
      name: name,
      address: address,
      phone: phone,
      email: email,
      pwd: pwd
    })
      .then(function(data) {
        window.location.replace("/LinkedOut/home");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
