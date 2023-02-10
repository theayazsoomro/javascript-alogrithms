// Unsorted data
var arr = [9, 3, 2, 4, 1, 5, 8, 6, 7];
// Length of an array
var size = arr.length;

// Implemention of selection sort algorithm to sort the unsorted data
function selectionSort(inputArr, len) 
{
  for (let i = 0; i < len; i++) 
  {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < len; j++) 
    {
      if (inputArr[j] < inputArr[min]) 
      {
        min = j;
      }
    }

    // Swaping the elements
    if (min != i) 
    {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}
// Calling a function
selectionSort(arr, size);
// Sorted Array
console.log(arr);
