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
    let line = ['', '', ''];
    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        
        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            line[total_array] += matrix[total_array][internal_array];
            
            if(total_array == matrix.length-1 && internal_array == matrix.length-1) {
                return line;
            }
        }
    }
}

function getVerticalLines(matrix) {    
    let line = ['', '', ''];
    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        
        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            line[internal_array] += matrix[internal_array][total_array];
            
            if(total_array == matrix.length-1 && internal_array == matrix.length-1) {
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