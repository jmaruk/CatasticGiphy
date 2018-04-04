var apiKey = "&api_key=78O0wx3tNB4BYozP6ttBq8IoDGmpoG4Z";
var queryAddress = "http://api.giphy.com/v1/gifs/";
var searchParameter = "search?q=";
var limit = "&limit=10";



var topics = ['tabby', 'abysinnian', 'ragdoll', 'siamese', 'tuxedo cat'];
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
    for(var j = 0; j < results.length; j++) {
      var stillGif = results[j].images.fixed_height_still.url;
      var originalGif = results[j].images.original.url;
      var gifImg = $('<img>');
      gifImg.attr({'src': stillGif,
                  'still': stillGif,
                  'animated': originalGif});
      gifZone.append(gifImg);
    }

    $('img').on('click', function() {
      var animatedUrl = $(this).attr('animated');
      $(this).attr('src', animatedUrl);
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
