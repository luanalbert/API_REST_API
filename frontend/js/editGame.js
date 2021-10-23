function loadForm(game) {
  var id = game.id;
  var title = game.name;
  var image = game.image;
  var year = game.year;
  var price = game.price;

  document.getElementById("idEdit").value = id;
  document.getElementById("titleEdit").value = title;
  document.getElementById("imageEdit").value = image;
  document.getElementById("yearEdit").value = year;
  document.getElementById("priceEdit").value = price;
}

function updateGame() {
  var idInput = document.getElementById("idEdit");
  var titleInput = document.getElementById("titleEdit");
  var imageInput = document.getElementById("imageEdit");
  var yearInput = document.getElementById("yearEdit");
  var priceInput = document.getElementById("priceEdit");

  var game = {
    name: titleInput.value,
    image: imageInput.value,
    year: yearInput.value,
    price: priceInput.value,
  };

  var id = idInput.value;

  axios
    .put("http://localhost:3300/game/" + id, game)
    .then((res) => {
      if (res.status == 200) {
        //alert("Game atualizado!!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
