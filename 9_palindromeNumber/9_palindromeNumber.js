var isPalindrome = function(x) {
    
    if (x<0 || x>Math.pow(2, 31)-1) return false;
    
    return x==reverseInteger(x);
    
    function reverseInteger(x) {
        var res=0;
        var result=0;
        while(x>0) {
            res=x%10;
            x=parseInt(x/10);
            result=result*10+res;
        }
        return result;
    }
};

//testCase
var x=12321;
console.log(isPalindrome(x));