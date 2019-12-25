function getGeneratorFromList(list) {
  let index = 0;
  return function next() {
    if (index < list.length) {
      const result = list[index];
      index += 1;
      return result;
    }
  };
}
function createMapIterable(mapping, {
  next
}) {
  function map() {
    const value = next();
    if (value !== undefined) {
      return mapping(value);
    }
  }
  return {
    next: map
  };
}
function createFilterIterable(predicate, {
  next
}) {
  function filter() {
    const value = next();
    if (value !== undefined) {
      if (predicate(value)) {
        return value;
      }
      return filter();
    }
  }
  return {
    next: filter
  };
}

function Sequence(list) {
  const iterable = Array.isArray(list) ?
    {
      next: getGeneratorFromList(list)
    } :
    list;

  function map(mapping) {
    return Sequence(createMapIterable(mapping, iterable));
  }

  function toList(next) {
    const arr = [];
    let value = next();
    while (value !== undefined) {
      arr.push(value);
      value = next();
    }
    return arr;
  }
  function filter(predicate) {
    return Sequence(createFilterIterable(predicate, iterable));
  }

  return {
    map,
    filter,
    toList: () => toList(iterable.next),
  };
}
  const triple = x => {
   return  x * 3
  }
  const isEven = x => {
    return x % 2 === 0
  }
  // 例子：
  Sequence([1, 2, 3])
    .map(triple)
    .filter(isEven)
    .toList() // [6]
