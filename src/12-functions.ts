(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
  console.log(producto1.createdAt);
  console.log(producto1.size);
  console.log(producto1.stock);
  console.log(producto1.title);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P2', new Date(), 12);
  console.log(producto2);
  console.log(producto2.createdAt);
  console.log(producto2.size);
  console.log(producto2.stock);
  console.log(producto2.title);
})();
