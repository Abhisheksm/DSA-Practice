// 994. Rotting Oranges

/*
The BFS algorithm begins by selecting a starting node, adding it to a queue, and marking it as visited. 
It then repeatedly dequeues a node, processes it, and enqueues all of its unvisited neighbors, 
marking them as visited. This continues until the queue is empty, indicating all reachable nodes have 
been visited. 
*/
var orangesRotting = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let queue = []
    let maxLevel = 0 

    //Push index of rotten oranges in queue and set level as 0. (third value)
    for(let i = 0 ; i< row ;i++)
    {
        for(let j =0; j< col ;j++)
        {
            if(grid[i][j] === 2)
            {
                queue.push([i,j, 0])
            }
        }
    }

    // Check all adjacent values and change it to 2 untill all the values have beem checked.
    // For every level of adjecent check incraese level by 1.
    // Also known as BFS (Breadth-first Search)

    while(queue.length)
    {
      let [x,y,level] = queue.shift()
      if(y < col-1 && grid[x][y+1] === 1)
      {
         grid[x][y+1] = 2
         queue.push([x,y+1, level+1])
      }
       if(y > 0 && grid[x][y-1] === 1)
      {
         grid[x][y-1] = 2
         queue.push([x,y-1, level+1])
      }
       if(x < row-1 && grid[x+1][y] === 1)
      {
         grid[x+1][y] = 2
         queue.push([x+1,y, level+1])
      }
       if(x> 0 && grid[x-1][y] === 1)
      {
         grid[x-1][y] = 2
         queue.push([x-1,y,level+1])
      }

      maxLevel = Math.max(level, maxLevel )
    }

    // Check if there is value which is equal to 1
    for(let i = 0 ; i< row ;i++)
    {
        for(let j =0; j< col ;j++)
        {
            if(grid[i][j] === 1)
            {
                return -1
            }
        }
    }

    return maxLevel
};