var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  var cursorWidth = cursor.offsetWidth;
  var x = e.clientX - cursorWidth / 2;
  var y = e.clientY - cursorWidth / 2;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
