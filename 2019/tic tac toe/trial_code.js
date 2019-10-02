let matrix = [
            'XXX',
            '-',
            '-'
        ];

function getAllLines(matrix) {
    let lines = [];
    lines.push(getHorisontalLines(matrix));
    lines.push(getVerticalLines(matrix));
}

function getHorisontalLines(matrix) {    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        let line = matrix[total_array];
            
        if(line === "XXX" || line === "OOO") {
            return line;
        }
    }
}

function getVerticalLines(matrix) {    
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        
        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            let line += matrix[internal_array][total_array];
            
            if(line === "XXX" || line === "OOO") {
                return line;
            }
        }
    }
}