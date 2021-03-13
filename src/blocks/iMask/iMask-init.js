import { InputMask } from './InputMask';

const $wrappers = $('.input_mask');

$wrappers.each((_index, element) => {
new InputMask(element);
});
