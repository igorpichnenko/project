import 'paginationjs';


class PaginationAdapter{

constructor(){

    this.options = this.state()
}


state(){

    const sources = (function load() {
        const result = [];
    
        for (let i = 1; i < 150; i++) {
        result.push(i);
        }
    
        return result;
    }());

    const options = {
        activeClassName: 'pagination__link_active',
        disableClassName: 'disabled',
        ulClassName: 'pagination__list',
        prevText: '<i class="pagination__icon material-icons">arrow_back</i>',
        nextText: '<i class="pagination__icon material-icons">arrow_forward</i>',
        pageRange: 1,
        autoHideNext: true,
        autoHidePrevious: true,
        dataSource: sources,
};

return options
}

init(element){

    element.pagination(this.options);
}
}

export { PaginationAdapter }