import '../../../node_modules/color-range-slider/dist/slider.js'
//import slider from 'color-range-slider'

$('.js-range-slider').colorSlider({
  fromTo: true,
  max: 15000,
  from: 5000,
  to: 10000,
  isColor: false,
  isScale: false,
  isLabel: false,
  color: '#6fcf97',
  gradient: '#66d2ea',
  gradientDeg: '180',
})