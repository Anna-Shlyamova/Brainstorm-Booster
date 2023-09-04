document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector(".text-change1");
    const width = window.innerWidth;
    if (width > 768) {
        text.textContent = "Слева на экране есть";
    } else {
        text.textContent = "В верхней части экрана есть";
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector(".text-change2");
    const width = window.innerWidth;
    if (width > 768) {
        text.textContent = "Во-первых, это ";
    } else {
        text.textContent = "Это ";
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector(".text-change5");
    const width = window.innerWidth;
    if (width > 768) {
        text.textContent = "Сохранившиеся поля ввода окрашиваются зеленым на навигаторе слева. ";
    } else {
        text.textContent = "Сохранившиеся поля ввода окрашиваются зеленым на навигаторе в верхней части экрана. ";
    }
})