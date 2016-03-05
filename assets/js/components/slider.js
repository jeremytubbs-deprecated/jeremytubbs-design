var lory = require('lory.js').lory

var multislides = document.querySelector('.js_multislides')

if (multislides) {
  lory(multislides, {
    infinite: 4,
    slidesToScroll: 4
  })
}
