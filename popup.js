let changeColor = document.getElementById('changeColor');
let toggleButton = document.getElementById('toggle');
let toggleClasses = toggleButton.classList;

let toggleIsOn = function() {
  toggleClasses.add('toggle-on');
  toggleClasses.remove('toggle-off');
  toggleButton.innerHTML = 'Show me the lies';
};

let toggleIsOff = function() {
  toggleClasses.add('toggle-off');
  toggleClasses.remove('toggle-on');
  toggleButton.innerHTML = 'Show me the truths';
};

// pseudocode

