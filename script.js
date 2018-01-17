document.getElementById("input").onkeyup = function (e) {
  if (isNaN(parseInt(e.target.value))) return;
  const price = parseInt(e.target.value) * 0.01633986928;
  document.getElementById("price").innerHTML =  price + " Monero";
};
