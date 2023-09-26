(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null;
  let myUndefined: undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'asghd'


  function hi(name: string | null) {
    let hello = 'hola';
    if (name) {
      hello += name.toLocaleLowerCase();
    } else {
      hello += 'nobody'
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'hola';

    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('leo');
  hi(null);

  hiV2('val');
  hiV2(null);
})();
