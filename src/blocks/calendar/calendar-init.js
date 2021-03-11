import { Calendar } from "./Calendar"


$('.js-datepicker-container').each((index, element) => {
    new Calendar($(element))
  });