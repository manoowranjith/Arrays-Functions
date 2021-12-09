function averageWordLength(items)
{
    var count=0;
    for(let i=0;i<items.length;i++)
    {
        count+=items[i].length
    }
    return count/items.length
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
    
    'salt' 
    
    ]; 
    console.log("Average Word Length is : "+averageWordLength(items))
