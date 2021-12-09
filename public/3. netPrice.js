function netPrice(prices)
{
    var sum=0
    for(let i=0;i<prices.length;i++)
    {
        sum+=prices[i]
    }
    return sum;
}

const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110]; 
console.log('Net amount spent :'+netPrice(prices))