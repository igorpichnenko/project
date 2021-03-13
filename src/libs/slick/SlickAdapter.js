import 'slick-carousel';

class SlickAdapter {
    constructor() {
      this.options = this.state();
    }
  
    state() {
      const options = {
        dots: true,
  waitForAnimate: false,
  nextArrow:
    '<button type="button" class="slick-next"><i class="slick-icon__right slick-icon material-icons">expand_more</i></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><i class="slick-icon__left slick-icon material-icons">expand_more</i></button>',
      };
  
      return options;
    }
  
    init(element) {
      element.slick(this.options);
    }
  }
  
  export { SlickAdapter };