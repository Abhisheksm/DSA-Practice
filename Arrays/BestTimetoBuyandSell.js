//121. Best Time to Buy and Sell Stock


const maxProfit = (prices)=>{
   let profit = 0
   let min = prices[0]
   for(let i =1; i<prices.length;i++)
   {
   if(prices[i] - min > profit)
   {
    profit = prices[i] -min
   }
   if(prices[i] < min)
   {
    min = prices[i]
   }
   }
   return profit
}

console.log(maxProfit([7,6,4,3,1]))