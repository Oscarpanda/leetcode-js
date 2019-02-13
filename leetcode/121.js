var maxProfit = function(prices) {
    
  let max = 0
  let minprice = prices[0]
  for (let i = 1;i<prices.length;i++) {
    if (max < Math.max(max,prices[i] - minprice)) {
      max = Math.max(max,prices[i] - minprice)
    }
    if (prices[i] - minprice < 0) {
      minprice =prices[i]
    }

  }
  return max
};
maxProfit([7,1,5,3,6,4]) 