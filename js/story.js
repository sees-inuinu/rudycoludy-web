const params = new URLSearchParams(window.location.search);

const storyId = params.get("id") || "1";
const story = stories[storyId] || stories[1];

const storyTitle = document.getElementById("storyTitle");
const storyDescription = document.getElementById("storyDescription");
const chatBox = document.getElementById("chatBox");
const storyGallery = document.getElementById("storyGallery");

const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

let galleryIndex = 0;

storyTitle.innerHTML = `${story.title} <span>＋</span>`;
storyDescription.innerHTML = `${story.description} <span>＋</span>`;

chatBox.innerHTML = "";

storyGallery.innerHTML = "";

if (story.gallery && story.gallery.length > 0) {
  story.gallery.forEach((image) => {
    const galleryHtml = `
      <div class="story-gallery-image">
        <img src="${image}" alt="">
      </div>
    `;

    storyGallery.insertAdjacentHTML("beforeend", galleryHtml);
  });
}

function updateGallerySlider() {
  storyGallery.style.transform = `translateX(-${galleryIndex * 100}%)`;
}

if (galleryPrev && galleryNext && story.gallery) {
  galleryPrev.addEventListener("click", () => {
    galleryIndex--;

    if (galleryIndex < 0) {
      galleryIndex = story.gallery.length - 1;
    }

    updateGallerySlider();
  });

  galleryNext.addEventListener("click", () => {
    galleryIndex++;

    if (galleryIndex >= story.gallery.length) {
      galleryIndex = 0;
    }

    updateGallerySlider();
  });
}

story.chats.forEach((chat) => {
  if (chat.type === "subtitle") {
    const subtitleHtml = `
      <div class="chat-subtitle">
        <span>${chat.text}</span>
      </div>
    `;

    chatBox.insertAdjacentHTML("beforeend", subtitleHtml);

    return;
  }

  const isRudy = chat.character === "rudy";

  const sideClass = isRudy ? "left rudy" : "right colune";

  const nameClass = isRudy ? "chat-name" : "chat-name-colune";

  const messageHtml = `
    <div class="chat-message ${sideClass}">

      ${
        isRudy
          ? `<img class="chat-icon" src="${chat.icon}" alt="${chat.name}">`
          : ""
      }

      <div class="chat-body">

        <div class="${nameClass}">
          ${chat.name}
        </div>

        <div class="chat-bubble">
          ${chat.text}
        </div>

      </div>

      ${
        !isRudy
          ? `<img class="chat-icon" src="${chat.icon}" alt="${chat.name}">`
          : ""
      }

    </div>
  `;

  chatBox.insertAdjacentHTML("beforeend", messageHtml);
});
