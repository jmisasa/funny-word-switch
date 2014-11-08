/**!
 * funny-word-switch
 *
 * Released under the MIT license (http://choosealicense.com/licenses/mit/)
 *
 * Copyright (c) 2014 Jose M. Isasa <jm@isacan.com>
 */
(function($, w) {
  var opts,
      curWord,
      curWordIndex = 0,
      curCharIndex = 0,
      timerWrite,
      timerSelect,
      $target;

  $.fn.funnyWordSwitch = function(options) {
    opts = $.extend({}, $.fn.funnyWordSwitch.defaults, options);

    if(!$.isArray(opts.words))
      throw "[funnyWordSwitch] Words must come in an array.";

    $target = $(this);

    switchWord();
  };

  function switchWord() {
    curCharIndex = 0;
    $target.html('');

    if(curWordIndex === opts.words.length)
      curWordIndex = 0;

    curWord = opts.words[curWordIndex++];

    timerWrite = w.setInterval(function() {
      $target.html($target.html() + '<span>' + curWord[curCharIndex++] + '</span>');

      if(curCharIndex === curWord.length) {
        w.clearInterval(timerWrite);
        w.setTimeout(function() {
          timerSelect = w.setInterval(function() {
            $('span:eq(' + curCharIndex-- + ')', $target)
              .css('background-color', opts.selectionBgColor)
              .css('color', opts.selectionColor)

            if(curCharIndex < 0) {
              w.clearInterval(timerSelect);
              w.setTimeout(switchWord, opts.speed*2);
            }
          }, opts.speed/4);
        }, opts.speed*10);
      }
    }, opts.speed);
  }

  $.fn.funnyWordSwitch.defaults = {
    selectionColor: '#FFF',
    selectionBgColor: '#3399FF',
    speed: 100
  };
})(jQuery, window);
