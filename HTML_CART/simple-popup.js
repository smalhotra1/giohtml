var popupEl = document.getElementById('popup'); 

// As a native plugin
var popup = new Popup(popupEl, {
  width: 400,
  height: 300
});

// As a jQuery plugin
// var popup = $('#popup').popup({
//     width: 400,
//     height: 300
// });

var open = document.getElementById('open');

open.onclick = function() {
  popup.open();
};