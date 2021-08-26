const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus(); //automatically focus on the textarea

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    //it clears the input after 10ms
    setTimeout(() => {
      e.target.value - "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = ""; //clears the tag elements

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagsEl.classList.add("tag");
    tagEl.innerText = tag; //tag is the current element on the tags array
    tagsEl.appendChild(tagEl); //adds individual tags to the tags element
  });
}

function randomSelect() {
  const times = 30; //number of times an element is highlighted
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      //waits 100ms and unhighlight the random tag
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval); //stops the random shuffle

    setTimeout(() => {
      const randomTag = pickRandomTag(); //selects the last random tag
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)]; //random tag
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
