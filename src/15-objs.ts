(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addproduct = (data: Product) => {
    products.push(data);
  }

  addproduct({
    title: 'pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });
  addproduct({
    title: 'pro2',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'M'
  });
  console.log(products);
  products.push({
    title: 'pro3',
    createdAt: new Date(1995, 1, 1),
    stock: 16,
    size: 'S'
  });
})();
