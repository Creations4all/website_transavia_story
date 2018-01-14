$(document).ready(function(){
    $('#dropdownleft').click(function(event){
        event.stopPropagation();
         $("#downleft").slideToggle();
    });
    $("#downleft").on("click", function (event) {
        event.stopPropagation();
    });
});

$(document).ready(function(){
    $('#dropdownright').click(function(event){
        event.stopPropagation();
         $("#downright").slideToggle();
    });
    $("#downright").on("click", function (event) {
        event.stopPropagation();
    });
});

$( "#dropdownright" ).click(function() {
  $( "#dropdownright" ).toggleClass( "active" );
});

 $( "#dropdownleft" ).click(function() {
  $( "#dropdownleft" ).toggleClass( "active" );
});

$( "main section article ul li:nth-child(1)" ).click(function() {
  $(this).find('span').toggleClass( "liked" );
});

$( "main section article ul li:nth-child(3)" ).click(function() {
  $(this).find('span').toggleClass( "bookmark" );
});




$('main section article ul li:nth-child(1)').click(function() {
    if ($(this).find(".liked")[0]){
      $(this).find('span').html(function(i, val) { return val*1+1 });
    } else {
      $(this).find('span').html(function(i, val) { return val*1-1 });
    }
});

$('main section article ul li:nth-child(3)').click(function() {
    if ($(this).find(".bookmark")[0]){
      $(this).find('span').html(function(i, val) { return val*1+1 });
    } else {
      $(this).find('span').html(function(i, val) { return val*1-1 });
    }
});


     