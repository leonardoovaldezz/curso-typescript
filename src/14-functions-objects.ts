(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'leo@mail.com',
    password: 1234
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addproduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes

  }) => {
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
})();
