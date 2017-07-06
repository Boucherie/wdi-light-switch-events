
document.addEventListener('DOMContentLoaded', function() {

  var body = document.querySelector('body');
  //var light = document.querySelector('.light');
  var lightSwitch = document.querySelector('button');

  var message = document.querySelector('h1');

  lightSwitch.addEventListener('click', function() {
    if (body.classList.contains('light')) {
      body.classList.remove('light');
      body.classList.add('dark');
      message.innerText = ('Hey, who turned off the lights?')
      console.log('Hey, who turned off the lights?');
    };
  });

});
