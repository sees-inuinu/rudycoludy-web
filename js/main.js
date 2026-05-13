const storyList = document.getElementById("storyList");

Object.entries(stories).forEach(([id, story]) => {
  const cardHtml = `
    <a href="story.html?id=${id}" class="story-card">

      <div class="image-box">
        <img src="${story.image}" alt="${story.title}">
      </div>

      <div class="story-info">

        <div>
          <h2>${story.title}</h2>
          <p>${story.description}</p>
        </div>

        <span>→</span>

      </div>

    </a>
  `;

  storyList.insertAdjacentHTML("beforeend", cardHtml);
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
