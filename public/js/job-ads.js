getUser()  

function getUser(){
    $.get("api/LinkedOut/user_data").then(function(data){
        employer = data,
        employerName = employer.name
        employerid = employer.id
        getJobAds(employerid)
    });
};

function getJobAds(){
    $.get("api/LinkedOut/jobAds/1").then(function(data){
        jobAds = data,
        createJobAds(jobAds)
    });
};

function createJobAds(){
    $.get("api/LinkedOut/jobAds/info").then(function(data){

        var array = data;
        //Loop to iterate through the job ads
        for (var i=0;i<15;i++)
        {   
            currentResult = array[i];
            //Assign the response results into employer name and the job name/type
            employerName = employers.name
            jobName = currentResult.jobs.id;
            
            //Create HTML DOM elements for each assigned response result
            var employerDisplay = $("<p>").text(employerName).attr("class", "card-title");
            var jobNameDisplay = $("<p>").text(jobName).attr("class", "card-bottom card-text");
                

            //Create a parent card element for the article
            var cardDiv = $("<div>").attr({
                class: "card animated bouncein",
                href: link,
            });
            //Click event for card
            cardDiv.on("click", function(){
                window.open($(this).attr("href"), '_blank');
            })

            //Create the body area of the card for text to sit
            var cardBody= $("<div>").attr("class", "card-body");
            
            //Assemble the card and place on the HTML page

            //1. Append all text items to the card-body and append the card-body to the card
            cardBody.append(employerDisplay);
            cardBody.append(jobNameDisplay);
                

            //2. Append the parent card to the HTML page
            $(".card-deck").append(cardDiv);
        };
    });
};