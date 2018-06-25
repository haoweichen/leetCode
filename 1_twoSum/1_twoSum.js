/* Two for loop. Time complexity is O(n^2)*/
var twoSum = function(nums, target) {
    for (var i=0; i<nums.length; i++){
        for (var j=i+1; j<nums.length; j++){
            if (nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
};


/*Using Map. Time complexity is O(n)*/
var twoSum2 = function(nums, target) {
    var map={};
    for (var i=0; i<nums.length; i++) {
        if (map[target-nums[i]] >= 0) {
            return [map[target-nums[i]], i];
        }else {
            map[nums[i]] = i;
        }
    }
};

// testCase
var nums=[2,7,11,15];
var target=9;
console.log(twoSum(nums, target));

// testCase
var nums=[2,7,11,15];
var target=9;
console.log(twoSum2(nums, target));