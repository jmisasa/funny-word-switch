funny-word-switch
-----------------------
### Demo
* [live demo at jsfiddle](http://jsfiddle.net/40Lt90ne/)
* [demo.html](demo.html)

### Usage

    <h1>Find cheap flights to <span id="city"></span>.</h1>

    <script>
    var cities = [
      'London',
      'Berlin',
      'Madrid',
      'Copenhague',
      'Rome',
      'Vienna',
    ];

    $(document).ready(function() {
      $('#city').funnyWordSwitch({
        words: cities,
        /*
        selectionColor: '#FFF',
        selectionBgColor: '#3399FF',
        speed: 100
        */
      });
    });
    </script>
