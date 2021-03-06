function values() {
  let i = 0;
  const n = arguments.length;
  const a = arguments;
  return {
    hasNext() {
      return i < n;
    },
    next() {
      if (i > n) {
        throw new Error('end of iteration');
      }
      return a[i++];
    },
  };
}

const it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);
it.next();
it.next();
it.next();
