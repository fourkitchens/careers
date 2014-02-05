(function() {
  window.onload = function() {
    // Our customized copy of this script attached the grid visualization to the
    // <main> element instead of <body>.
    //
    // @see https://github.com/Team-Sass/Singularity/wiki/Creating-Grids#visualizing-your-grids
    // @see https://raw.github.com/Team-Sass/Singularity/1.x.x/templates/grid-toggle/grid.js
    var main = document.querySelectorAll('main[role="main"]');
    document.onkeypress = function(e) {
      if (e.keyCode == 103 || e.charCode == 103) {
        var dev = main[0].getAttribute('data-development-grid');
        if (dev === null || dev == 'hide') {
          main[0].setAttribute('data-development-grid', 'show');
        }
        else {
          main[0].setAttribute('data-development-grid', 'hide');
        }
      }
    }

    // Create debug message
    // var singularity_msg = document.createElement('span');
    //    singularity_msg.style.position = "fixed";
    //    singularity_msg.style.top = "1em";
    //    singularity_msg.style.left = "1em";
    //    singularity_msg.innerHTML = 'Toggle grid overlay with [g]</span>';

    // Display debug message
    var body = document.querySelectorAll('body');
    body[0].appendChild(singularity_msg);
  }
})();
