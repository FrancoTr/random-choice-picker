const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus(); //automatically focus on the textarea

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input.split(",");
}
