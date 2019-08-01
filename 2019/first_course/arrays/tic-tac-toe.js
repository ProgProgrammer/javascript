let symbols = ['X0X', '0X0', '0X0']; /* '0XX'
                                        '0XX'
                                        'X00' */

gameResult(symbols);

if(gameResult(symbols) === undefined) {
  document.write('Ничья');
} else if(gameResult(symbols) === 'X') {
  document.write('X');
} else if(gameResult(symbols) === '0') {
  document.write('Ничья');
}

function gameResult(symbols) {
  let i2 = -1; //необходимо для прогона одной и той же части строки каждого свойства массива. Так как первое значение каждого свойства массива начинается с 0, а операция i2++ сразу сделает переменную i2 равной 0, то первоначальное значение i2 = -1. Переменная записана до цикла для того, чтобы при каждом прогоне цикла ее значение не обнулялось.

	for(let i = 0; i < symbols.length; i++) {

  	if (symbols[i] === '000') {
    	return '0';
    } else if (symbols[i] === 'XXX') {
    	return 'X';
    }

    let symbol_vertical_0 = 1;
    let symbol_vertical_x = 1;
    i2++; //при каждом прогоне цикла переменная i2 увеличивается на 1. Переменная записана до следующего цикла для того, чтобы при каждом прогоне цикла ее значение не обнулялось.

    for(let i = 0; i < symbols.length; i++) {
      const string_of_letters = symbols[i]; //присвоение значений каждого свойства 																								массива переменной при каждом прогоне 																							цикла.

      if (string_of_letters[i2] === '0') { //сравнение одного и того же порядкового 																						 значения каждого свойства массива с 																								 определенным значением при  																									 			 прогоне цикла.
        symbol_vertical_0++;
        const symbol_one = symbol_vertical_0 - 1;

        if (symbol_one === 3) {
          return '0';
        }
      } else if (string_of_letters[i2] === 'X') {
        symbol_vertical_x++;
        const symbol_two = symbol_vertical_x - 1;

        if (symbol_two === 3) {
          return 'X';
        }
      }
    }
  }

  return gameAddition();
}

function gameAddition() {
  let symbols_diagonal_zero_one = 1;
  let symbols_diagonal_zero_two = 1;
  let symbols_diagonal_cross_one = 1;
  let symbols_diagonal_cross_two = 1;

  for (let i = 0; i < symbols.length; i++) {
    const string_of_letters_diagonal = symbols[i];
      
    if (i == 0 && symbols[0] && string_of_letters_diagonal[0] === '0' ||
    		i == 1 && symbols[1] && string_of_letters_diagonal[1] === '0' ||
    		i == 2 && symbols[2] && string_of_letters_diagonal[2] === '0') {
      symbols_diagonal_zero_one++;
      const characters_diagonal = symbols_diagonal_zero_one - 1;

      if (characters_diagonal === 3) {
        return '0';
      }
    } else if (i == 0 && symbols[0] && string_of_letters_diagonal[0] === 'X' ||
               i == 1 && symbols[1] && string_of_letters_diagonal[1] === 'X' ||
               i == 2 && symbols[2] && string_of_letters_diagonal[2] === 'X') {
      symbols_diagonal_cross_one++;
      const characters_diagonal = symbols_diagonal_cross_one - 1;

      if (characters_diagonal === 3) {
        return 'X';
      }
    }

    if (i == 0 && symbols[0] && string_of_letters_diagonal[2] === '0' ||
               i == 1 && symbols[1] && string_of_letters_diagonal[1] === '0' ||
               i == 2 && symbols[2] && string_of_letters_diagonal[0] === '0') {
      symbols_diagonal_zero_two++;
      const characters_diagonal = symbols_diagonal_zero_two - 1;

      if (characters_diagonal === 3) {
        return '0';
      }
    } else if (i == 0 && symbols[0] && string_of_letters_diagonal[2] === 'X' ||
               i == 1 && symbols[1] && string_of_letters_diagonal[1] === 'X' ||
               i == 2 && symbols[2] && string_of_letters_diagonal[0] === 'X') {
      symbols_diagonal_cross_two++;
      const characters_diagonal = symbols_diagonal_cross_two - 1;

      if (characters_diagonal === 3) {
        return 'X';
      }
    }
  }
}

if(gameResult(['000', 'XX0', '0XX']) == '0' &&
   gameResult(['00X', '0X0', 'X00']) == 'X' &&
   gameResult(['0XX', '0XX', '00X']) == '0') {
    console.log('OK');
} else {
  console.log('NO OK');
}