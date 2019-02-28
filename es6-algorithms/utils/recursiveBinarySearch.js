
 
const binarySearch = (list, item, low, hight) => {
  let arrLength = list.length
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    if( guess === item ) {
      return mid
    } else if (guess > item) {
      high = mid - 1
      list = list.slice(0, mid)
      return binarySearch(list, item, low, high)
    } else {
      low = mid + 1
      list = list.slice(low, arrLength)
      return binarySearch(list, item, low, high)
    }
  }
  return null 
}

const createArr = (n) => Array.from({length: n}, (v, k) => k + 1)

const myList = createArr(100)
let low = 0
let high = myList.length - 1

console.log(binarySearch(myList, 3, low, high))
console.log(binarySearch(myList, -1, low, high))