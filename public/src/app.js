function greatestOfTwoNumbers(x,y)
{
    if(x>y)
    {
        return x;
    }

    else{
        return y;
    }
}

function findScaryWord(words)
{
    // console.log(words.length)
    var maximum=0;
    for(let i=0;i<words.length;i++)
    {
        if(maximum<words[i].length)
        {
            maximum=words[i].length
        }
    }
    for(let i=0;i<words.length;i++)
    {
        if(maximum==words[i].length)
        {
            return words[i]
        }
    }

}

function netPrice(prices)
{
    var sum=0
    for(let i=0;i<prices.length;i++)
    {
        sum+=prices[i]
    }
    return sum;
}

function sumOfArray(array)
{
    var sum=0
    for(let i=0;i<array.length;i++)
    {
        if(typeof array[i] === 'number')
        {
            sum+=array[i]
        }
        else if(typeof array[i] === 'boolean')
        {
            if(array[i])
            {
                sum+=1
            }
        }
        else if(typeof array[i] === 'string')
        {
            sum+=array[i].length
        }
    }
    return sum

}

function midPoint(prices)
{
    var sum=0
    for(let i=0;i<prices.length;i++)
    {
        sum+=prices[i]
    }
    return sum/prices.length;
}

function midPointOfLevels(levels)
{
    var sum=0
    for(let i=0;i<levels.length;i++)
    {
        sum+=levels[i]
    }
    return sum/levels.length;
}

function averageWordLength(items)
{
    var count=0;
    for(let i=0;i<items.length;i++)
    {
        count+=items[i].length
    }
    return count/items.length
}

function avg(array)
{
    var sum=0
    for(let i=0;i<array.length;i++)
    {
        if(typeof array[i] === 'number')
        {
            sum+=array[i]
        }
        else if(typeof array[i] === 'boolean')
        {
            if(array[i])
            {
                sum+=1
            }
        }
        else if(typeof array[i] === 'string')
        {
            sum+=array[i].length
        }
    }
    return sum/array.length

}

function uniqueArrays(items)
{
    var uniqueArray=[]
    for(let i=0;i<(items.length)-1;i++)
    {
        var count=1;
        for(let j=i+1;j<items.length;j++)
        {
            if(items[i]==items[j] && items[i]!="")
            {
                items[j]=""
                count+=1;
            }
        }
        if(count==1 && items[i]!="")
        {
            // console.log(items[i]);
            uniqueArray.push(items[i])
        }
    // console.log(items[i])
    }
    return uniqueArray;
}

function searchElement(words,k)
{
    for(let i=0;i<words.length;i++)
    {
        if(words[i]==k)
        {
            return true;
        }
    }
    return false;
}

function howManyTimesElementRepeated(words,k)
{
    var count=0;
    for(let i=0;i<words.length;i++)
    {
        if(words[i]==k)
        {
            count++;
        }
    }
    return count;
}

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
   return max

}

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