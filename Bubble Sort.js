const arr = [9,3,2,4,1,5,8,6,7];
const len = arr.length;

function bubbleSort(arr, len)
{
    // Implemention of bubble sort algorithm to sort the unsorted data
    for(let i = 0; i < len; i++)
    {
        for(let j = 0; j < len - i - 1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    // Display sorted data
    for(let i = 0; i < len; i++)
    {
        console.log(arr[i]);
    }
}
// Calling a function
bubbleSort(arr, len);