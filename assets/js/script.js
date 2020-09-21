const add_button = document.querySelector('.add-button');
count = 0;

add_button.addEventListener('click', increaseNumber);

function increaseNumber() {
  count += 1;

  add_button.innerHTML = count;
}
