function summary(ary) {
  return ary.reduce((sum, item) => sum + item, 0)
}

function check(ary, offset) {
  const avg = summary(ary) / ary.length
  return avg > offset || avg < -offset
}

function getOffsetRange({ max, min, average, offset }) {
  const maxLimit = Math.min(max, average + offset)
  const minLimit = Math.max(min, average - offset)
  const offsetMax = maxLimit - average
  const offsetMin = minLimit - average
  return [offsetMin, offsetMax]
}

function generateData(
  ary,
  { minOffset, maxOffset, offset, amount, contraction }
) {
  let flag = true
  if (check(ary, offset)) {
    for (let i = 0; i < amount; i++) {
      const curAvg = summary(ary) / ary.length
      if ((curAvg > offset && ary[i] > 0) || (curAvg < offset && ary[i] < 0)) {
        ary[i] = (ary[i] * (100 - contraction)) / 100
      } else if (curAvg > offset) {
        ary[i] = ary[i] - ((maxOffset - curAvg) * (100 - contraction)) / 100
      } else if (curAvg < offset) {
        ary[i] = ary[i] - ((minOffset - curAvg) * (100 - contraction)) / 100
      }
      if (!check(ary, offset)) {
        flag = false
        break
      }
    }
  } else {
    flag = false
  }
  if (flag) {
    return generateData(ary, {
      minOffset,
      maxOffset,
      offset,
      amount,
      contraction,
    })
  }
  return ary
}

function initData({ max, min, average, amount }) {
  const offsetMax = max - average
  const offsetMin = min - average
  const offsets = []
  for (let i = 0; i < amount; i++) {
    offsets.push(Math.random() * (offsetMax - offsetMin) + offsetMin)
  }
  return offsets
}

self.addEventListener('message', function (e) {
  const {method, options} = e.data;
  if (method === 'generate') {
    const {max, min, average, amount, offset, contraction} = options;
    const ary = initData({ max, min, average, amount })
    const [minOffset, maxOffset] = getOffsetRange({
      max,
      min,
      average,
      offset,
    })
    const result = generateData(ary, {
      minOffset,
      maxOffset,
      offset,
      amount,
      contraction,
    })
    self.postMessage(result);
  }
}, false)