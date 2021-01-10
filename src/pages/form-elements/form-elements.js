import '../../components/calendar/calendar.js'
import '../../scss/main.scss';
import './form-elements.scss';
import '../../pixel.js'
import '../../components/dropdown/dropdown.js'
import '../../components/range-slider/range-slider.js'
import '../../components/pagination/pagination.js'
import '../../components/checkbox/checkbox.js'
import '../../components/like/like.js'
import '../../../node_modules/just-validate/dist/js/just-validate.js';

import IMask from 'imask';


let dateMask = IMask(
  document.querySelector('.input_mask'),
  {
    mask: Date,
    min: new Date(1990, 0, 1),
    max: new Date(2020, 0, 1),
    lazy: true
  });




// validate

function validateForms(selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {

            let formData = new FormData(form);

            fetch("mail.php", {
                method: "POST",
                body: formData
            })
            .then(function(data) {
                alert('Спасибо за подписку!');
                form.reset();
            });
        }
    });
}

validateForms('.column-one__form-mask', { email: { required: true, email: true } });



