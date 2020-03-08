const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const sum = [];
    for (let i = 0; i < nums.length - 2; i++) {
        const a = nums[i];
        if (a > 0) return sum;
        if (a === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const b = nums[j];
            const c = nums[k];
            if ((a + b + c) === 0) {
                sum.push([a, b, c]);
            }
            if ((a + b + c) >= 0) {
                while (nums[k - 1] === c) { k--; }
                k--;
            }
            if ((a + b + c) <= 0) {
                while (nums[j + 1] === b) { j++ }
                j++
            }
        }
    }
    return sum;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
