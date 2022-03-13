/********************************************************************************** 
* 
* There is an n x n 0-indexed grid with some artifacts buried in it.
* You are given the integer n and a 0-indexed 2D integer array artifacts describing
* the positions of the rectangular artifacts where artifacts[i] = [r1i, c1i, r2i, c2i]
* denotes that the ith artifact is buried in the subgrid where:
*   - (r1i, c1i) is the coordinate of the top-left cell of the ith artifact and
*   - (r2i, c2i) is the coordinate of the bottom-right cell of the ith artifact.
*
* You will excavate some cells of the grid and remove all the mud from them. 
* If the cell has a part of an artifact buried underneath, it will be uncovered.
* If all the parts of an artifact are uncovered, you can extract it.
*
* Given a 0-indexed 2D integer array dig where dig[i] = [ri, ci] indicates that
* you will excavate the cell (ri, ci), return the number of artifacts that you can extract.
*
* The test cases are generated such that:
*   - No two artifacts overlap.
*   - Each artifact only covers at most 4 cells.
*   - The entries of dig are unique.
*               
**********************************************************************************/

// T.C = O(dig + N^2), S.C = O(N^2)
const digArtifacts = (n, artifacts, dig) => {
    const grid = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let count = 0;
    
    for (const [row, col] of dig) {
        grid[row][col] = 1;
    }

    for (const artifact of artifacts) {
        if (canBeExtracted(grid, artifact)) count++;
    }
    
    return count;
};

const canBeExtracted = (grid, artifact) => {
    const [r1, c1, r2, c2] = artifact;
    
    for (let row = r1; row <= r2; row++) {
        for (let col = c1; col <= c2; col++) {
            if (!grid[row][col]) return false;
        }
    }
    
    return true;
}
