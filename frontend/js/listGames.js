axios
  .get("http://localhost:3300/games")
  .then((res) => {
    var games = res.data;
    var tbody = document.getElementById("tr-games");

    games.forEach((game) => {
      var tr = document.createElement("tr");
      var id = document.createElement("td");
      var name = document.createElement("td");
      var year = document.createElement("td");
      var price = document.createElement("td");
      var action = document.createElement("td");

      id.setAttribute("data-id", game.id);
      name.setAttribute("data-title", game.name);
      year.setAttribute("data-year", game.year);
      price.setAttribute("data-price", game.price);

      name.innerHTML = game.name;
      id.innerHTML = game.id;
      year.innerHTML = game.year;
      price.innerHTML = game.price;
      action.innerHTML = " ";

      var deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("id", "delete-btn");
      deleteBtn.classList.add("btn", "btn-group", "btn-primary");

      var contentBtnDel = document.createTextNode("Deletar");
      deleteBtn.appendChild(contentBtnDel);
      deleteBtn.addEventListener("click", function () {
        deleteGame(id);
        document.location.reload(true);
      });

      var editBtn = document.createElement("button");
      editBtn.setAttribute("id", "edit-btn");
      editBtn.classList.add("btn", "btn-group", "btn-danger");

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

      tr.appendChild(id);
      tr.appendChild(name);
      tr.appendChild(year);
      tr.appendChild(price);
      tr.appendChild(action);

      tbody.appendChild(tr);
    });
  })
  .catch((error) => {
    console.log(error);
  });
