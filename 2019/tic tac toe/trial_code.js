let matrix = [
            'XXX',
            '-',
            '-'
        ];

function getAllLines(matrix) {
    let lines = [];
    lines.push(getHorisontalLines(matrix));
    lines.push(getVerticalLines(matrix));
    lines.push(getDiagonalLines(matrix));
    return lines;
}

function getHorisontalLines(matrix) {    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        let line = matrix[total_array];
        
        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            line += matrix[total_array][internal_array];
            
            if(total_array == 2) {
                return line;
            }
        }
    }
}

function getVerticalLines(matrix) {    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        
        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            let line += matrix[internal_array][total_array];
            
            if(total_array == 2) {
                return line;
            }
        }
    }
}

function getDiagonalLines(matrix) {
    let line = [];
    let countdown = matrix.length;
    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        line += matrix[total_array][total_array];
    }
    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        countdown -= 1;
        line += matrix[total_array][countdown];
    }
    
    return line;
}