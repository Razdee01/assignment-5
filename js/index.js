function getElement(id) {
  return document.getElementById(id);
}
const heart = getElement("heart");
const emptyHearts = document.getElementsByClassName("empty-heart");
for(let emptyHeart of emptyHearts) {
  emptyHeart.addEventListener("click", function() {
    let currentHeart = Number(heart.innerText);
    currentHeart= currentHeart + 1;
    heart.innerText = currentHeart;
  });
}

