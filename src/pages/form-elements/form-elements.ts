import '../../components/calendar/calendar';
import '../../scss/main.scss';
import './form-elements.scss';
// import '../../pixel.js'
import '../../components/dropdown/dropdown-init';
import '../../components/range-slider/range-slider';
import '../../components/pagination/pagination';
import '../../components/checkbox-list/checkbox-list';
import '../../components/like/like';
import IMask from 'imask';

IMask(<HTMLElement>document.querySelector('.input_mask'), {
  mask: Date,
  min: new Date(1990, 0, 1),
  max: new Date(2020, 0, 1),
  lazy: true,
});
