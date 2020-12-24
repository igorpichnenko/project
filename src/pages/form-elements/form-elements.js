import '../../scss/main.scss';
import './form-elements.scss';
import '../../components/dropdown/dropdown.js'
import '../../components/range-slider/range-slider.js'
import '../../components/pagination/paginationjs.js'
import '../../components/checkbox/checkbox.js'
import '../../components/like/like.js'
import '../../components/input/input.js'
import '../../components/calendar/calendar.js'
import '../../../node_modules/just-validate/dist/js/just-validate.js';



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

validateForms('.form-mask', { email: { required: true, email: true }, fio: { required: true }, tel: { required: true } });