// Изменение фона инпута при вводе текста
const inputEmotion = document.querySelector(".emotions__self-value");
inputEmotion.addEventListener("input", () => {
  if (inputEmotion.value.length > 0) {
    inputEmotion.classList.add("emotions-bg");
  } else {
    inputEmotion.classList.remove("emotions-bg");
  }
})

// Ограничение выбора эмоций
function limitChecked() {
  const checkboxes = document.querySelectorAll(".emotions__input");
  const selfValue = document.querySelector(".emotions__self-value");
  const checkedCount = Array.from(checkboxes).filter(checkboxe => checkboxe.checked).length;
  let limit = 0;

  if (selfValue.value.length === 0){
    limit = 3;
  } else {
    limit = 2;
  }

  if (checkedCount === 3) {
    selfValue.readOnly = true;
    
  } else if (checkedCount === 2) {
    selfValue.readOnly = false;
  }

  if (checkedCount > limit) {
    alert("Можно выбрать не больше 3-х эмоций.")
    return false;
  }
}