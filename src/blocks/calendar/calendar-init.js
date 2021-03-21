import { Calendar } from './Calendar';

$('.js-datepicker-container').each((_, element) => {
  new Calendar($(element));
});
