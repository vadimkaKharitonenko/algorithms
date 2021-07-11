function quick_sort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];
    const less = [];
    const greater = [];

    for (let i = 1; i < arr.length; i++) {
      (pivot > arr[i])
        ? less.push(arr[i])
        : greater.push(arr[i]);
    }

    return [...quick_sort(less), pivot, ...quick_sort(greater)];
  }
}

console.log(quick_sort([10, 5, 2, 3])); // 2, 3, 5, 10
console.log(quick_sort([6, 5, 4, 3, 2 ,1])); // 1, 2, 3, 4, 5, 6