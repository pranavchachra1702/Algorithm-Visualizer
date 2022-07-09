import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

const BubbleSort = (nums) => {
  const trace = newTrace(nums);

  for (let i = 0; i < nums.length; i++)
  {
    for (let j = 0; j < nums.length - i - 1; j++)
    {
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
      if (nums[j] > nums[j + 1])
      {
        swap(nums, j, j + 1);
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
      }
    }
    addToTrace(trace, nums, [
      ...lastSorted(trace),
      nums.length - 1 - i
    ]);
  }

  return trace;
};

export const BubbleSortKey = createKey('Comparing', 'Swapping');
export const BubbleSortDesc = {
  title: 'Bubble Sorting',
  description: (
    <p>
      Bubble Sorting is a sorting algorithm that repeatedly swaps adjacent elements of an array until they are not in the intended order. It is called bubble sort because the movement of array elements is just like the movement of air bubbles in the water. Bubbles in water rise up to the surface, similarly, the array elements in bubble sort move to the end in each iteration.
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>
};
export default BubbleSort;