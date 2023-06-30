const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Analysis:
// type	            insert	        append
// tinyArray	    57.159 μs	    144.463 μs
// smallArray	    77.019 μs	    174.286 μs
// mediumArray	    254.334 μs	    220.324 μs
// largeArray	    13.010342 ms	816.506 μs
// extraLargeArray	1.821699044 s	4.283522 ms
		
// Units:		
// s: second		
// ms: millisecond		
// μs: microsecond		
//
// 4. Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?
// Answer: As the array gets larger, the append function scales better right about the mediumArray.  Append seems to scale better even though for tiny and small arrays it took longer.  We can tell due to the fact that it never really goes out of the microsecond range while insert almost doubles by the largeArray point. 

// 5. For extra credit, do some review / research on why the slower function is so slow, and summarize the reasoning for this.
// Answer: Unshift is considered O(N+X.  N is the number of arguments passed to unshift and X is the number of elements of the array.  It can become expensive very quickly since it scales linearly with each element in the array.  