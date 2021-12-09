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
const words = [ 

    'door', 
    
    'window', 
    
    'ceiling', 
    
    'roof', 
    
    'plinth', 
    
    'tiles', 
    
    'ceiling', 
    
    'flooring' 
    
    ]; 
    var k='roof'
    if(searchElement(words,k))
    {
        console.log(k+' is found');
    }
    else{
        console.log(k+' is not found');
    }