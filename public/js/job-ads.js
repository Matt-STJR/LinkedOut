getUser()  

function getUser(){
    $.get("api/LinkedOut/user_data").then(function(data){
        console.log(data)
        employerName = data.name
        employerid = data.id
        getJobAds(employerid, employerName)
        
    });
};

function getJobAds(employerid, employerName){
    $.get("api/LinkedOut/jobAds/" + employerid).then(function(data){
        console.log(data)
        jobAds = data;
        for (let i = 0; i < jobAds.length; i++) {
            
            createJobAds(jobAds[i].jobId, employerName)
        }
    });
};

function createJobAds(jobId, employerName){
    $.get("api/LinkedOut/jobAds/info/" + jobId).then(function(data){
        console.log(data)
        

            currentResult = data;
            console.log("hi")
            //Assign the response results into employer name and the job name/type
            jobName = currentResult.title;
            
            //Create HTML DOM elements for each assigned response result
            var employerDisplay = $("<p>").text(employerName).attr("class", "card-title");
            var jobNameDisplay = $("<p>").text(jobName).attr("class", "card-bottom card-text");
                

            //Create a parent card element for the article


            //Create the body area of the card for text to sit
           var cardBody= $("<div>").attr("class", "card-body");
            
            //Assemble the card and place on the HTML page

            //1. Append all text items to the card-body and append the card-body to the card
            cardBody.append(employerDisplay);
            cardBody.append(jobNameDisplay);
                

            //2. Append the parent card to the HTML page
            $(".card-deck").append(cardBody);
            console.log(cardBody)
    });
};