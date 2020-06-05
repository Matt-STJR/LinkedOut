getJob()  

function getJob(){
    $.get("api/LinkedOut/contractors/jobs").then(function(data){
        
        console.log(data);
        jobs = data;

        for (let i = 0; i < jobs.length; i++) {
            jobName = jobs[i].title;
            jobId = jobs[i].id;

            var jobOption = $("<p>").text(jobName).attr("id", jobid);
            $("").append(jobOption)
        };
       
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
            var employeeNameDisplay = $("<p>").text(firstName + " " + lastName).attr("class", "card-title");
            var emailDisplay = $("<p>").text("Email: " + email).attr("class", "card-bottom card-text");
                

            //Create a parent card element for the article


            //Create the body area of the card for text to sit
           var cardBody= $("<div>").attr("class", "card-body");
            
            //Assemble the card and place on the HTML page

            //1. Append all text items to the card-body and append the card-body to the card
            cardBody.append(employeeNameDisplay);
            cardBody.append(emailDisplay);
                

            //2. Append the parent card to the HTML page
            $(".card-deck").append(cardBody);
            console.log(cardBody)
        };
    });
};