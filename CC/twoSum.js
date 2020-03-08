const twoSum = (arr , target) => {
    let numObject = {};
	for (let i = 0; i < arr.length; i++) {
		numObject[arr[i]] = i;
	}
	for (let i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			return [i, numObject[diff]];
		}
	}
}
console.log(twoSum([3,2,3,1], 4))

const twoSumBrute = ( nums , target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i , j];
            }
        }
    }
}
console.log(twoSumBrute([2, 7, 11, 15] , 9))

const twoSum1 = function(nums, target) {
    const numObj = {};
    for(let i=0; i<nums.length; i++){
        if(numObj[nums[i] ]>=0){
            return [ numObj[nums[i] ] , i]
        }
        numObj[target-nums[i]] = i
    }
};

console.log(twoSum1([2, 7, 11, 15] , 9))