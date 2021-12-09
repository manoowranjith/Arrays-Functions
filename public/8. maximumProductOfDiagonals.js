function maximumProductOfDiagonals(array)
{
    var matrix=[]
    var matrix1=[]
    var great=1
    var great1=1

    for(let i=0;i<array.length;i++)
    {
        matrix.push(array[i][i]);
    }
    matrix.sort(function(a, b) {
        return a - b;
      });
    for(let i=0;i<4;i++)
    {
        great*=matrix[matrix.length-1-i];
    }


    for(let i=array.length-1;i>=0;i--)
    {
        matrix1.push(array[i][array.length-1-i]);
    }

    matrix1.sort(function(a, b) {
        return a - b;
      });
      
    for(let i=0;i<4;i++)
    {
        great1*=matrix1[matrix1.length-1-i];
    }
    if(great>great1)
    {
        return great
    }
    return great1
}
const array=[
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75], 

    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87], 
    
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71], 
    
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24], 
    
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92], 
    
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75], 
    
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38], 
    
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63], 
    
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17], 
    
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45] 
]
console.log('Maximum diagonal product: '+maximumProductOfDiagonals(array))