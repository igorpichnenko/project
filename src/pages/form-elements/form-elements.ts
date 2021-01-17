import '../../components/calendar/calendar.ts'
import '../../scss/main.scss';
import './form-elements.scss';
import '../../pixel.js'
import '../../components/dropdown/dropdown.ts'
import '../../components/range-slider/range-slider.ts'
import '../../components/pagination/pagination.ts'
import '../../components/checkbox/checkbox.ts'
import '../../components/like/like.ts'
import IMask from 'imask';






let dateMask = IMask(
  <HTMLElement>document.querySelector('.input_mask'),
  {
    mask: Date,
    min: new Date(1990, 0, 1),
    max: new Date(2020, 0, 1),
    lazy: true
  });



