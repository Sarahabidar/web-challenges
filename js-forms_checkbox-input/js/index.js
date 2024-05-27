console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successCheck = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccessMessage() {
  successCheck.style.display = block;
}
function hideSuccessMessage() {
  successCheck.style.display = none;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const tosElement = event.target.tos.checked;
  if (!tosElement) {
    showTosError();
    hideSuccessMessage();
    return;
  }
  hideTosError();
  showSuccessMessage();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert

  alert("Form submitted");
});
