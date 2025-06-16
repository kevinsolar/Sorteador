const inputContainer = document.querySelector(".input-container");

inputContainer.addEventListener("mouseover", () => {
  inputContainer.classList.toggle('active')
});
inputContainer.addEventListener('click', () => {
  inputContainer.classList.add('active');
})