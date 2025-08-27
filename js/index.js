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
// call buttons
const callBtns = document.getElementsByClassName("call-btns");
for(let callBtn of callBtns) {
  callBtn.addEventListener("click", function() {
    const subHeadBtn=callBtn.parentNode.parentNode.children[1].children[1].innerText
    const phoneBtn=callBtn.parentNode.parentNode.children[2].children[0].innerText
    alert("📞 Calling " + subHeadBtn + " " + phoneBtn + "...");


  });
}
