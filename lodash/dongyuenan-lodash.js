var dongyuenan = {
  chunk: function (array, size = 1) {
    var res = []
    var tem = []
    if (size == 0) {    // 如果size为0直接返回空数组
      return res
    }
    if (size == array.length) {    // 如果size等于原数组长度返回原数组
      return array
    }
    for (var i = 0; i < array.length; i++) {
      tem.push(array[i])
      if (tem.length == size) {
        res.push(tem)
        tem = []
      }
    }
    if (tem[0]) {     //最后只要tem里面还有元素就需要把tem放进res里面
      res.push(tem)
    }
    return res
  }
}
