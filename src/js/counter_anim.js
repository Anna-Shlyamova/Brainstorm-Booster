const arrText = [
    "Впиши за 3 минуты форматы и тематики для твоей идеи. Формат — это то, в каком виде она будет реализована. А тематика — любые идеи, которые могут быть воплощены в разных форматах.",
    "Теперь рандомно соедини форматы с тематиками. Не бойся совмещать несовместимое! Зафиксируй пары в заметках на полях и выпиши 3 наиболее понравившихся в столбцы идей.",
    "А теперь давай поймем, как это будет реализовано? Улучшай идеи: фантазируй, добавляй нестандартные детали, делай свою идею уникальной и не забывай про свою цель.",
];

const formatContent = document.getElementById("format");
const themesContent = document.getElementById("theme");
const textareaFormat = document.querySelector(".textarea-format");
const textareaThemes = document.querySelector(".textarea-themes");
const textareaIdeas = document.querySelector(".textarea-ideas");
const textareaComments = document.querySelector(".textarea-comments");
const button = document.querySelector(".counter__btn_next");
const hint = document.querySelector(".counter__hints--small");
const hintText = document.querySelector(".counter__hints_text--small");
const stickersBlock = document.querySelector(".counter__stikers");
const buttonBack = document.querySelector(".counter__btn_back");
const text = document.querySelector(".counter_span-text");
const blockButton = document.querySelector(".counter__btn_next");
const textChang = document.querySelector(".counter__chang-text");
const firstCounterText = document.querySelector(".counter__text-first");
const counterHints2 = document.querySelector(".counter_hints2");
const counterHints3 = document.querySelector(".counter_hints3");
const inputFields = document.querySelector(".counter__entry-fields");
let clickCount = 1;

text.innerHTML = clickCount;
button.addEventListener("click", () => {
    if (formatContent.value.length === 0 || themesContent.value.length === 0) {
        alert("Заполните поля!");
        return;
    }
    if (clickCount === 1) {
        textareaIdeas.classList.add("show");
        textareaIdeas.style.flexBasis = "100%";
        textareaFormat.style.marginRight = "10px";
        textareaIdeas.style.marginLeft = "10px";
        if (window.matchMedia("(max-width: 435px)").matches) {
            inputFields.style.width = "648px";
        }
        textChang.innerHTML = arrText[1];
        firstCounterText.classList.add("block-none");
        counterHints2.classList.add("counter__stikers_show");
        buttonBack.classList.add("_btn_back");
        clickCount++;
    } else if (clickCount === 2) {
        textareaFormat.style.flexBasis = "0";
        textareaFormat.style.margin = "0";
        textareaFormat.style.padding = "0";
        textareaThemes.style.flexBasis = "0";
        textareaThemes.style.padding = "0";
        if (window.matchMedia("(max-width: 435px)").matches) {
            inputFields.style.width = "498px";
        }
        if (window.matchMedia("(max-width: 1300px)").matches) {
            textareaIdeas.style.flexBasis = "57%";
        } else {
            textareaIdeas.style.flexBasis = "45%";
        }
        if (window.matchMedia("(max-width: 435px)").matches) {
            textareaIdeas.style.marginRight = "10px";
        } else {
            textareaIdeas.style.marginRight = "20px";
        }
        textareaFormat.style.opacity = "0";
        textareaThemes.style.opacity = "0";
        textareaComments.classList.add("show");
        button.innerHTML = "сохранить";
        button.classList.add("counter_btn-black");

        textChang.innerHTML = arrText[2];
        counterHints3.classList.add("counter__stikers_show");
        clickCount++;
    } else if (clickCount === 3) {
        button.classList.add("save-btn");
        const idea1 = document.getElementById("idea1").value.trim();
        const idea2 = document.getElementById("idea2").value.trim();
        const idea3 = document.getElementById("idea3").value.trim();
        const ideaDesc1 = document.getElementById("idea-desc1").value.trim();
        const ideaDesc2 = document.getElementById("idea-desc2").value.trim();
        const ideaDesc3 = document.getElementById("idea-desc3").value.trim();


        if (
            idea1.length == 0
            || idea2.length == 0
            || idea3.length == 0
            || ideaDesc1.length == 0
            || ideaDesc2.length == 0
            || ideaDesc3.length == 0
        ) {
            alert("Заполните идеи и их описание!");
            return;
        } else {
            myData.counter = [];
            myData.counter.push(
                idea1,
                idea2,
                idea3,
                ideaDesc1,
                ideaDesc2,
                ideaDesc3
            );
            summaryChange();
        }
    }
    text.innerHTML = clickCount;
});

buttonBack.addEventListener("click", () => {
    if (clickCount === 3) {
        textareaFormat.style.flexBasis = "100%";
        textareaThemes.style.flexBasis = "100%";
        textareaFormat.style.marginRight = "10px";
        textareaIdeas.style.flexBasis = "100%";
        if (window.matchMedia("(max-width: 435px)").matches) {
            inputFields.style.width = "648px";
        }
        textareaIdeas.style.marginRight = "0";
        textareaFormat.style.opacity = "1";
        textareaThemes.style.opacity = "1";
        button.classList.remove("counter_btn-black");
        button.classList.remove("save-btn");
        textareaComments.classList.remove("show");
        button.innerHTML = "далее";
        textChang.innerHTML = arrText[1];
        counterHints3.classList.remove("counter__stikers_show");
        clickCount--;
    } else if (clickCount === 2) {
        textareaIdeas.classList.remove("show");
        textareaIdeas.style.marginLeft = "0";
        textareaIdeas.style.padding = "0";
        if (window.matchMedia("(max-width: 435px)").matches) {
            inputFields.style.width = "432px";
        }
        if (window.matchMedia("(max-width: 435px)").matches) {
            textareaFormat.style.marginRight = "10px";
        } else {
            textareaFormat.style.marginRight = "20px";
        }
        textareaIdeas.style.flexBasis = "0";
        buttonBack.classList.remove("_btn_back");
        textChang.innerHTML = arrText[0];
        counterHints2.classList.remove("counter__stikers_show");
        clickCount--;
    }
    text.innerHTML = clickCount;
});

const showStickers = () => {
    const win = window.matchMedia("(max-width: 960px)");
    if (win.matches) {
        hintText.style.display = "none";
        hint.style.display = "none";
        stickersBlock.style.display = "block";
    }
};
hintText.addEventListener("click", showStickers);
hint.addEventListener("click", showStickers);

stickersBlock.addEventListener("click", () => {
    const win = window.matchMedia("(max-width: 960px)");
    if (win.matches) {
        hintText.style.display = "block";
        hint.style.display = "block";
        stickersBlock.style.display = "none";
    }
});
