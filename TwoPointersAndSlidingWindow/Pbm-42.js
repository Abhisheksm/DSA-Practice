//42. Trapping Rain water

var trap = function(height) {
    let n = height.length
    
    let maxLeft = []
    let maxRight = []
    maxLeft[0] = height[0]
    maxRight[n-1] = height[n-1]

    for(let i=1; i<n ; i++){
      maxLeft[i] = Math.max(maxLeft[i-1], height[i])
      maxRight[n-1-i] = Math.max(maxRight[n-i], height[n-i-1])
    }

    //You can also find MaxRight using extra for loop
    // let maxRight = []
    //  maxRight[n-1] = height[n-1]
    // for(let i=n-2;i>=0;i--){
    //     maxRight[i] = Math.max(maxRight[i+1], height[i])
    // }
   
    let sum = 0
    for(let i=0;i<n;i++){
        let TrappedWater = Math.min(maxLeft[i], maxRight[i])
        sum +=  (TrappedWater < 0  ? 0 : TrappedWater) - height[i]
    }

     return sum
};