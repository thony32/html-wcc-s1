const btnSurprise = document.getElementById("btn-surprise");
  const btnBack = document.getElementById("btn-back");
  const baobab = document.getElementById("baobab");
  const sun = document.getElementById("sun");
  const btnLight = document.getElementById("btn-light");
  const btnDark = document.getElementById("btn-dark");
  const themes = document.getElementById("themes");
  const btnThird = document.getElementById("third-content");
  const btnSecond = document.getElementById("btn-second");
  const leftContent = document.getElementById("left-content");
  const rightContent = document.getElementById("right-content");
  const body = document.getElementById("body");

  btnSurprise.addEventListener("click", function () {
    baobab.classList.add("xl:translate-x-[40%]");
    baobab.classList.add("-translate-x-[35%]");
    leftContent.classList.remove("opacity-0");
    rightContent.classList.add("opacity-0");
    sun.classList.add("-translate-x-[30%]");
    sun.classList.add("translate-y-[10%]");
    themes.classList.add("right-0");
    themes.classList.remove("left-0");
  });

  btnBack.addEventListener("click", function () {
    baobab.classList.remove("xl:translate-x-[40%]");
    baobab.classList.remove("-translate-x-[35%]");
    rightContent.classList.remove("opacity-0");
    leftContent.classList.add("opacity-0");
    sun.classList.remove("-translate-x-[30%]");
    sun.classList.remove("translate-y-[10%]");
    themes.classList.remove("right-0");
    themes.classList.add("left-0");
  });

  // * change sky color

  btnLight.addEventListener("click", function () {
    body.classList.add("bg-white");
    body.classList.remove("bg-gray-500");
    sun.classList.remove("!translate-y-[50%]");
  });
  btnDark.addEventListener("click", function () {
    body.classList.remove("bg-white");
    body.classList.add("bg-gray-500");
    sun.classList.add("!translate-y-[50%]");
  });