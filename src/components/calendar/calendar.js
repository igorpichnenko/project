import 'air-datepicker';

$('.datepicker-here').datepicker({
    range: true,
    multipleDates: '2',
		multipleDatesSeparator: ' ',
    startDate: new Date(),
    onSelect(formattedDate) {
			$.dates = formattedDate;
		},
		showButtonPanel: false,
    todayButton: true,
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
    today: 'Очистить',
    clear: 'Применить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1}
    
})


    
