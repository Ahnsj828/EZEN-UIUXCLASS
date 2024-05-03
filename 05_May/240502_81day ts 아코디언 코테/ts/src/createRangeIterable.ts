// 선언형 방식으로 interable 객체가 될수 있게끔

const createRangeIterable = (from: number, to: number) => {
  let currentValue = from;
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined;
      const done = value === undefined;
      return 
			value, done;
    },
  };
};
