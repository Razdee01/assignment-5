function getElement(id) {
  return document.getElementById(id);
}
const heart = getElement("heart");
const emptyHearts = document.getElementsByClassName("empty-heart");
for (let emptyHeart of emptyHearts) {
  emptyHeart.addEventListener("click", function () {
    let currentHeart = Number(heart.innerText);
    currentHeart = currentHeart + 1;
    heart.innerText = currentHeart;
  });
}
// call buttons
const callBtns = document.getElementsByClassName("call-btns");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    // coins1
    const coins1 = getElement("coin-id");
    let totalCoin = Number(coins1.innerText);
    if (totalCoin <= 0) {
      alert(
        "You dont have enough coins. To make a call you atleast need 20 coins."
      );
      return;
    }
    const subHeadBtn =
      callBtn.parentNode.parentNode.children[1].children[1].innerText;
    const phoneBtn =
      callBtn.parentNode.parentNode.children[2].children[0].innerText;
    alert("📞 Calling " + subHeadBtn + " " + phoneBtn + "...");
    const heading =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;

    const historyContainer = getElement("history-container");
    const newDiv = document.createElement("div");
    const now = new Date();
    const local = now.toLocaleTimeString();
    newDiv.innerHTML = `
    <div class=" bg-[#d4d1d1] md:flex justify-between items-center p-4 rounded-lg mb-3">
    <div >
      <h2 class="font-semibold">${heading}</h2>
      <p>${phoneBtn}</p>
    </div>
    <div>
      <p>${local}</p>
    </div>
    

  </div>`;
    historyContainer.append(newDiv);
    // coin2 function
    const coins = getElement("coin-id");
    let currentcoin = Number(coins.innerText);
    currentcoin = currentcoin - 20;
    coins.innerText = currentcoin;

    getElement("clear-btn").addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });
}
