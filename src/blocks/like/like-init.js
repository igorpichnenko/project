import { Like } from './Like';

document.querySelectorAll('.js-like').forEach((like) => {
  new Like(like);
});
