import 'ion-rangeslider';
import '../../components/range-slider/RangeSlider.scss';


    let $range = $(".range-slider");
    let $inputFrom = $(".range-start");
    let $inputTo = $(".range-end");
    let instance;
    let min = 0;
    let max = 1500;
    let from = 5000;
    let to = 10000;
    
    $range.ionRangeSlider({
        type: "double",
        min: 0,
      //  values_separator: '-',
        max: 15000,
        from: 5000,
        //format: wNumb({
      //      thousand: ' '
     //   }),
        to: 10000,
       // step: 10,
        prefix: "₽",
        hide_min_max: true,
	     	hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from +"₽");
        $inputTo.prop("value",'-' +' '+to +"₽");
    }


/*jQuery(document).ready(function(){
 var nonLinearSlider = document.getElementById('r-slider');

noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: 'tap',
    step:100,    
    start: [5000, 10000],
    range: {
        'min': [0],
        'max': [15000], },

    format: wNumb({
            decimals: 0,
            thousand: ' '
        })
    
})*/