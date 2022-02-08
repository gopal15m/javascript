/**
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/


var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArr = [...nums1, ...nums2].sort((a, b) => a - b);
    
    const mid = Math.floor(sortedArr.length / 2);
    
    if(sortedArr.length % 2 ) return sortedArr[mid];
    
    return (sortedArr[mid] + sortedArr[mid - 1]) / 2;
    
};
