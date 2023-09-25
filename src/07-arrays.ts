(() => {
  let prices = [1, 2, 3, 6, 3, 5, 2, 56, 2];
  //prices.push('asas');
  //prices.push(true);
  //prices.push({});
  prices.push(1363762);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 4, 33, 5, 5];
  numbers.map(item => item * 2);

})();
