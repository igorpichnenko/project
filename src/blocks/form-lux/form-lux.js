import { Price } from './Price';

$('.js-price').each((_, element) => {
  new Price(element);
});
