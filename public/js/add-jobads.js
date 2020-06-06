$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/add-jobads?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  // Getting jQuery references to the post body, title, form, and category select

  var skills = $("#inputJobDescription");
  var jobadsForm = $(".jobadsForm");
  var titleInput= $("#inputJobTitle");
  // Giving the titleInput a default value
  titleInput.val("");

  // Adding an event listener for when the form is submitted
  $(jobadsForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!titleInput || !skills) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      skills: skills.val(),
      title: titleInput.val()
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(newPost) {
    $.post("/api/LinkedOut/add-jobAd/add", newPost, function(data) {
      createdAt = data.createdAt
      getNewJob(createdAt, newPost)
    });
  }
  function getNewJob(createdAt){
    $.get("/api/LinkedOut/add-jobAd/getNewJob/" + createdAt).then(function(data){
        id = data.id
        console.log(data)
        createAd(id)
        
    });
};

function createAd(id){
  $.post("/api/LinkedOut/add-jobAd/createAd/" + id).then(function(){
    window.location.href = "/jobads";
  });
};

  // Gets post data for a post if we're editing
  function getPostData(id) {
    $.get("/api/LinkedOut/add-jobAd/get-data/" + id, function(data) {

      if (data) {
        // If this post exists, prefill our cms forms with its data
        skills.val(data.body);
        titleInput.val(data.title);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function() {
        window.location.href = "/job-ads";
      });
  }
});