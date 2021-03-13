import { PaginationAdapter } from '../../libs/pagination/PaginationAdapter';

class Pagination {
  constructor(element) {
    this.adapter = new PaginationAdapter();
    this.element = element;
    this.init();
  }

  init() {
    this.adapter.init(this.element);
  }
}

export { Pagination };
