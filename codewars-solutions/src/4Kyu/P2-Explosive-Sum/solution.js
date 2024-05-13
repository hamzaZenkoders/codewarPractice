/*

4 kyu:Explosive Sum

Link:https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript

problem:



How many ways can you make the sum of a number?
From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
Examples
Basic
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42
Explosive
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
See here for more examples.




unoptimized approach:

function sum(num, max = num) {
    if (num === 0) {
        return 1;
    }
    
    let count = 0;
    
    // Iterate over all possible numbers from 1 to max that can be included in the partition.

    for (let i = 1; i <= max && i <= num; i++) {

        // For each number i, recursively calculate the number of ways to partition the remaining sum num - i.

        count += sum(num - i, i);
    }
    
    return count;
}

console.log(sum(4)); // Output: 5






*/



//optimized approach

/*

The time complexity of the current implementation is exponential because it explores all possible partitions of the input number num. As a result, it can become very slow for larger input numbers.

To improve the time complexity, you can use dynamic programming. Here's how you can do it:

Memoization: Store the results of subproblems in an array to avoid redundant computations. This way, if you encounter the same subproblem again, you can directly retrieve its result from the array instead of recalculating it.

Bottom-Up Approach: Instead of using recursion, start solving the problem from smaller subproblems and build up to the desired solution. This approach ensures that each subproblem is solved only once and its result is stored for future use.

By using dynamic programming with memoization, you can reduce the time complexity to linear or quadratic, depending on the implementation. This makes the algorithm much more efficient, especially for larger input numbers.

*/

function sum(num) {
    const dp = Array(num + 1).fill(0);
    dp[0] = 1; // Base case
    
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j++) {
            dp[j] += dp[j - i];
        }
    }
    
    return dp[num];
}

console.log(sum(10);
