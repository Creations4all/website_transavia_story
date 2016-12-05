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