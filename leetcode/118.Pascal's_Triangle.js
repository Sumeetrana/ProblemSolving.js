/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var triangle = [];
  if (numRows === 0) {
    return triangle;
  }
  var first_row = [1];
  triangle.push(first_row);
  for (var i = 1; i < numRows; i++) {
    var prev_row = triangle[i - 1];
    var newRow = [];
    newRow.push(1);
    for (var j = 1; j < i; j++) {
      newRow.push(prev_row[j - 1] + prev_row[j]);
    }
    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle;
};

console.log(generate(6));
