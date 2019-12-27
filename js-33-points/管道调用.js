function getGeneratorFromList(list) {
  let index = 0;
  return function generate() {
    if (index < list.length) {
      const result = list[index];
      index += 1;
      return result;
    }
  };
}

function toList(sequence) {
  const arr = [];
  let value = sequence();
  while (value !== undefined) {
    arr.push(value);
    value = sequence();
  }
  return arr;
}

// Sequence 函数本身非常轻量，操作符按需引入
function Sequence(list) {
  const initSequence = getGeneratorFromList(list);

  function pipe(...args) {
    return args.reduce((prev, current) => {
      return current(prev)
    }, initSequence);
  }
  return {
    pipe
  };
}

function filter(predicate) {
  return function (sequence) {
    return function filteredSequence() {
      const value = sequence();
      if (value !== undefined) {
        if (predicate(value)) {
          return value;
        }
        return filteredSequence();
      }
    };
  };
}

function map(mapping) {
  return function (sequence) {
    return function mappedSequence() {
      const value = sequence();
      if (value !== undefined) {
        return mapping(value);
      }
    };
  };
}

function take(n) {
  return function (sequence) {
    let count = 0;
    return function () {
      if (count < n) {
        count += 1;
        return sequence();
      }
    };
  };
}

function skipWhile(predicate) {
  return function (sequence) {
    let startTaking = false;
    return function skippedSequence() {
      const value = sequence();
      if (value !== undefined) {
        if (startTaking) {
          return value;
        } else if (!predicate(value)) {
          startTaking = true;
          return value;
        }
        return skippedSequence();
      }
    };
  };
}

function takeUntil(predicate) {
  return function (sequence) {
    return function () {
      const value = sequence();
      if (value !== undefined) {
        if (predicate(value)) {
          return value;
        }
      }
    };
  };
}

Sequence([2, 4, 6, 7, 9, 11, 13]).pipe(
  filter(x => x % 2 === 1),
  skipWhile(y => y < 10),
  toList
); // [11,13]