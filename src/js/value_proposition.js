const addButtonVP = document.getElementById('addVP'); 
const blockVP = document.getElementById('blockVP1');
let valuePropElemCount = blockVP.childElementCount;

function deleteValueProp(block, button){
    block.lastChild.remove();
    valuePropElemCount--;
    if(valuePropElemCount < 3){
        button.classList.remove('value-proposition__btn--red_empty');
    }
    if(valuePropElemCount === 1){
        blockVP.children[0].children[3].children[0].textContent = `ЦА`;
    }
}

const addValueProp = (blockVP, addButtonVP) =>{
    if(valuePropElemCount < 3){
        blockVP.children[0].children[3].children[0].textContent = `1 ЦА`;
        valuePropElemCount++;
        let block1 = document.createElement("div");
        block1.setAttribute("class", "value-proposition__input-table value-proposition__input-table--margin");
        block1.innerHTML = blockVP.children[0].innerHTML;
        let vp_delete = document.createElement('img');
        vp_delete.src= 'assets/images/general/X.svg';
        vp_delete.style.position = 'absolute';
        vp_delete.style.top = '-17px';
        vp_delete.style.right = '-20px';
        vp_delete.classList.add("value-proposition__btn_back");
        vp_delete.addEventListener('click', () => deleteValueProp(blockVP, addButtonVP));
        block1.children[0].setAttribute("class", `value-proposition__input-field value-proposition__input-field--first value-proposition__input-field--left${valuePropElemCount}`);
        block1.children[0].setAttribute("onclick", `sizerFields('value-proposition', '__input-field--left${valuePropElemCount}')`);
        block1.children[1].setAttribute("class", `value-proposition__input-field value-proposition__input-field--right-up${valuePropElemCount}`);
        block1.children[1].setAttribute("onclick", `sizerFields('value-proposition', '__input-field--right-up${valuePropElemCount}')`);
        block1.children[2].setAttribute("class", `value-proposition__input-field value-proposition__input-field--right-down${valuePropElemCount}`);
        block1.children[2].setAttribute("onclick", `sizerFields('value-proposition', '__input-field--right-down${valuePropElemCount}')`)
        block1.children[0].children[0].id = "left"+ valuePropElemCount;
        block1.children[0].children[0].setAttribute(
            "oninput",
            `countChars('left${valuePropElemCount}')`
        );
        block1.children[0].children[1].id = "left"+ valuePropElemCount +"_out";
        block1.children[0].children[1].children[0].id = "count_left" + valuePropElemCount;
        block1.children[0].children[1].children[0].textContent = '0'
        block1.children[0].children[1].style.display = 'none'
        block1.children[1].children[0].id = "right-up"+ valuePropElemCount;
        block1.children[1].children[0].setAttribute(
            "oninput",
            `countChars('right-up${valuePropElemCount}')`
        );
        block1.children[1].children[1].id = "right-up"+ valuePropElemCount +"_out";
        block1.children[1].children[1].children[0].id = "count_right-up" + valuePropElemCount;
        block1.children[1].children[1].children[0].textContent = '0'
        block1.children[1].children[1].style.display = 'none'
        block1.children[2].children[0].id = "right-down"+ valuePropElemCount;
        block1.children[2].children[0].setAttribute(
            "oninput",
            `countChars('right-down${valuePropElemCount}')`
        );
        block1.children[2].children[1].id = "right-down"+ valuePropElemCount +"_out";
        block1.children[2].children[1].children[0].id = "count_right-down" + valuePropElemCount;
        block1.children[2].children[1].children[0].textContent = '0'
        block1.children[2].children[1].style.display = 'none'
        block1.children[3].id = "round"+ valuePropElemCount;
        block1.children[3].children[0].textContent = `${valuePropElemCount} ЦА`;
        block1.appendChild(vp_delete);
        blockVP.appendChild(block1);
        if(valuePropElemCount == 3) {
            addButtonVP.classList.add('value-proposition__btn--red_empty');
        }
    }
}
addButtonVP.addEventListener('click', () => addValueProp(blockVP, addButtonVP));