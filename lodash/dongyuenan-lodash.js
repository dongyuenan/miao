
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
  },

  compact: function (array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  concat: function (array, ...val) {
    var value = [...val]
    for (var i = 0; i < value.length; i++) {
      if (Array.isArray(value[i])) {
        array.push(...value[i])
      } else {
        array.push(value[i])
      }
    }
    return array
  },

  difference: function (ary, val) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < val.length; ) {
        var a = ary[i]
        var b = val[j]
        if (a != b) {
          j++
        } else {
          break
        }
      }
      res.push(a)
    }
    return res
  },














}
