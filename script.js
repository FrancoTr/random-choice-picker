const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus(); //automatically focus on the textarea

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
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
