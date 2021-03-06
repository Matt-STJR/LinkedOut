$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("#login-form");
  var emailInput = $("#inputEmail");
  var pwdInput = $("#inputPassword");

  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      pwd: pwdInput.val().trim()
    };

    if (!userData.email || !userData.pwd) {
      return;
    }

    loginUser(userData.email, userData.pwd);
    emailInput.val("");
    pwdInput.val("");
  });

  
  function loginUser(email, pwd) {
    $.post("/api/LinkedOut/signin", {
      email: email,
      pwd: pwd
    })
      .then(function() {
        window.location.replace("/LinkedOut/home");
      })

      .catch(function(err) {
        console.log(err);
      });
  }
});
