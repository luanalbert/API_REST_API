axios
  .get("http://localhost:3300/games")
  .then((res) => {
    var games = res.data;
    var tbody = document.getElementById("tr-games");

    tbody.classList.add("container-cards", "row");

    games.forEach((game) => {
      var card = document.createElement("div");
      var cardBody = document.createElement("div");
      var id = document.createElement("div");
      var image = document.createElement("img");
      var name = document.createElement("div");
      var year = document.createElement("div");
      var price = document.createElement("div");
      var action = document.createElement("div");

      image.setAttribute(
        "class",
        "image",
        "aling-center",
        "align-content-start"
      );
      card.classList.add("class", "card", "mt-2", "ml-2");
      cardBody.setAttribute("class", "card-body");
      name.setAttribute("class", "card-title");

      image.src = game.image;

      id.setAttribute("data-id", game.id);
      name.setAttribute("data-title", game.name);
      image.setAttribute("data-image", game.image);
      year.setAttribute("data-year", game.year);
      price.setAttribute("data-price", game.price);

      name.innerHTML = game.name;
      image.innerHTML = game.image;
      id.innerHTML = game.id;
      year.innerHTML = game.year;
      price.innerHTML = game.price;
      action.innerHTML = " ";

      var deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("id", "delete-btn");
      deleteBtn.setAttribute("type", "button");
      deleteBtn.setAttribute("data-toggle", "modal");
      deleteBtn.setAttribute("data-target", "#modalDelete");
      deleteBtn.classList.add("btn", "btn-group", "btn-primary");

      var contentBtnDel = document.createTextNode("Deletar");
      deleteBtn.appendChild(contentBtnDel);
      deleteBtn.addEventListener("click", function () {
        deleteGame(id);
        document.location.reload(true);
      });

      var editBtn = document.createElement("button");
      editBtn.setAttribute("id", "edit-btn");
      editBtn.setAttribute("type", "button");
      editBtn.setAttribute("data-toggle", "modal");
      editBtn.setAttribute("data-target", "#modalEdit");
      editBtn.classList.add("btn", "btn-group", "btn-danger", "btn");

      var contentBtnEdit = document.createTextNode("Editar");
      editBtn.appendChild(contentBtnEdit);
      editBtn.addEventListener("click", function () {
        loadForm(game);
      });

      var editButton = document.getElementById("create-button");
      editButton.addEventListener("click", function () {
        document.location.reload(true);
      });

      action.appendChild(deleteBtn);
      action.appendChild(editBtn);

      cardBody.appendChild(name);
      cardBody.appendChild(image);
      cardBody.appendChild(year);
      cardBody.appendChild(price);
      cardBody.appendChild(action);

      card.appendChild(cardBody);

      tbody.appendChild(card);
    });
  })
  .catch((error) => {
    console.log(error);
  });
