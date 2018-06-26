This might be the very first question when people start to practice leetCode. In this case, I used two solutions to solve this problem. The first solution is using two for loops which is not a good idea because its time complexity is O(n^2).
And the second one is using map. The procedure is as following,
  1. Created a map
  2. Check if <code>map[target-nums[i]]>=0</code>, if it is true means that the element can get the target after adding nums[i] and return the location of target-nums[i] and nums[i]
  3. If <code>map[target-nums[i]]>=0</code> is not true means that there is no element whcich can get the target after adding nums[i] then store nums[i] and its location in map.
 
 
## First Solution
<div align=center>
  <img src="https://github.com/haoweichen/leetCode/blob/master/1_twoSum/1.png"/>
</div>
 

 
 
 
 ## Second Solution
 <div align=center>
  <img src="https://github.com/haoweichen/leetCode/blob/master/1_twoSum/2.png"/>
</div> 

