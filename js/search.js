let searchBtn = document.querySelector(".header__btn");
let cancelBtn = document.querySelector(".header__cancel");
let searchForm = document.querySelector(".header__search-form");
let headerInput = document.querySelector(".header__input");

searchBtn.onclick = (event) => {
  event.preventDefault();
  searchForm.classList.add("activated");
  searchBtn.classList.add("activated");
  cancelBtn.classList.add("activated");
  headerInput.classList.add("activated");
}

cancelBtn.onclick = (event) => {
  event.preventDefault();
  searchForm.classList.remove("activated");
  searchBtn.classList.remove("activated");
  cancelBtn.classList.remove("activated");
  headerInput.classList.remove("activated");
}
