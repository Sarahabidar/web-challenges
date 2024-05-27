console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
newPost.classList.add("post");

const newText = document.createElement("p");
newText.classList.add("post__content");
newText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username";

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";

newButton.addEventListener("click", handleLikeButtonClick);

document.body.append(newPost);
newPost.append(newText, newFooter);
newFooter.append(newSpan, newButton);
