const result = document.querySelector(".price-text");
const isZeroOrLess = (value) => value <= 0;
const setError = (
  errorElem,
  value,
  errorText = "Число должно быть больше нуля"
) => {
  if (isZeroOrLess(value) && value !== "") {
    errorElem.innerHTML = errorText;
  } else {
    errorElem.innerHTML = "";
  }
};

const changeValue = () => {
  const selectValue = getSelectItem();
  const harvestValue = document.getElementsByName("harvest")[0].value;
  const priceValue = document.getElementsByName("price")[0].value;
  const areaValue = document.getElementsByName("area")[0].value;

  const harvestError = document.querySelector(".error-harvest");
  const priceError = document.querySelector(".error-price");
  const areaError = document.querySelector(".error-area");

  if (
    !isZeroOrLess(harvestValue) &&
    !isZeroOrLess(selectValue) &&
    !isZeroOrLess(priceValue) &&
    !isZeroOrLess(areaValue)
  ) {
    const newResult = String(
      Number(harvestValue) * selectValue -
      Number(priceValue) * Number(areaValue)
    );

    result.innerHTML = newResult.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  } else {
    result.innerHTML = "";
  }

  setError(harvestError, harvestValue);
  setError(priceError, priceValue);
  setError(areaError, areaValue);
};

// Select
const select = document
  .querySelector("#culture")
  .addEventListener("change", changeValue);

const getSelectItem = () => {
  let sel = document.getElementById("culture").selectedIndex;
  let options = document.getElementById("culture").options;

  return Number(options[sel].value);
};

// Input
const allInput = document.querySelectorAll("input");

allInput.forEach((elem) => {
  elem.addEventListener("input", changeValue);
});



// Slider


let widthDisplay = window.innerWidth;
window.addEventListener('resize', (e) => {
  console.log(e.target.innerWidth)
  widthDisplay = e.target.innerWidth;
  return widthDisplay;
})
console.log(widthDisplay)


let imageBackground = document.getElementsByClassName('header')[0];
let imageBackground_2 = document.getElementsByClassName('background__image')[0];
let indexBackgroundImage = 1;
let timeSwap = 5;
let DeltaX = 0;
setTimeout(StartChangeHaderImage, timeSwap * 1000);


function StartChangeHaderImage() {
  imageBackground.style.backgroundPosition = "0px 0px";
  imageBackground_2.style.backgroundPosition = `${-widthDisplay}px 0px`;
  imageBackground.style.backgroundImage = `url("./img/header/images/bg-${indexBackgroundImage}.jpg")`;
  if (indexBackgroundImage == 3) indexBackgroundImage = 1;
  else indexBackgroundImage++;
  imageBackground_2.style.backgroundImage = `url("./img/header/images/bg-${indexBackgroundImage}.jpg")`;
  DeltaX = 0;
  ChangeHaderImage();
}

function ChangeHaderImage() {
  if (DeltaX <= widthDisplay - 20) {
    DeltaX += 20;
    setTimeout(ChangeHaderImage, 10);
    imageBackground.style.backgroundPosition = DeltaX + "px 0px";
    imageBackground_2.style.backgroundPosition = (DeltaX) + "px 0px";
  } else {
    setTimeout(StartChangeHaderImage, timeSwap * 1000);
  }
}
