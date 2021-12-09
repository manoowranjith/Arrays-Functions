function midPointOfLevels(levels)
{
    var sum=0
    for(let i=0;i<levels.length;i++)
    {
        sum+=levels[i]
    }
    return sum/levels.length;
}

const levels = [22, 16, 9, 10, 7, 14, 11, 9]; 
console.log('Mid Point of Level :'+midPointOfLevels(levels))