const boutons = document.querySelectorAll("button");

boutons.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    alert("Commande ajoutée !");
  });
});
