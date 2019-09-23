let matrix = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];

function getAllLines(matrix) {
    let lines;

    if (getHorizontalLines(matrix) === "X" || getHorizontalLines(matrix) === 0) {
        return getHorizontalLines(matrix);
    } else if (getVerticalLines(matrix) === "X" || getVerticalLines(matrix) === 0) {
        return getVerticalLines(matrix);
    } else if (getDiagonalLines(matrix) === "X" || getDiagonalLines(matrix) === 0) {
        return getDiagonalLines(matrix);
    }
}

function getHorizontalLines(matrix) {
    let array_letters = "";

    for (let i = 0; i < matrix.length; i++) {
        const part_array_of_strings = matrix[i];
        array_letters = "";

        for (let a = 0; a < part_array_of_strings.length; a++) {
            array_letters = array_letters + part_array_of_strings[a];
            console.log(array_letters);
            lines = array_letters;

            if (array_letters.length == part_array_of_strings.length) {
                if (isSymbolWin(lines, symbol) === "X" || isSymbolWin(lines, symbol) === 0) {
                    return isSymbolWin(lines, symbol);
                }
                array_letters = "";
            }
        }
    }
}

function getVerticalLines(matrix) {
    let array_letters = "";

    for (let i = 0; i < matrix.length; i++) {
        array_letters = "";

        for (let a = 0; a < matrix.length; a++) {
            const part_array_of_strings = matrix[a];
            array_letters = array_letters + part_array_of_strings[i];
            lines = array_letters;

            if (array_letters.length == part_array_of_strings.length) {
                if (isSymbolWin(lines, symbol) === "X" || isSymbolWin(lines, symbol) === 0) {
                    return isSymbolWin(lines, symbol);
                }
                array_letters = "";
            }
        }
    }
}

function getDiagonalLines(matrix) {
    let array_letters = "";
    let array_letters_right_left = "";
    let number_string_diagonal = matrix.length;

    for (let i = 0; i < matrix.length; i++) {
        const part_array_of_strings = matrix[i];
        number_string_diagonal--;
        array_letters = array_letters + part_array_of_strings[i];
        lines = array_letters;

        if (array_letters.length == part_array_of_strings.length) {
            if (isSymbolWin(lines, symbol) === "X" || isSymbolWin(lines, symbol) === 0) {
                return isSymbolWin(lines, symbol);
            }
            array_letters = "";
        }

        array_letters_right_left = array_letters_right_left + part_array_of_strings[number_string_diagonal];
        lines = array_letters_right_left;

        if (array_letters_right_left.length == part_array_of_strings.length) {
            if (isSymbolWin(lines, symbol) === "X" || isSymbolWin(lines, symbol) === 0) {
                return isSymbolWin(lines, symbol);
            }
            array_letters_right_left = "";
        }
    }
}

function isSymbolWin(lines, symbol) {
    if (lines === "XXX") {
        const x = "X";
        return x;
    } else if (lines === "OOO") {
        const o = 0;
        return o;
    }
}