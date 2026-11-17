const dialog = document.querySelector("#reading-dialog");
const dialogImage = dialog.querySelector(".dialog-image");
const dialogSource = dialog.querySelector(".source");
const dialogTitle = dialog.querySelector("#dialog-title");
const dialogDetail = dialog.querySelector(".dialog-detail");

for (const trigger of document.querySelectorAll(".reading-trigger")) {
  const card = trigger.closest(".reading-card");
  const image = card.querySelector("img");
  const source = card.querySelector(".source");
  const detail = card.querySelector(".reading-detail");

  trigger.addEventListener("click", () => {
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogSource.textContent = source.textContent;
    dialogTitle.textContent = trigger.textContent;
    dialogDetail.replaceChildren(...Array.from(detail.children, (item) => item.cloneNode(true)));
    dialog.showModal();
    dialog.scrollTop = 0;
  });

  card.classList.add("interactive");
}

dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right
    || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) dialog.close();
});
