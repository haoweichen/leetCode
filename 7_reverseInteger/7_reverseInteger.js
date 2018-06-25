var reverse = function(x) {
    var res=0;
    var result=0;
    var x_positive = Math.abs(x);
    while (x_positive > 0){
        res = x_positive%10;
        x_positive=parseInt(x_positive/10);
        result= result*10 + res;
    }
    if (x < 0 && result > Math.pow(-2,31) && result < Math.pow(2,31)){
        return -1*result;
    }else if (x >= 0 && result > Math.pow(-2,31) && result < Math.pow(2,31)){
        return result;
    }else {
        return 0;
    }
};

//testCase
var x=-123
console.log(reverse(x));