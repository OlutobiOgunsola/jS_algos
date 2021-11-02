/**
 *  The N-Queens problem requires you place queens in an MXM matrix, where no queen
 *  attacks the other
 *  [
 *  [0,0,1,0],
 *  [1,0,0,0],
 *  [0,0,0,1],
 *  [0,1,0,0]
 * ]
 */

var validateCell = function(cell) {
    return cell === 1
}

var validateMultipleCells = function(...cells) {
    let cellArr = [...cells];
    let localCellsAreValid = true;
    cellArr.forEach(cell => {
        if(validateCell(cell)) {
            localCellsAreValid = false;
        }

        return;
    })
    return localCellsAreValid;
}

var checkCellValidOnBoard = function(matrix, cell) {
    let cellCol = cell[0], cellRow = cell[1];
    let cellValid=true;
    let depth=0, inverseDepth = 0, limit = matrix.length;

    while (depth < limit) {

        // check cell row is valid

        if(depth === cellRow) {
            matrix[depth].forEach((element,_idx) => (_idx != cellCol && element === 1) ? cellValid = false : null); // if there is any element in matrix row, cell is invalid
        } else {
            // check cell column is valid
            let concreteMatrix=matrix[depth];
            validateCell(concreteMatrix[cellCol]) ? cellValid = false : null; // if there is any other element in matrix row, cell is invalid

            if(cellRow === cellCol) { // checks diagonals if cell is described by a square
                validateCell(concreteMatrix[depth]) ? cellValid = false : null;
                validateCell(concreteMatrix[concreteMatrix.length - depth - 1]) ? cellValid = false : null
            } else {

                /**
                 *  Jump to cell row
                 *  Jump to cell Column
                 *  Recursively span upwards row by row, fanning out cells to be validated along diagonal
                 *  If cell index is beyond matrix limits, diagonal is completely iterated over and we pass null as index (otherwise negative indexing will feed the validator false data)
                 */

                let cellRowLocal = cellRow - inverseDepth; // index of row above cell row
                while(cellRowLocal > -1) {
                    // check the two cells that are neighbours above, touching at the edges
                    let concreteMatrix = matrix[cellRowLocal];
                    let concreteIndex = cellCol - inverseDepth;
                    let valid=validateMultipleCells(concreteMatrix[ concreteIndex > 0 ? concreteIndex : null],concreteMatrix[ cellCol+inverseDepth<concreteMatrix.length ? cellCol+inverseDepth : null]);
                    if(!valid) {
                        cellValid = false;
                        return cellValid;
                    }
                    inverseDepth++;
                    cellRowLocal--;
                }
            }
        }

        depth++;
    }

    return cellValid;
}

var generateMatrixRow = function (length=0, elem = 0) {
    let row = [];
    while(length) {
        let newRow = [...row];
        newRow.push(elem);
        row = newRow;
        length--;
    }

    return row;
}

var generateMatrix = function (mDimensions = [0,0]) {
    let mDepth = mDimensions[1], mWidth = mDimensions[0];
    let matrix = [];
    while(mDepth) {
        let row = generateMatrixRow(mWidth);
        let newMatrix = [...matrix];
        newMatrix.push(row);
        matrix = newMatrix;
        mDepth--;
    }

    return matrix;
}

var nQueens = function (numQueens, mDimensions) {
    let matrix = generateMatrix(mDimensions), safeCells = [];

    //recursively check each cell for validity
    let currRow = 0;
    while(currRow < matrix.length) {
        let currColumn = 0;
        let concreteMatrix = matrix[currRow];

        while(currColumn < concreteMatrix.length) {
            if(!checkCellValidOnBoard(matrix, [currColumn, currRow])) {
                // cell is invalid. do nothing
                currColumn++;
            } else {
                concreteMatrix[currColumn] = 1;
                safeCells.push([currColumn, currRow]);
                currColumn++
            }
        }
        currRow++;
    }
    console.log(safeCells.length)
    return safeCells;
}

console.log(nQueens(3,[150,120]))