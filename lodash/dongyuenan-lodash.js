
var dongyuenan = {

  /** 数组函数 */
  chunk:
    function (array, size = 1) {
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

  compact:
    function (array) {
      var res = []
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          res.push(array[i])
        }
      }
      return res
    },

  concat:
    function (array, ...val) {
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

  difference:
    function (ary, ...val) {
      var result = []
      var vals = val.flat()
      for (var i = 0; i < ary.length; i++) {
        if (vals.indexOf(ary[i]) == -1) {
          result.push(ary[i])
        }
      }
      return result
    },

  differenceBy:
    function () {

    },

  differenceWith:
    function () {

    },

  drop:
    function (ary, n = 1) {
      var res = []
      for (var i = n; i < ary.length; i++) {
        res.push(ary[i])
      }
      return res
    },

  dropRight:
    function (ary, n = 1) {
      var res = []
      for (var i = 0; i < ary.length - n; i++) {
        res.push(ary[i])
      }
      return res
    },

  dropRightWhile:
    function (ary, predicate) {

    },

  dropWhile:
    function (ary, predicate) {

    },

  fill:
    function (ary, value, start = 0, end = ary.length) {
      for (var i = start; i < end; i++) {
        ary[i] = value
      }
      return ary
    },

  findIndex:
    function (ary, pre, Index = 0) {
      for (var i = Index; i < ary.length; i++) {
        if (pre instanceof Array) {
          if (ary[i][pre[0]] == pre[1]) {
            return i
          }
        } else if (typeof pre == 'function') {
          if (pre(ary[i])) {
            return i
          }
        } else if (typeof pre == 'object') {
          var a = JSON.stringify(ary[i])
          var b = JSON.stringify(pre)
          if (a == b) {
            return i
          }
        } else if (typeof pre == 'string') {
          if (ary[i][pre] == true) {
            return i
          }
        }
      }
      return -1
    },

  findLastIndex:
    function (ary, predicate) {
      for (var i = ary.length - 1; i > 0; i--) {
        if (predicate(ary[i])) {
          return i
        }
      }
      return -1
    },

  flatten:     /**减少一级嵌套深度 */
    function (ary) {
      var res = []
      for (var i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
          var item = ary[i]
          var len = item.length
          for (var j = 0; j < len; j++) {
            res.push(item[j])
          }
        } else {
          res.push(ary[i])
        }
      }
      return res
    },

  flattenDeep:    /**递归为一维数组 */
    function (ary) {
      return this.flattenDepth(ary, Infinity)
    },

  flattenDepth:   /**根据 depth 递归减少 array 的嵌套层级 */
    function (ary, depth = 1) {
      if (depth == 0) {
        return ary.slice()
      }

      var result = []
      for (var i = 0; i < ary.length; i++) {
        var item = ary[i]
        if (Array.isArray(item)) {
          var flattedItem = this.flattenDepth(item, depth - 1)
          for (var j = 0; j < flattedItem.length; j++) {
            result.push(flattedItem[j])
          }
        } else {
          result.push(item)
        }
      }
      return result
    },

  fromPairs:
    function (pairs) {
      var obj = {}
      for (var i = 0; i < pairs.length; i++) {
        var item = pairs[i][0]
        obj[item] = pairs[i][1]
      }
      return obj
    },

  head:
    function (ary) {
      return ary[0]
    },

  indexOf:
    function (ary, value, fromIndex = 0) {
      if (fromIndex >= 0) {
        for (var i = fromIndex; i < ary.length; i++) {
          if (ary[i] == value) {
            return i
          }
        }
      } else if (fromIndex < 0) {
        for (var i = ary.length + fromIndex; i < ary.length; i++) {
          if (ary[i] == value) {
            return i
          }
        }
      }
      return -1
    },

  lastIndexOf:
    function (ary, value, fromIndex = ary.length) {
      for (var i = fromIndex; i >= 0; i--) {
        if (ary[i] === value) {
          return i
        }
      }
      return -1
    },

  initial:
    function (ary) {
      // return ary.slice(0, ary.length - 1)
      var res = []
      for (i = 0; i < ary.length - 1; i++) {
        res.push(ary[i])
      }
      return res
    },

  intersection:
    function (...arrays) {
      var result = []
      var flag = 1

      for (var i = 0; i < arrays[0].length; i++) {
        for (var j = 1; j < arrays.length; j++) {
          if (arrays[j].indexOf(arrays[0][i]) == -1) {
            flag = 0
            break
          }
        }
        if (flag == 0) {
          flag = 1
        } else if (flag == 1) {
          result.push(arrays[0][i])
        }
      }

      return result
    },

  join:
    function (ary, separator = ',') {
      var str = ''
      for (var i = 0; i < ary.length; i++) {
        str = str + ary[i] + separator
      }
      str = str.slice(0, str.length - 1)
      return str
    },

  last:
    function (ary) {
      return ary[ary.length - 1]
    },

  pull:
    function (ary, ...value) {
      var result = []
      var val = [...value]
      for (var i = 0; i < ary.length; i++) {
        if (val.indexOf(ary[i]) === -1) {
          result.push(ary[i])
        }
      }
      return result
    },

  reverse:
    function (ary) {
      var i = 0
      var j = ary.length - 1
      while (i < j) {
        var temp = ary[i]
        ary[i] = ary[j]
        ary[j] = temp
        i++
        j--
      }
      return ary
    },

  sortedIndex:
    function (ary, value) {
      var i = 0
      var j = ary.length - 1
      while (i <= j) {
        if (ary[i] == value) {
          return i
        } else if (ary[j] == value) {
          return j
        } else if (value > ary[i] && value < ary[j]) {
          i++
          j--
        }
      }
      return i
    },

  union:
    function (...arrays) {
      var result = []
      var map = {}
      for (var i = 0; i < arrays.length; i++) {
        for (var j = 0; j < arrays[i].length; j++) {
          var num = arrays[i][j]
          if (!(map[num] in map)) {
            map[num] = 0
            result.push(num)
          }
          map[num]++
        }
      }
      return result
    },

  unionBy:
    function (...arys) {
      var temp = []
      var result = []
      var iteratee = arys[arys.length - 1]
      for (var i = 0; i < arys.length - 1; i++) {
        for (var j = 0; j < arys[i].length; j++) {
          if (typeof iteratee == 'function') {
            var num = iteratee(arys[i][j])
          }
          if (typeof iteratee == 'string') {
            var num = arys[i][j][iteratee]
          }
          if (temp.indexOf(num) == -1) {
            temp.push(num)
            result.push(arys[i][j])
          }
        }
      }

      return result
    },

  uniq:
    function (ary) {
      var result = []
      var map = {}
      for (var i = 0; i < ary.length; i++) {
        var num = ary[i]
        if (!(map[num] in map)) {
          map[num] = 0
          result.push(num)
        }
        map[num]++
      }
      return result
    },

  uniqBy:
    function (ary, iteratee) {
      var temp = []
      var result = []
      for (var i = 0; i < ary.length; i++) {
        if (typeof iteratee == 'function') {
          var num = iteratee(ayr[i])
        }
        if (typeof iteratee == 'string') {
          var num = ary[i][iteratee]
        }

        if (temp.indexOf(num) == -1) {
          temp.push(num)
          result.push(ary[i])
        }
      }

      return result
    },

  unzip:
    function (ary) {
      var result = []
      var temp = []
      var a = ary.length
      var b = ary[0].length
      for (var i = 0; i < b; i++) {
        for (var j = 0; j < a; j++) {
          temp.push(ary[j][i])
        }
        result.push(temp)
        temp = []
      }
      return result
    },

  without:
    function (ary, ...values) {
      var result = []
      for (var i = 0; i < ary.length; i++) {
        if (values.indexOf(ary[i]) === -1) {
          result.push(ary[i])
        }
      }
      return result
    },

  xor:
    function (...arrays) {
      var result = []
      var temp = []
      var map = {}
      for (var i = 0; i < arrays.length; i++) {
        for (var j = 0; j < arrays[i].length; j++) {
          var num = arrays[i][j]
          if (!(num in map)) {
            map[num] = 0
            temp.push(num)
          }
          map[num]++
        }
      }

      for (var k = 0; k < temp.length; k++) {
        if (map[temp[k]] === 1) {
          result.push(temp[k])
        }
      }
      return result
    },

  zip:
    function (...arys) {
      var result = []
      var temp = []   //当作中间记录数组
      for (var i = 0; i < arys[0].length; i++) {
        for (var j = 0; j < arys.length; j++) {
          temp.push(arys[j][i])
        }
        result.push(temp)
        temp = []
      }

      return result
    },



  /** 集合函数 */
  countBy:
    function (collection, iteratee = identity) {
      var map = {}
      if (typeof iteratee === 'string') {
        var tempArray = collection.map(it => it[iteratee])
      } else if (typeof iteratee === 'function') {
        var tempArray = collection.map(it => iteratee(it))
      }

      for (var i = 0; i < tempArray.length; i++) {
        if (!(tempArray[i] in map)) {
          map[String(tempArray[i])] = 0
        }
        map[String(tempArray[i])]++
      }

      return map
    },

  every:
    function (collection, predicate = identity) {
      var len = collection.length
      for (var i = 0; i < len; i++) {
        if (predicate(ary[i], index, ary) == false) {
          return false
        }
      }
      return true
    },

  filter:
    function (collection, predicate = identity) {

    },

  find:
    function (collection, predicate = identity, fromIndex = 0) {

    },

  flatMap:
    function (collection, predicate = identity) {
      var result = []
      var tempArray = []
      var len = collection.length
      for (var i = 0; i < len; i++) {
        tempArray.push(predicate(collection[i], i, collection))
        result.push(...tempArray)
        tempArray = []
      }

      return result
    },

  flatMapDepth:
    function (collection, iteratee = identity, depth = 1) {
      var flatmap = this.flatMap(collection, iteratee)
      return this.flattenDepth(flatmap, depth = 1)
    },

  forEach:
    function (collection, iteratee = identity) {
      var len = collection.length
      for (var i = 0; i < len; i++) {
        iteratee(collection[i], i, collection)
      }
    },

  groupBy:
    function (collection, iteratee = identity) {
      var map = {}
      var tempArray = []
      if (Array.isArray(iteratee)) {

      } else if (typeof iteratee === 'function') {

      } else if (typeof iteratee === 'object') {

      } else if (typeof iteratee === 'string') {

      }


    },

  includes:
    function (collection, value, fromIndex = 0) {
      var len = collection.length
      if (Array.isArray(collection)) {
        for (var i = fromIndex; i < len; i++) {
          if (collection[i] == value) {
            return true
          }
        }
        return false
      } else if (typeof collection === 'object') {
        for (var key in collection) {
          if (collection[key] === value) {
            return true
          }
        }
        return fasle
      } else if (typeof collection === 'string') {
        if (collection.indexOf(value) === -1) {
          return false
        }
        return true
      }
    },

  keyBy:
    function (collection, iteratee = identity) {

    },

  map:
    function (collection, iteratee = identity) {
      var result = []
      if (Array.isArray(collection)) {
        var len = collection.length
        for (var i = 0; i < len; i++) {
          var num = iteratee(collection[i], i, collection)
          result.push(num)
        }
        return result
      } else if (typeof collection === 'object') {
        if (typeof iteratee === 'function') {
          for (var key in collection) {
            var num = iteratee(collection[key], key, collection)
            result.push(num)
          }
          return result
        }
        // else if (typeof iteratee === 'string') {
        //   for (var key in collection) {
        //     if (collection[key] === iteratee) {
        //       result.push(collection[key])
        //     }
        //   }
        //   return result
        // }
      }
    },

  partition:
    function (collection, predicate = identity) {
      var result = []
      var trueArray = []
      var falseArray = []
      if (Array.isArray(collection)) {

      } else if (typeof collection === 'object') {
        for (var key in collection) {
          var num = predicate(collection[key])
          if (num) {
            trueArray.push(num)
          } else if (!num) {
            falseArray.push(num)
          }
        }
        result.push(trueArray)
        result.push(falseArray)
        return result
      }
    },

  reduce:
    function (collection, iteratee = identity, accumulator) {

    },

  reduceRight:
    function (collection, iteratee = identity, accumulator) {

    },

  reject:
    function (collection, pre) {
      var result = []
      var len = collection.length
      for (var i = 0; i < len; i++) {
        if (pre instanceof Array) {
          if (collection[i][pre[0]] != pre[1]) {
            result.push(collection[i])
          }
        } else if (typeof pre == 'function') {
          if (!pre(collection[i])) {
            result.push(collection[i])
          }
        } else if (typeof pre == 'object') {
          for (var key in pre) {
            if (collection[i][key] == false && pre[key] == true) {
              result.push(collection[i])
            }
          }
        } else if (typeof pre == 'string') {
          if (collection[i][pre] == false) {
            result.push(collection[i])
          }
        }
      }
      return result
    },

  sample:
    function (collection) {
      var len = collection.length
      var randomIndex = Math.floor(Math.random() * len)
      return collection[randomIndex]
    },

  shuffle:
    function (collection) {
      var result = []
      var len = collection.length
      while (result.length < len) {
        var randomIndex = Math.floor(Math.random() * len)
        var num = collection[randomIndex]
        if (result.indexOf(num) === -1) {
          result.push(num)
        } else {
          continue
        }
      }
      return result
    },

  size:
    function (collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else if (typeof collection == 'string') {
        return collection.length
      } else if (typeof collection == 'object') {
        var count = 0
        for (var key in collection) {
          count++
        }
        return count
      }
    },

  some:
    function (collection, pre) {

    },








  //语言
  isArray:
    function (value) {
      return Array.isArray(value)
    },

  isBoolean:
    function (value) {
      if (value === true || value === false) {
        return true
      }
      return false
    },

  isDate:
    function (value) {
      return value instanceof Date
    },

  isElement:
    function (value) {

    },

  isEmpty:
    function (value) {

    },

  isEqual:
    function (value, other) {

    },

  isError:
    function (value) {
      return value instanceof Error
    },

  isFinite:
    function (value) {

    },

  isFunction:
    function (value) {
      return value instanceof Function
    },

  isMatch:
    function (object, source) {
      for (var k in object) {
        for (var k in source) {
          if (object[k] == source[k]) {
            return true
          }
        }
      }
      return false
    },

  isNaN:
    function (value) {
      return Number.isNaN(value)
    },

  isNil:
    function (value) {
      return value == null || value == undefined
    },

  isNull:
    function (value) {
      if (value === undefined) {
        return false
      }
      return value == null
    },

  isNumber:
    function (value) {
      return typeof (value) == 'number'
    },

  isObject:
    function (value) {
      return value != null && (typeof value == 'object' || typeof value == 'function')
    },

  isRegExp:
    function (value) {

    },

  isString:
    function (value) {
      return typeof value == 'string'
    },

  isUndefined:
    function (value) {
      return typeof value == 'undefined'
    },

  toArray:
    function (value) {
      if (typeof value == 'object') {
        var result = []
        for (var key in value) {
          result.push(value[key])
        }
        return result
      } else if (typeof value == 'string') {
        return value.split('')
      } else if (typeof value == 'number' || value == null) {
        return []
      }
    },



  //数学
  ceil:
    function (number, precision = 0) {

    },

  max:
    function (array) {
      if (array.length == 0) {
        return undefined
      }
      var max = -Infinity
      for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i]
        }
      }
      return max
    },

  maxBy:
    function (array, iteratee) {
      if (typeof iteratee == 'function') {
        var signMax = iteratee(array[0])
        var max = array[0]
        for (var i = 1; i < array.length; i++) {
          if (iteratee(array[i]) > signMax) {
            signMax = iteratee(array[i])
            max = array[i]
          }
        }
      } else if (typeof iteratee == 'string') {
        var flagMax = array[0][iteratee]
        var max = array[0]
        for (var i = 1; i < array.length; i++) {
          if (array[i][iteratee] > flagMax) {
            flagMax = array[i][iteratee]
            max = array[i]
          }
        }
      }

      return max
    },

  min:
    function (array) {
      if (array.length == 0) {
        return undefined
      }
      var min = Infinity
      for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i]
        }
      }
      return min
    },

  minBy:
    function (array, iteratee) {
      if (typeof iteratee == 'function') {
        var signMin = iteratee(array[0])
        var min = array[0]
        for (var i = 1; i < array.length; i++) {
          if (iteratee(array[i]) < signMin) {
            signMin = iteratee(array[i])
            min = array[i]
          }
        }
      } else if (typeof iteratee == 'string') {
        var flagMin = array[0][iteratee]
        var min = array[0]
        for (var i = 1; i < array.length; i++) {
          if (array[i][iteratee] < flagMin) {
            flagMin = array[i][iteratee]
            min = array[i]
          }
        }
      }

      return min
    },

  round:
    function (number, precision = 0) {

    },

  sumBy:
    function (array, iteratee = identity) {
      var sum = 0
      for (var i = 0; i < array.length; i++) {
        if (typeof iteratee == 'string') {
          sum += array[i][iteratee]
        } else if (typeof iteratee == 'function') {
          sum += iteratee(array[i])
        }
      }
      return sum
    },

  //数字
  random:
    function random(lower = 0, upper = 1, floating) {

    },

  //对象
  assignIn:
    function (object, sources) {

    },

  defaults:
    function (object, ...sources) {
      var map = new Map()
      var aryObj = [...sources]
      for (var key in object) {
        if (!(key in map)) {
          map.set(key, object[key])
        }
      }

      for (var i = 0; i < aryObj.length; i++) {
        for (var key in aryObj[i]) {
          if (map.has(key) == false) {
            map.set(key, aryObj[i][key])
          }
        }
      }

      return map
    },

  findKey:
    function (object, predicate) {
      if (typeof predicate == 'function') {
        for (var key in object) {
          if (predicate(object[key])) {
            return key
          }
        }
      } else if (typeof predicate == 'object') {
        for (var key in object) {
          if (object[key] === predicate) {
            return key
          }
        }
      } else if (Array.isArray(predicate)) {
        for (var key in object) {
          if (key[predicate[0]] == predicate[1]) {
            return key
          }
        }
      } else if (typeof predicate == 'string') {
        for (var key in object) {
          if (key[predicate] == true) {
            return key
          }
        }
      }

      return undefined
    },





}
