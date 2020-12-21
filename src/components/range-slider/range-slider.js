import 'ion-rangeslider';
import '../../components/range-slider/RangeSlider.scss';


    let $range = $(".range-slider");
    let $inputFrom = $("#out");
    let $inputTo = $("#out2");
    let instance;
    let min = 0;
    let max = 1500;
    let from = 5000;
    let to = 10000;
    
    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 15000,
        from: 5000,
        to: 10000,
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
        $inputTo.prop("value",to + "₽");
    }
