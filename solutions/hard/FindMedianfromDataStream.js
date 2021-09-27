/*************************************************************************************** 
 *
 * Median is the middle value in an ordered integer list. If the size of the list is 
 * even, there is no middle value. So the median is the mean of the two middle value.
 * Examples: 
 * [2,3,4] , the median is 3
 * [2,3], the median is (2 + 3) / 2 = 2.5 
 * 
 * Design a data structure that supports the following two operations:
 * 
 * void addNum(int num) - Add a integer number from the data stream to the data 
 * structure.
 * double findMedian() - Return the median of all elements so far.
 * 
 * For example:
 * 
 * add(1)
 * add(2)
 * findMedian() -> 1.5
 * add(3) 
 * findMedian() -> 2
 * 
 * Credits:Special thanks to @Louis1992 for adding this problem and creating all test 
 * cases.
 *               
 ***************************************************************************************/

var MedianFinder = function() {
    this.maxHeap = new Heap(Heap.maxComparator);
    this.minHeap = new Heap(Heap.minComparator);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.maxHeap.peek() || num < this.maxHeap.peek()) {
        this.maxHeap.add(num);
    } else {
        this.minHeap.add(num);
    }

    if (this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.add(this.maxHeap.poll());
    } else if (this.minHeap.size - this.maxHeap.size > 1) {
        this.maxHeap.add(this.minHeap.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size > this.minHeap.size) return this.maxHeap.peek();
    if (this.minHeap.size > this.maxHeap.size) return this.minHeap.peek();
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
};

class Heap {
    constructor(comparator) {
        this.size = 0;
        this.values = [];
        this.comparator = comparator || Heap.minComparator;
    }
    
    add(val) {
        this.values.push(val);
        this.size++;
        this.bubbleUp();
    }
    
    peek() {
        return this.values[0] || null;
    }
    
    poll() {
        const root = this.values[0];
        const end = this.values.pop();
        this.size--;
        if (this.values.length) {
            this.values[0] = end;
            this.bubbleDown();
        }
        
        return root;
    }
    
    bubbleUp() {
        let index = this.values.length - 1;
        let parent = Math.floor((index - 1) / 2);
        
        while (this.comparator(this.values[index], this.values[parent]) < 0) {
            [this.values[parent], this.values[index]] = 
                [this.values[index], this.values[parent]];
            index = parent;
            parent = Math.floor((index - 1) / 2)
        }
    }
    
    bubbleDown() {
        let index = 0;
        let length = this.values.length;
        
        while (true) {
            let left = null;
            let right = null;
            let swap = null;
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            
            if (leftIndex < length) {
                left = this.values[leftIndex];
                if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
            }
            
            if (rightIndex < length) {
                right = this.values[rightIndex];
                if ((swap && this.comparator(right, left) < 0) || (!swap && this.comparator(right, this.values[index]))) swap = rightIndex;
            }
            if (!swap) break;
            
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;
        }
    }
}

Heap.minComparator = (a, b) => a - b;
Heap.maxComparator = (a, b) => b - a;
