function createGame() {
  var nameInput = document.getElementById("name");
  var imageInput = document.getElementById("image");
  var yearInput = document.getElementById("year");
  var priceInput = document.getElementById("price");

  var game = {
    name: nameInput.value,
    image: imageInput.value,
    year: yearInput.value,
    price: priceInput.value,
  };

  axios
    .post("http://localhost:3300/game/create", game)
    .then((res) => {
      if (res.status == 200) {
        //alert("Game cadastrado!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
