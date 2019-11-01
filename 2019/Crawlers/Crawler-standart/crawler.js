const inputs_text = document.getElementsByClassName("input-text-slider");
const inputs_range = document.getElementsByClassName("input-range-slider");
let objectSymbols = { };

function choiceSymbole(order_number, number) {
		if (order_number == inputs_range.length - 1 && number == 1) {
       return "год";
    } else if (order_number == inputs_range.length - 1 && number < 5) {
       return "года";
    } else if (order_number == inputs_range.length - 1) {
    	 return "лет";
    }
    
    if (order_number == inputs_range.length - 2) {
       return "P";
    }
}

function formatSymbols(ranges) {    
    return Number(ranges).toLocaleString('ru-RU');
}

for (let input_enter in inputs_range) {
		let symbol_input;

		if (input_enter == inputs_range.length - 2) {
    	 symbol_input = "Р";
    } else {
    	 symbol_input = "год";
    }
    
    objectSymbols.range = inputs_range[input_enter].value;

    inputs_text[input_enter].value = formatSymbols(objectSymbols.range) + " " + choiceSymbole(input_enter, inputs_range[input_enter].value);
    
    inputs_range[input_enter].oninput = function() {
    		objectSymbols.range = inputs_range[input_enter].value;
        inputs_text[input_enter].value = formatSymbols(objectSymbols.range) + " " + choiceSymbole(input_enter, inputs_range[input_enter].value);
    }
}