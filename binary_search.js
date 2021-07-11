function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = list[mid];

    if (guess === item) return mid;

    guess > item
      ? high = mid - 1
      : low = mid + 1;
  }

  return null;
}

const my_list = [1, 23, 43, 3, 25, 7, 9];

console.log(binarySearch(my_list, 3)); // 3
console.log(binarySearch(my_list, 7)); // 5
console.log(binarySearch(my_list, 9)); // 6
console.log(binarySearch(my_list, 134)); // null

