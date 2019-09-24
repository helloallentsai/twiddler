$(document).ready(function(){
  var $body = $('.twitter_content');


  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"><div class="tweet_date">' + tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
    $tweet.fadeIn(500).appendTo($body);
    index -= 1;
  }

  var currentTweets = streams.home.slice();
  var newTweets = 0;
  function checkForNew() {
    if (currentTweets.length < streams.home.length) {
      newTweets = streams.home.length-currentTweets.length;
      console.log(newTweets);
      $('#home').html(newTweets + ' new tweets! click to refresh');
    }
  }
  var handle = setInterval(checkForNew, 5000);
  handle;


 //return home
 $(document).on('click', '#home', function() {
    $body.html('');
    clearInterval(handle);

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' + tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body, function(){

      });
      index -= 1;
    }
    $("#home").text('refresh for new tweets');
    $('#twitter_status').text('latest tweets');
    tweetHover();
    currentTweets = streams.home.slice();
    newTweets = 0;
    $('#home').html(newTweets + ' new tweets! click to refresh');
    setInterval(checkForNew, 5000);
  });

 //filter by username
 var inputName = '';
 $(document).on( "click", '.tweet_user', function(event) {
   clearInterval(handle);
    inputName = $(event.currentTarget).text();
    $body.html('');
    var index = streams.users[inputName].length - 1;
    while(index >= 0){
      var tweet = streams.users[inputName][index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' + tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body);
      index -= 1;
    }

    $("#home").text('return home');
    $('#twitter_status').text('@'+inputName+'\'s tweets');
    tweetHover();
    currentTweets = streams.home.slice();
    newTweets = 0;
    $('#home').html('click to return home');
  });

 function tweetHover() {
   $('.tweet').hover(function() {
      $(this).css('background-color', '#84d5f0');
    }, function() {
      $(this).css('background-color', 'lightblue');
    })
  }
  tweetHover();
});