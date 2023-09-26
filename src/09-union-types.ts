(() => {
  let userId: string | number;
  userId = 1223;
  userId = 'fhgh';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('leonardo');
  greeting(12.2432);
})();
