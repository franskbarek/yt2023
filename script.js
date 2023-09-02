let listEmoji = ["🎁", "👽", "🦄", "😂", "🥰", "❤️", "🧙", "😎", "😍", "💋", "🧞", "👍", "🤭", "😸", "✨", "😁", "🥳", "🥵", "😏", "☕️", "🥂", "👻", "🏂"];

document.addEventListener("mousemove", (e) => {
  let root = document.querySelector("body");
  let newEmoji = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;
  let randomEmoji = listEmoji[Math.floor(Math.random() * listEmoji.length)];
  let size = Math.random() * 50;
  let initMax = 0;
  let initMin = 200;

  newEmoji.style.left = x + "px";
  newEmoji.style.top = y + "px";
  newEmoji.innerText = randomEmoji;

  let randomValue = Math.floor(Math.random() * (initMax + 1 - initMin) + initMin);

  newEmoji.style.fontSize = 5 + size + "px";
  newEmoji.style.transform = "translateX(" + randomValue + "px)";

  root.appendChild(newEmoji);

  setTimeout(() => {
    newEmoji.remove();
  }, 1000);
});
