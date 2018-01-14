// bron fade in fade out: http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
// bron dropdown: http://jsfiddle.net/alistairjcbrown/wJTgA/


var hidden_el  = document.getElementsByClassName("hidden-content"),
    control_el = document.getElementsByClassName("toggle-content");

(function(document) {
    "use strict";
     
    if (hidden_el.length < 1 || control_el.length < 1) {
        return;
    }

    // Get the elements
    hidden_el  = hidden_el[0];
    control_el = control_el[0];

    control_el.onclick = function() {

        var element_classes = (" "+hidden_el.className+" ").replace(/[\n\t\r]/g, " "),
            remove_class    = "slide-down_genre",
            add_class       = "slide-up_genre",
            is_showing      = element_classes.indexOf(" "+remove_class+" ") > -1;

        if ( ! is_showing) {
            // Switch variable values
            remove_class = [add_class, add_class = remove_class][0];
        }
        // Remove the previous class (if present) and add the new class
        hidden_el.className = (element_classes.replace(" "+remove_class+" ", "") + " "+add_class+" ").trim();
        return false;
    };
})(document);

var hidden_el_tags  = document.getElementsByClassName("hidden-content_tags"),
    control_el_tags = document.getElementsByClassName("toggle-content_tags");

(function(document) {
    "use strict";
 
    if (hidden_el_tags.length < 1 || control_el_tags.length < 1) {
        return;
    }

    // Get the elements
    hidden_el_tags  = hidden_el_tags[0];
    control_el_tags = control_el_tags[0];

    control_el_tags.onclick = function() {

        var element_classes = (" "+hidden_el_tags.className+" ").replace(/[\n\t\r]/g, " "),
            remove_class    = "slide-down_tags",
            add_class       = "slide-up_tags",
            is_showing      = element_classes.indexOf(" "+remove_class+" ") > -1;

        if ( ! is_showing) {
            // Switch variable values
            remove_class = [add_class, add_class = remove_class][0];
        }
        // Remove the previous class (if present) and add the new class
        hidden_el_tags.className = (element_classes.replace(" "+remove_class+" ", "") + " "+add_class+" ").trim();
        return false;
    };
})(document);

function classToggle() {
    this.classList.toggle('active');
}
control_el.addEventListener('click', classToggle);

function classToggleTags() {
    this.classList.toggle('active');
}
control_el_tags.addEventListener('click', classToggleTags);


// like and bookmark button
var btnLiked = document.querySelectorAll('.like');

for (var i = 0; i < btnLiked.length; i++) {
    btnLiked[i].addEventListener('click', function(event) {
         this.classList.toggle('liked');
    });
}

var btnBookmark = document.querySelectorAll('.bookmark_none');

for (var i = 0; i < btnBookmark.length; i++) {
    btnBookmark[i].addEventListener('click', function(event) {
         this.classList.toggle('bookmark');
    });
}


//Fade in Fade out filter
function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.classList.add('is-hidden');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el, display){
  if (el.classList.contains('is-hidden')){
    el.classList.remove('is-hidden');
  }
  el.style.opacity = 0;

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

var btnSubmit = document.getElementById('submit');
var btnFilter = document.getElementById('close');
var btn = document.getElementById('filter_button');
var el = document.getElementById('mobile_filter');

btn.addEventListener('click', function(e){
  if(el.classList.contains('is-hidden')){
    fadeIn(el);
  }
  else {
    fadeOut(el);
  }
});

btnFilter.addEventListener('click', function(e){
    fadeOut(el);
});
btnSubmit.addEventListener('click', function(e){
    fadeOut(el);
});
