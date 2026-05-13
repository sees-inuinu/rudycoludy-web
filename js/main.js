const storyCards = document.querySelectorAll(".story-card");

storyCards.forEach((card) => {
  const id = card.dataset.id;
  const story = stories[id];

  if (!story) return;

  const title = card.querySelector("h2");
  const description = card.querySelector("p");
  const image = card.querySelector("img");

  card.href = `story.html?id=${id}`;

  if (title) title.textContent = story.title;
  if (description) description.textContent = story.description;

  if (image) {
    image.src = story.image;
    image.alt = story.title;
  }
});

const randomImage = document.getElementById("randomImage");

if (randomImage) {
  const randomImages = [
    "images/random/1.jpg",
    "images/random/2.jpg",
    "images/random/3.jpg",
    "images/random/4.jpg",
    "images/random/5.jpg",
    "images/random/6.jpg",
    "images/random/7.jpg",
    "images/random/8.jpg",
    "images/random/9.jpg",
  ];

  const random = randomImages[Math.floor(Math.random() * randomImages.length)];

  randomImage.src = random;
}

const currentDate = document.getElementById("currentDate");

if (currentDate) {
  const now = new Date();

  const year = now.getFullYear();

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const day = String(now.getDate()).padStart(2, "0");

  currentDate.textContent = `${year}.${month}.${day}`;
}
