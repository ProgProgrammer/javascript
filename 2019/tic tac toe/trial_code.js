let clicks = 0;

let matrix = [
            'OOX',
            'OX-',
            'XOO'
        ];

function ticTacTooWin(matrix) {
    const lines = getAllLines(matrix);
    const isXWin = isSymbolWin(lines, 'X');
    const isOWin = isSymbolWin(lines, 'O');
    let result = getResult(isXWin, isOWin);
    return result;
}

function getResult(isXWin, isOWin) {
    clicks++;
    
    if (isXWin === "X") {
        const x = "X";
        return x;
    } else if (isOWin === 0) {
        const o = 0;
        return o;
    } else if (clicks === 9) {
        return "Ничья";
    }
}

function isSymbolWin(lines, symbol) {
    for (let line = 0; line < lines.length; line++) {

        for (let internal_line = 0; internal_line < lines.length; internal_line++) {
            let countSymbolsX = 0;
            let countSymbolsO = 0;

            for (let internal_internal_line = 0; internal_internal_line < lines.length; internal_internal_line++) {

                if (lines[line][internal_line][internal_internal_line] === 'X') {

                    if (countSymbolsX === lines.length - 1) {
                        const x = "X";
                        return x;
                    }
                    
                    countSymbolsX += 1;
                }

                if (lines[line][internal_line][internal_internal_line] === 'O') {

                    if (countSymbolsO === lines.length - 1) {
                        const o = 0;
                        return o;
                    }
                    
                    countSymbolsO += 1;
                }
            }
        }
    }
}

function getAllLines(matrix) {
    let lines = [];
    lines.push(getHorisontalLines(matrix));
    lines.push(getVerticalLines(matrix));
    lines.push(getDiagonalLines(matrix));
    return lines;
}

function getHorisontalLines(matrix) {
    let line = ['', '', ''];

    for (let total_array = 0; total_array < matrix.length; total_array++) {

        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            line[total_array] += matrix[total_array][internal_array];

            if (total_array == matrix.length - 1 && internal_array == matrix.length - 1) {
                return line;
            }
        }
    }
}

function getVerticalLines(matrix) {
    let line = ['', '', ''];

    for (let total_array = 0; total_array < matrix.length; total_array++) {

        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            line[internal_array] += matrix[total_array][internal_array];

            if (total_array == matrix.length - 1 && internal_array == matrix.length - 1) {
                return line;
            }
        }
    }
}

function getDiagonalLines(matrix) {
    let line = ['', ''];
    let countdown = matrix.length;

    for (let total_array = 0; total_array < matrix.length; total_array++) {
        line[0] += matrix[total_array][total_array];
    }

    for (let total_array = 0; total_array < matrix.length; total_array++) {
        countdown -= 1;
        line[1] += matrix[total_array][countdown];
    }

    return line;
}
