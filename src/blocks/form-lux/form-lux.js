import { Price } from './Price';

$('.js-price').each((index, element) => {
  new Price(element);
});
