let matrix = [
            ['X', 'X', 'X'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];

function getHorisontalLines(matrix) {
    for (let total_array = 0; total_array < matrix.length; total_array++) {
        let line = "";
        
        for (let internal_array = 0; internal_array < matrix.length; internal_array++) {
            line += matrix[total_array][internal_array];
            
            if(line === "XXX" || line === "OOO") {
                return line;
            }
        }
    }
}