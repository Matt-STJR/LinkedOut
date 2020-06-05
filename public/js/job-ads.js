getUser()  

function getUser(){
    $.get("api/LinkedOut/user_data").then(function(data){
        employerName = data.name
        employerid = data.id
        getJobAds(employerid, employerName)
        
    });
};

function getJobAds(employerid, employerName){
    $.get("api/LinkedOut/jobAds/" + employerid).then(function(data){
        jobAds = data;
        for (let i = 0; i < jobAds.length; i++) {
            createJobAds(jobAds[i].jobId, employerName)
        }
    });
};

function createJobAds(jobId, employerName){
    $.get("api/LinkedOut/jobAds/info/" + jobId).then(function(data){        

            currentResult = data;
            
            //Assign the response results into employer name and the job name/type
            jobName = currentResult.title;
            
            //Create HTML DOM elements for each assigned response result
            var jobNameDisplay = $("<h5>").text(jobName).attr("class", "card-title");
            var hr = $("<hr>").attr("class", "my-4");
            var employerLabel = $("<p>").text("Project name: " + employerName).attr("class", "card-label");

            //Create the body area of the card for text to sit
           var cardBody= $("<div>").attr("class", "job-card-body");
            
            //Assemble the card and place on the HTML page
            //1. Append all text items to the card-body and append the card-body to the card
            cardBody.append(jobNameDisplay);
            cardBody.append(hr);
            cardBody.append(employerLabel);
            
                
            //2. Append the parent card to the HTML page
            $(".card-deck").append(cardBody);
    
    });
};