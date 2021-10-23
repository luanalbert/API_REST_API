function deleteGame(listItem) {
  var id = listItem.getAttribute("data-id");
  axios
    .delete("http://localhost:3300/game/" + id)
    .then((res) => {
      //fazer um modal com a mensagem game deletado
    })
    .catch((err) => {
      console.log(err);
    });
}

