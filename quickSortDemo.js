
!(function(window) {
  /**
   *快速排序
   *
   * @param {*} arr 传入的数组参数
   * @param {*} type    排序的方式，默认为true从小到大
   * @returns 排序完成的数组
   */
  function quickSort(arr, type = true) {
    let middle,
      i,
      isLeft = true,
      isRight = true,
      arrLeft = [],
      arrRight = [];
    if (type) {
      middle = arr[0];
      for (i = 1; i < arr.length; i++) {
        if (arr[i] >= middle) {
          arrRight.push(arr[i]);
          isRight = false;
        } else {
          arrLeft.push(arr[i]);
          isLeft = false;
        }
      }
    } else {
      middle = arr[arr.length - 1];
      for (i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= middle) {
          arrLeft.push(arr[i]);
          isLeft = false;
        } else {
          arrRight.push(arr[i]);
          isRight = false;
        }
      }
    }
    if (!isLeft) {
      quickSort(arrLeft, type);
    }
    if (!isRight) {
      quickSort(arrRight, type);
    }

    return (arr = arrLeft.concat(middle, arrRight));
  }
  window.$quickSort = quickSort;
})(window);
