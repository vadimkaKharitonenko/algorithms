function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }

  return smallest_index;
}

function selection_sort(arr) {
  const newArr = [];
  const length = arr.length;

  for(let i = 0; i < length; i++) 
    newArr.push(arr.splice(findSmallest(arr), 1)[0]);

  return newArr;
}

console.log(selection_sort([5, 3, 6, 2, 10]));