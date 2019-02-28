/** 
* 函数binarySearch接受一个有序数组和一个元素。 如果指定的元素包含在数组中， 这个
* 函数将返回其位置。 你将跟踪要在其中查找的数组部分—— 开始时为整个数组。
* 非递归方法
 */
const binarySearch = (list, item) => {
  // 数组要查找的范围
  // low、high用于跟踪要在其中查找的列表部分
  let low = 0  
  let high = list.length - 1

  while(low <= high) { // 只要范围没有缩小到只包含一个元素
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid] // 找到中间的元素

    if(guess === item) { // 找到元素
      return mid
    }
    if(guess > item) { // 猜测的数大了
      high = mid - 1
    } else {　// 猜测的数小了
      low = mid + 1
    }
  }

  return null
}

const myList = [1, 3, 5, 7, 9]

console.log(binarySearch(myList, 3))
console.log(binarySearch(myList, -1))