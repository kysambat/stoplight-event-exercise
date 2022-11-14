/*(function() {
  'use strict';

  // YOUR CODE HERE
})();
*/ // dont use outdated IIFE or something



let stopButton = document.querySelector('#stopButton')
let stopLight = document.querySelector('#stopLight')

let slowButton = document.querySelector('#slowButton')
let slowLight = document.querySelector('#slowLight')


let goButton = document.querySelector('#goButton')
let goLight = document.querySelector('#goLight')

stopButton.addEventListener('click', function() {
  stopLight.classList.toggle('stop')
  
})

slowButton.addEventListener('click', function() {
 slowLight.classList.toggle('slow')

})

goButton.addEventListener('click', function() {
  goLight.classList.toggle('go')
  
})


function addEventListener(button) {
  button.addEventListener('mouseenter', function() {
    console.log(`Entered ${button.textContent} button`)
  })

  button.addEventListener('mouseleave', function() {
    console.log(`Left ${button.textContent} button`)
  })
}



addEventListener(stopButton)
addEventListener(slowButton)
addEventListener(goButton)







