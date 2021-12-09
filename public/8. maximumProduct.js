
var maximumSubArray = function(array) {
    var ans = 1;
    var sum = 1;


    for (var i = 0; i < array.length; i++) {

        ans = Math.max(0, ans * array[i]);
        sum = Math.max(sum, ans);
 
    }

    return sum;

};


function maximumProduct(array)
{
    var hmatrix=[];
    var vmatrix=[];
    var max=0
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length;j++)
        {
            hmatrix.push(array[i][j]);
        }
        // for(let i=0;i<hmatrix.length;i++)
        // {
        //     console.log(hmatrix[i])
        // }
        if(max<maximumSubArray(hmatrix))
        {
            max=maximumSubArray(hmatrix)
            var tmin=10000000;
            for(let i=0;i<hmatrix.length;i++)
            {
                if(hmatrix[i]<tmin)
                {
                    tmin=hmatrix[i];
                }
            }
            max=max/tmin;
            // console.log(tmin)
        }
        hmatrix=[]
    }

    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length;j++)
        {
            vmatrix.push(array[j][i]);
        }
        // for(let i=0;i<hmatrix.length;i++)
        // {
        //     console.log(hmatrix[i])
        // }
        if(max<maximumSubArray(vmatrix))
        {
            max=maximumSubArray(vmatrix)
            var tmin=10000000;
            for(let i=0;i<vmatrix.length;i++)
            {
                if(vmatrix[i]<tmin)
                {
                    tmin=vmatrix[i];
                }
            }
            max=max/tmin;
        }
        vmatrix=[]
    }
    console.log(max)

}
const array=[
[ 1, 2, 3, 4, 5] ,

[ 1, 25, 3, 4, 5] ,

[ 1, 20, 3, 4, 5] ,

[ 1, 20, 3, 4, 5] ,

[ 1, 4, 3, 4, 5] 
]
console.log("Maximum ajacent product is "+maximumProduct(array))