import { addproduct, calcStock, products } from "./product.service";

addproduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});
addproduct({
  title: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 10,
  size: 'M'
});

console.log(products);
const total = calcStock();
console.log(total);
