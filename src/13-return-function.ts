(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const printTotal = (prices: number[]): void => {
    let total = 0;
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([2, 4, 6, 2, 4]);

})();
