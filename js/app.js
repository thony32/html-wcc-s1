window.addEventListener("load", function() {
    setTimeout(function() {
      var loader = document.getElementById("loader");
      loader.style.display = "none";
      document.getElementById("content").style.display = "block";
    },5000); 
  });
  