var apiKey = "&api_key=78O0wx3tNB4BYozP6ttBq8IoDGmpoG4Z";
var queryAddress = "http://api.giphy.com/v1/gifs/";
var searchParameter = "search?q=";
var limit = "&limit=10";



var topics = ['tabby', 'russian blue', 'ragdoll', 'siamese', 'tuxedo cat'];
var topicZone = $('#topics-zone');

for(var i = 0; i < topics.length; i++) {
  var topicButton = $('<button>');
  topicButton.attr('data-name', topics[i]);
  topicButton.text(topics[i]);
  topicZone.append(topicButton);
}
$("#cat-form").on('submit', function () {
  event.preventDefault();

  var cat = $("#cat-input").val().trim();
  topics.push(cat);

   
    var topicButton = $('<button>');
    topicButton.attr('data-name', topics[topics.length -1]);
    topicButton.text(topics[i]);
    topicZone.append(topicButton);

    console.log("hi");
  
  
})
$('body').on('click', 'button', function() {
  var topic = $(this).attr('data-name');
  var query = searchParameter + topic;
  var queryUrl = queryAddress + query + apiKey + limit;
  $.ajax({
    method: 'GET',
    url: queryUrl
  }).then(function(response) {
    console.log(queryUrl);
    console.log(response);
    var results = response.data;
    var gifZone = $('#gif-zone');
    gifZone.empty();
    for(var j = 0; j < results.length; j++) {
      var stillGif = results[j].images.fixed_height_still.url;
      var originalGif = results[j].images.fixed_height.url;
      var gifImg = $('<img>');
      gifImg.attr({'src': stillGif,
                    'state': "still",
                  'still': stillGif,
                  'animated': originalGif});
      gifZone.append(gifImg);
    }

    $('img').on('click', function() {
      var animatedUrl = $(this).attr('animated');
      var stillUrl = $(this).attr('still');
      var state = $(this).attr('state');
      if (state === 'still') {
        $(this).attr('state', 'animated');
        $(this).attr('src', animatedUrl);
          
        }

        else {
          $(this).attr('state', 'still');
        $(this).attr('src', stillUrl);
        }

    });
   


  });


  //send an api request
  //for the button's topic
  //receive 10 gifs
  //add the still gif's to page
  //put click handler on gif
  //animate the still gif when we click on it

  console.log($(this).attr('data-name'));
});
