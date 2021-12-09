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
const items = [ 

    'bread', 
    
    'jam', 
    
    'milk', 
    
    'egg', 
    
    'flour', 
    
    'oil', 
    
    'rice', 
    
    'coffee powder', 
    
    'sugar', 
    
    'salt', 
    
    'egg', 
    
    'flour' 
    
]; 
console.log(uniqueArrays(items))