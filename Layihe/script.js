var counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

var counter1 = 4;

setInterval(function () {
  document.getElementById("radio" + counter1).checked = true;
  counter1++;
  if (counter1 > 6) {
    counter1 = 4;
  }
}, 7000);


