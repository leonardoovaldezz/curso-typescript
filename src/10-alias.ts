(() => {
  type userID = string | number;
  let userId: userID;

  //literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //shirtSize = 's';

  function greeting(userId: userID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  greeting(1111, 'S');
  greeting('1111', 'XL');

})();
