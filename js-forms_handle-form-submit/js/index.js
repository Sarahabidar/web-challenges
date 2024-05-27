console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //const age = Number(data.age);
  //const badness = Number(data.badness);
  const sum = Number(data.age) + Number(data.badness);
  console.log(sum);
  console.log(data.firstName);
  console.log(`The age-badness-sum of ${data.firstName} is ${sum}`);

  //const formElement = event.target.elements;

  //console.log(formElement.firstName.value);
});
