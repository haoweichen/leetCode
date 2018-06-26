The solution I use in this quesion is a little tricky. First of all, I use Javascript Math object which is <code>Math.abs()</code> to make sure the input value must be positive no matter the original input value is positive or negative.
And then I let the input value divide 10 and store remainder into the variable <code>res</code> I just claimed each time. Each while loop, res should times 10 for making sure the lowest digit of the original value will become the highest digit of the result.
After the origin input value is equal to 0, it will exit the whole loop. Before return the result, we have two things to make sure,
one is we have to return -1 * result if the origin is negative, and then we have to also make sure that the result is in the boundry which is
<code>−2^31 < result < 2^31 − 1</code>. 

For easier to understand the whole process, I supply an example as following,
<br>
<br>ex: 
<br>we claim three two which are res=0(for store the remainder) and result=0 
<br>inputValue = -123
<br>inputValuePositive = Math.abs(inputValue) = Math.abs(-123) = 123
<br>
### First loop: inputValuePositive = 123
res = 123%10 = 3
<br>inputValuePositive = parseInt(inputValuePositive/10) = parseInt(123/10) = 12
<br>result = result * 10 + res = 0 * 10 + 3 = 3
<br>
### Second loop: inputValuePositive = 12
res = 12%10 = 2
<br>inputValuePositive = parseInt(inputValuePositive/10) = parseInt(12/10) = 1
<br>result = result * 10 + res = 3 * 10 + 2 = 32
<br>
### Third loop: inputValuePositive = 1
res = 1%10 = 1
<br>inputValuePositive = parseInt(inputValuePositive/10) = parseInt(1/10) = 0
<br>result = result * 10 + res = 32 * 10 + 1 = 321
<br>
### Exit While loop: inputValuePositive = 0 
<br>And because the origin input  value is negative, so return -1 * result = -1 * 321 = -321


## Solution
<div align=center>
  <img src="https://github.com/haoweichen/leetCode/blob/master/7_reverseInteger/Screen%20Shot%202018-06-25%20at%207.44.39%20PM.png"/>
</div>



