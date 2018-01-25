// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(document).on("click", ".updateQuote", function(){
    event.preventDefault();
    console.log("update clicked");
    var updatedQuote = {
      id: $(".update-form").attr("data-id"),
      quote: $("#quo").val().trim()
    };

    $.ajax("/todos/"+updatedQuote.id, {
      type: "PUT",
      data: updatedQuote
    }).then(function(data){
      console.log("ajax returned");
      location.assign("/");
    });
  });

  // jQuery event handlers should go here.
  $(document).on("click", ".addQuote", function(event)
  {
    event.preventDefault();

    var newQuote = 
    {
      author: $("#auth").val().trim(),
      quote: $("#quo").val().trim()
    };

    $.ajax("/todos/", 
    {
      type: "POST",
      data: newQuote
    }).then( function(data) 
      {
        location.reload();
      }
    );

    // $.ajax("/todos", {
    //   type: "POST",
    //   data: newPlan
    // }).then(
    //   function() {
    //     console.log("created new plan");
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });
});
