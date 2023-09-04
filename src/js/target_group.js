const addButton = document.getElementById('addTG'); 
const block = document.getElementById('blockTG1');
let tGElementCount = block.childElementCount;

function deleteTG(button, block){
    block.lastChild.remove();
    tGElementCount--;
    if(tGElementCount < 3){
        button.classList.remove('target-group__btn--red_empty');
    }
    if(tGElementCount === 1){
        block.children[0].children[4].children[0].textContent = `Что?`;
    }
}

const addInput = (block, addButton) =>{
    if(tGElementCount < 3){
        block.children[0].children[4].children[0].textContent = `1 Что?`;
        tGElementCount++;
        let block1 = document.createElement("div");
        block1.setAttribute("class", "target-group__input-table target-group__input-table--margin");
        block1.innerHTML = block.children[0].innerHTML;
        let tg_delete = document.createElement('img');
        tg_delete.src= 'assets/images/general/X.svg';
        tg_delete.style.position = 'absolute';
        tg_delete.style.top = '-17px';
        tg_delete.style.right = '-20px';
        tg_delete.classList.add("target-group__btn_back");
        tg_delete.addEventListener('click',() => deleteTG(addButton, block));
        block1.children[0].setAttribute("class", `target-group__input-field target-group__input-field--say${tGElementCount}`);
        block1.children[0].setAttribute("onclick", `sizerFields('target-group', '__input-field--say${tGElementCount}')`);
        block1.children[1].setAttribute("class", `target-group__input-field target-group__input-field--think${tGElementCount}`);
        block1.children[1].setAttribute("onclick", `sizerFields('target-group', '__input-field--think${tGElementCount}')`);
        block1.children[2].setAttribute("class", `target-group__input-field target-group__input-field--do${tGElementCount}`);
        block1.children[2].setAttribute("onclick", `sizerFields('target-group', '__input-field--do${tGElementCount}')`);
        block1.children[3].setAttribute("class", `target-group__input-field target-group__input-field--feel${tGElementCount}`);
        block1.children[3].setAttribute("onclick", `sizerFields('target-group', '__input-field--feel${tGElementCount}')`);
        block1.children[0].children[0].id = "say"+ tGElementCount;
        block1.children[0].children[0].setAttribute(
            "oninput",
            `countChars('say${tGElementCount}')`
        );
        block1.children[0].children[1].id = "say"+ tGElementCount +"_out";
        block1.children[0].children[1].children[0].id = "count_say" + tGElementCount;
        block1.children[0].children[1].children[0].textContent = '0'
        block1.children[0].children[1].style.display = 'none'
        block1.children[1].children[0].id = "think"+ tGElementCount;
        block1.children[1].children[0].setAttribute(
            "oninput",
            `countChars('think${tGElementCount}')`
        );
        block1.children[1].children[1].id = "think"+ tGElementCount +"_out";
        block1.children[1].children[1].children[0].id = "count_think" + tGElementCount;
        block1.children[1].children[1].children[0].textContent = '0'
        block1.children[1].children[1].style.display = 'none'
        block1.children[2].children[0].id = "do"+ tGElementCount;
        block1.children[2].children[0].setAttribute(
            "oninput",
            `countChars('do${tGElementCount}')`
        );
        block1.children[2].children[1].id = "do"+ tGElementCount +"_out";
        block1.children[2].children[1].children[0].id = "count_do" + tGElementCount;
        block1.children[2].children[1].children[0].textContent = '0'
        block1.children[2].children[1].style.display = 'none'
        block1.children[3].children[0].id = "feel"+ tGElementCount;
        block1.children[3].children[0].setAttribute(
            "oninput",
            `countChars('feel${tGElementCount}')`
        );
        block1.children[3].children[1].id = "feel"+ tGElementCount +"_out";
        block1.children[3].children[1].children[0].id = "count_feel" + tGElementCount;
        block1.children[3].children[1].children[0].textContent = '0'
        block1.children[3].children[1].style.display = 'none'
        block1.children[4].id = "round"+ tGElementCount;
        block1.children[4].children[0].textContent = `${tGElementCount} Что?`;
        block1.appendChild(tg_delete);
        block.appendChild(block1);
        if(tGElementCount == 3) {
            addButton.classList.add('target-group__btn--red_empty');
        }
    }
}
addButton.addEventListener('click', () => addInput(block, addButton));


