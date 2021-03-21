import { InputMask } from './InputMask';

const $wrappers = $('.input_mask');

$wrappers.each((_, element) => {
  new InputMask(element);
});
