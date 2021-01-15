import 'air-datepicker';
import 'air-datepicker/src/sass/datepicker.scss';


$('.datepicker-dabl').datepicker({
  

    range: true,
    multipleDates: '2',
    multipleDatesSeparator: " - ",
    clearButton: true,
    prevHtml: '<i class="datepicker--icon material-icons">arrow_back</i>',
    nextHtml: '<i class="datepicker--icon material-icons">arrow_forwards</i>',
    navTitles: {
                days: 'MM  <i>yyyy</i>',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2'
            },
            
  language:{days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1},
 
   onSelect: function (fd: any, d: any, picker: any) { 
    $(".datepicker-start").val(fd.split("-")[0],[1]);
  $(".datepicker-end").val(fd.split("-")[1]);
  }
  
  
})

$('.datepicker-new').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    multipleDates: '2',
    prevHtml: '<i class="datepicker--icon material-icons">arrow_back</i>',
    nextHtml: '<i class="datepicker--icon material-icons">arrow_forwards</i>',
  navTitles: {
                days: 'MM  <i>yyyy</i>',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2'
            },
            
   clearButton: true,
    language:{days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    clear: 'Очистить',
    dateFormat: 'dd.mm',
    timeFormat: 'hh:ii',
    firstDay: 1},
    
})

/*

let calendar = document.querySelectorAll('.datepicker'); 
 calendar.forEach(function (item) {
   
   item.querySelector('.datepicker--buttons').insertAdjacentHTML('beforeend', `
        <span class="datepicker__button">Применить
        </span>`)
        
        let btn = item.querySelector('.datepicker__button')
       
      btn.addEventListener('click', function() {
    item.classList.toggle('ac')
 

})
    let calen = document.querySelector('.box')
     
     let inp = calen.querySelector('.dat')
  
  inp.addEventListener('click', function(){
    
    item.classList.toggle('ac')
    
  })
 })
   
   */