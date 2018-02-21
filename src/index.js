/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
     let k = 3,
          m,
          count = 0;

     preferences.forEach(function(item, i, arr) {
          m = item;
          for (let j=1; j < k;j++){
               m = preferences[m-1];
          }

          if (i==(m-1)){
               count++;
          }
     });

     count = Math.floor(count/3);
     return count;
};
