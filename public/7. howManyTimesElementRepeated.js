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
const words = [ 

    'machine', 
    
    'matter', 
    
    'subset', 
    
    'trouble', 
    
    'starting', 
    
    'matter', 
    
    'eating', 
    
    'matter', 
    
    'truth', 
    
    'disobedience', 
    
    'matter' 
    
    ]; 

var k='disobedience'
console.log('The word '+'"'+k+'"'+' is repeated '+howManyTimesElementRepeated(words,k)+' times')