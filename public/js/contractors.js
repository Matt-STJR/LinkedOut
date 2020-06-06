var jobOptionsForm = $(".jobOptionsForm");

jobOptionsForm.on("submit", function(event) {
    event.preventDefault();
    var jobName = $(".jobOptionsForm select").val()
    console.log(jobName)
    getJob(jobName)
});


function getJob(jobName){
    $.get("api/LinkedOut/contractors/name/" + jobName).then(function(data){
        console.log(data);
        jobid = data.id
        console.log(jobid)
        getEmployees(jobid)
    });
};

function getEmployees(jobid){
    $.get("api/LinkedOut/contractors/" + jobid).then(function(data){

        console.log(data)
        employees = data;

        for (let i = 0; i < employees.length; i++) {
        
            //Assign the response results into employer name and the job name/type
            
            firstName = employees[i].firstName;
            lastName = employees[i].lastName;
            email = employees[i].email;
            
            //Create HTML DOM elements for each assigned response result
            var employeeNameDisplay = $("<h5>").text(firstName + " " + lastName).attr("class", "card-title");
            var hr = $("<hr>").attr("class", "my-4");
            var emailDisplay = $("<p>").text("Email: " + email).attr("class", "card-bottom card-text");
                

            //Create a parent card element for the article


            //Create the body area of the card for text to sit
           var cardBody= $("<div>").attr("class", "job-card-body");
            
            //Assemble the card and place on the HTML page

            //1. Append all text items to the card-body and append the card-body to the card
            cardBody.append(employeeNameDisplay);
            cardBody.append(hr);
            cardBody.append(emailDisplay);
                
            console.log(cardBody)
            //2. Append the parent card to the HTML page
            $(".card-deck").append(cardBody);
            console.log(cardBody)
        };
    });
};