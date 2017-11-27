var init = function() {

var box = document.querySelector('.container').children[0],
    showPanelButtons = document.querySelectorAll('#show-buttons button'),
    panelClassName = 'show-front',

    onButtonClick = function( event ){
      box.classList.remove( panelClassName );
      panelClassName = event.target.className;
      box.classList.add( panelClassName );
    };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }

};

window.addEventListener( 'DOMContentLoaded', init, false);
