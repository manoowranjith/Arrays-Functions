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
const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony','manoowranjithaj'];
console.log('Longest word: '+findScaryWord(words))