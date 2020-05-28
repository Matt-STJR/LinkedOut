$(document).ready(function() {
    // references for all input fields and containers

    //Login page
    var loginEmail = $("#loginEmail");
    var loginPassword = $("#loginPass");

    //Sign Up page
    var signCompany = $("#signCompany");
    var signaddress = $("#signaddress");
    var signEmail = $("#signEmail");
    var signPhone = $("#signPhone");
    var signPassword = $("#signPass");
    var signPasswordConfirm = $("#signPassConfirm");

    //User page
    // var userImg = $("userImg"); FD
    var userCompany = $("#userCompany");
    var userAbout = $("#userAbout");
    var joblistContainer = $("#joblistContainer");
    var homebtn = $("#homebtn") //used on the pages defined below as well

    //Job view page
    var viewJobName = $("#viewJobName");
    var viewAbout = $("#viewAbout");
    var viewEmployeeContainer = $("#viewEmployeeContainer");

    //New Job page
    var newJobName = $("#newJobName");
    var newAbout = $("#newAbout");
    var newKeywordContainer = $("#newKeywordContainer");
    var newKeywordInput = $("#newKeywordInput");

    //All event listeners
    $(document).on("click", "loginBtn", login);
    $(document).on("click", "signUpBtn", redirectSignUp);
    $(document).on("click", "createBtn", createAccount);
    $(document).on("click", "homebtn", toHome);
    // $(document).on("click", "EditImg", EditImg);  FD
    $(document).on("click", "EditAbout", EditAbout);
    $(document).on("click", "listingView", listingView);
    $(document).on("click", "listingAdd", listingAdd);
    $(document).on("click", "employeeDelete", employeeDelete);
    $(document).on("click", "employeeAdd", employeeAdd);
    $(document).on("click", "skillAdd", skillAdd);
    $(document).on("click", "newJobAdd", newJobAdd);

    //Arrays for joblistings and employees
    var userid = [];
    var joblisting = [];
    var employeeConfirmed = [];
    var employeeNotConfirmed = [];
    //initialising
    toHome()
    /*
    All the log in/Sign up stuff
    */

    // This function is for creating the home page and/or redirecting from either the view joblisting or create joblisting, back to the user home page
    function toHome(){
        //pull user id (week14 homework)
        $.ajax({
            method: "GET",
            url: "/api/" + id,
            data: user
          }).then(createPage)
    };

    function createPage(){
        //handlebars
    };

    function EditAbout(){

    };

    function listingView(){

    };

    function listingAdd(){

    };

    function employeeDelete(){

    };

    function employeeAdd(){

    };

    function skillAdd(){

    };

    function newJobAdd(){

    };

  });
  