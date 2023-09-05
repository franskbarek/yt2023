// Klasifikasi kategori ke dalam object of array
const emojiCategories = {
  populars: ["😘", "😭", "😊", "😂", "🥰", "❤️"],
  fantasy: ["🎁", "👽", "🦄", "🧙", "🧞", "👻"],
  travels: ["✈️", "🚗", "🚢", "🌍", "🌄", "🏞️"],
  animals: ["🐶", "🐱", "🐦", "🐸", "🐵", "🦁"],
};

// Init kategori saat ini
let currentCategory = null;

document.addEventListener("mousemove", (e) => {
  let root = document.querySelector("body");

  // Cek apakah kategori saat ini sudah dipilih
  if (!currentCategory) {
    // Jika belum, pilih kategori secara acak
    let categories = Object.keys(emojiCategories);
    currentCategory = categories[Math.floor(Math.random() * categories.length)];
  }

  // Pilih emoji secara acak dari kategori yang sedang dipilih
  let categoryEmojis = emojiCategories[currentCategory];
  let randomEmoji = categoryEmojis[Math.floor(Math.random() * categoryEmojis.length)];

  let x = e.offsetX;
  let y = e.offsetY;
  let size = Math.random() * 50;
  let initMin = 200;
  let initMax = 0;

  let newEmoji = document.createElement("span");
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

  // Ganti kategori setelah perubahan
  currentCategory = null;
});
