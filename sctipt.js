function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function error() {
    let err = document.getElementsByTagName('input');
    if (err.innerHTML === null) {
      err.style.border = "2px solid red"
    }
  }