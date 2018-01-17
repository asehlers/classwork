// Empty JS for your own code to be here

function articleSearch() {
	var APIKey = "9f7ffdfe7c9d477ebeeafd2e8c0b26c7";

  // Here we are building the URL we need to query the database
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  var queryObj = {'api-key': "9f7ffdfe7c9d477ebeeafd2e8c0b26c7"};
  console.log($("#searchTerms").val());

  if($("#searchTerms").val() == ""){
      console.log("no search term");
  }
  else{
      queryObj.q = $("#searchTerms").val();
  }

  if($("#searchTerms").val() == ""){
      console.log("no search term");
      queryObj.q = $("#searchTerms").val();
  }

  if($("#searchTerms").val() == ""){
      console.log("no search term");
      queryObj.q = $("#searchTerms").val();
  }



  queryURL += '?' + $.param(
  	queryObj
  );

  $.ajax({
   	url: queryURL,
   	method: "GET"
  }).done(function(ajaxOutput) {
   	console.log(ajaxOutput);

   	for (var i = 0; i < ajaxOutput.response.docs.length; i++) {
    		
      var temp = "";
      if(ajaxOutput.response.docs[i].byline !== undefined){
          temp = ajaxOutput.response.docs[i].byline.original;
      }

   	$("tbody").append("<tr><th>" + i +"</th><th><a>" + ajaxOutput.response.docs[i].headline.print_headline + "</a></th><th>" + temp + "</th><th>" + ajaxOutput.response.docs[i].pub_date + "</th><th>" + ajaxOutput.response.docs[i].snippet+ "</th></tr>");
      console.log("<tr><th>" + i +"</th><th><a>" + ajaxOutput.response.docs[i].headline.print_headline + "</a></th><th>" + temp + "</th><th>" + ajaxOutput.response.docs[i].pub_date + "</th><th>" + ajaxOutput.response.docs[i].snippet+ "</th></tr>");
  }
     

    console.log(queryURL);
      
    // console.log(response);
  });
}

// $(function () {
//   var bindDatePicker = function() {
// 	$(".date").datepicker({
//        format:'YYYY-MM-DD',
// 		icons: {
// 			time: "fa fa-clock-o",
// 			date: "fa fa-calendar",
// 			up: "fa fa-arrow-up",
// 			down: "fa fa-arrow-down"
// 		}
// 	}).find('input:first').on("blur",function () {
// 		// check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
// 		// update the format if it's yyyy-mm-dd
// 		var date = parseDate($(this).val());

// 		if (! isValidDate(date)) {
// 			//create date based on momentjs (we have that)
// 			date = moment().format('YYYY-MM-DD');
// 		}

// 		$(this).val(date);
// 	});
// }
   
//   var isValidDate = function(value, format) {
// 	format = format || false;
// 	// lets parse the date to the best of our knowledge
// 	if (format) {
// 		value = parseDate(value);
// 	}

// 	var timestamp = Date.parse(value);

// 	return isNaN(timestamp) == false;
//   }
   
//   var parseDate = function(value) {
// 	var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
// 	if (m)
// 		value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

// 	return value;
//   }
   
//   bindDatePicker();
// });


$("body").on("click", "#submit", function(event) {
	event.preventDefault();
	console.log("submit clicked");
	articleSearch();	
});
