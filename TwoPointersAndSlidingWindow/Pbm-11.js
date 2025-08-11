//11. Container with most water


//Brute force approach
const maxArea = (height)=>{
    let area=0
    let mexWater =0 

    for(let i=0; i<height.length ;i++){
        for(let j=i+1;j<height.length;j++){
            area = Math.min(height[i],height[j])*(j-i)
            if(area > mexWater){
                mexWater = area
            }
        }
    }

    return mexWater
}

const maxArea2 = (height)=>{
    let area =0, maxWater = 0, i=0, j=height.length-1

    while(i<j){
      area = Math.min(height[i], height[j]) * (j-i)
      if(area> maxWater) maxWater =area
        //Greedy Appraoch -> if less then increment/decrement pointer
      if(height[i] < height[j]) i++
      else j--
    }

    return maxWater
}

console.log(maxArea2([1,8,6,2,5,4,8,3,7]))
