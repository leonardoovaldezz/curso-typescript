(async () => {
  const myCart: any[] = [];
  const products: any[] = [];
  const limit: number = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET' // Corregido "mehtod" a "method"
    });
    const data = await rta.json(); // Corregido "parseJson" a "json"
    products.push(...data); // Utilizamos "push" para agregar elementos al array "products"
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) { // Cambiado "const" a "let" en el bucle for
      total += products[i].price; // Corregido "prize" a "price"
    }
    return total;
  }

  function addProduct(index: number) {
    if (getTotal() <= limit) { // Corregido "getTotal" a "getTotal()"
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);

  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = `${person.name} ${person.lastName} ${limit}`; // Corregido la concatenación de la respuesta
  console.log(rta);
})();
