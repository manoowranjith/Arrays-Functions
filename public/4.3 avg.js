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

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156]; 
console.log('Average is : '+avg(mixedArr))