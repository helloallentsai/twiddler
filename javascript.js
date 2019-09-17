$(document).ready(function(){
  var $body = $('.twitter_content');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"><div class="tweet_date">' + tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
    $tweet.fadeIn(500).appendTo($body);
    index -= 1;
  }

 var inputName = '';

 $('#home').on('click', function() {
    $body.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' + tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body);
      index -= 1;
    }
    $("#home").text('Refresh for New Tweets');
    $('#twitter_status').text('Latest Tweets');
  });


 $('.tweet_user').on( "click", function() {
  inputName = $(event.currentTarget).text();
  $(document).on('click', '.' + inputName, function() {
    $body.html('');
    var index = streams.users[inputName].length - 1;
    while(index >= 0){
      var tweet = streams.users[inputName][index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' + tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body);
      index -= 1;
    }
    
    $("#home").text('Return Home');
    $('#twitter_status').text('@'+inputName+'\'s tweets');
  });
});
/*
 $(document).on('click', '.' + inputName, function() {
    $body.html('');
    var index = streams.users[inputName].length - 1;
    while(index >= 0){
      var tweet = streams.users[inputName][index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' +tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body);
      index -= 1;
    }
    $("#home").text('Return Home');
    $('#twitter_status').text('@'+inputName+'\'s tweets');
  });*/
/*
 $(document).on('click', '.sharksforcheap', function() {
    $body.html('');
    var index = streams.users.sharksforcheap.length - 1;
    while(index >= 0){
      var tweet = streams.users.sharksforcheap[index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' +tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body);
      index -= 1;
    }
    $("#home").text('Return Home');
    $('#twitter_status').text('@sharksforcheap\'s tweets');
  });

 $(document).on('click', '.mracus', function() {
    $body.html('');
    var index = streams.users.mracus.length - 1;
    while(index >= 0){
      var tweet = streams.users.mracus[index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' +tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body);
      index -= 1;
    }
    $("#home").text('Return Home');
    $('#twitter_status').text('@mracus\'s tweets');
  });

 $(document).on('click', '.douglascalhoun', function() {
    $body.html('');
    var index = streams.users.douglascalhoun.length - 1;
    while(index >= 0){
      var tweet = streams.users.douglascalhoun[index];
      var $tweet = $('<div class="tweet"><div class="tweet_date">' +tweet.created_at + '</div><div class="tweet_msg">' + tweet.message + '</div><div class="tweet_user '+tweet.user+'">' + tweet.user + '</div></div>');
      $tweet.fadeIn(500).appendTo($body);
      index -= 1;
    }
    $("#home").text('Return Home');
    $('#twitter_status').text('@douglascalhoun\'s tweets');
  }); */
});