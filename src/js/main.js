
// Функция счетчик
function countChars(id) {
  const count = document.getElementById(id).value.length;
  if (count > 0) {
    document.getElementById(`${id}_out`).style.display = 'inline';
    document.getElementById("count_" + id).innerText = count;
    if (count === 1000) {
    document.getElementById("count_" + id).style.color = '#FC4545';
    document.getElementById(id + "_out").style.color = '#FC4545';
    } else {
      document.getElementById("count_" + id).style.color = '#ACACAC';
      document.getElementById(id + "_out").style.color = '#ACACAC';
    }
  } else {
    document.getElementById(`${id}_out`).style.display = 'none';
  }
}

//развертывание подсказки
function sizerHint(id){
  const mq = window.matchMedia('(max-width: 960px)');
  if (mq.matches) {
    document.getElementsByClassName(`${id}__hints`)[0].style.display = 'block';
    document.getElementsByClassName(`${id}__hints--small`)[0].style.display = 'none';
    document.getElementsByClassName(`${id}__hints_text--small`)[0].style.display = 'none';
    document.getElementsByClassName(`${id}__tape`)[0].style.display = 'block';
  }
}

//свертывание подсказки
function closerHint(id){
  const mq = window.matchMedia('(max-width: 960px)');
  if (mq.matches) {
    document.getElementsByClassName(`${id}__hints`)[0].style.display = 'none';
    document.getElementsByClassName(`${id}__hints--small`)[0].style.display = 'block';
    document.getElementsByClassName(`${id}__hints_text--small`)[0].style.display = 'inline';
    document.getElementsByClassName(`${id}__tape`)[0].style.display = 'none';
  }
}

//уменьшение полей в мобильной версии
function closerFields(block,  id){
  const field = document.querySelector(`.${block}${id}`);
  const parentBlock = field.parentElement;
  const saveButton = document.querySelector(`.${block}__btn`);
  const addButton = document.querySelector(`.${block}__btn--red`);
  const readyButton = document.querySelector(`.${block}__btn--ready`);
  for(let node of parentBlock.children){
    if(node != field){
      node.style.display = 'flex';
    }
  }
  field.style.width= null;
  field.style.height = null;
  saveButton.style.display = 'flex';
  addButton.style.display = 'flex';
  readyButton.style.display = 'none';
}

//увеличение полей  в мобильной версии
function sizerFields(block, id){
  const mobileSize = window.matchMedia('(max-width: 435px)');
  if(mobileSize.matches){
    const field = document.querySelector(`.${block}${id}`);
    const parentBlock = field.parentElement;
    const saveButton = document.querySelector(`.${block}__btn`);
    const addButton = document.querySelector(`.${block}__btn--red`);
    const readyButton = document.querySelector(`.${block}__btn--ready`);
    for(let node of parentBlock.children){
      if(node != field){
        node.style.display = 'none';
      }
    }
    field.style.width = '280px';
    field.style.height = '217px';
    saveButton.style.display = 'none';
    addButton.style.display = 'none';
    readyButton.style.display = 'flex';
    readyButton.addEventListener('click', () => closerFields(block, id));
  }
}

//Смена последнего окна
function summaryChange() {
  let flag = 0;
  for(let key in myData){
    if(myData[key].length === 0 && key !== 'results'){
      flag = 1;
    }
  }
  if(!flag){
    let sum = 'summary';
    document.querySelector(`.${sum}__header`).textContent = 'Твоя креативная сессия закончена.';
    document.querySelector(`.${sum}__text`).textContent = 'Можешь скачать получившийся документ и продолжай реализовывать созданные идеи.';
    if(!window.matchMedia('(max-width: 430px)').matches){
      document.querySelector(`.${sum}__luck`).style.display = 'block';
    }
    document.querySelector(`.${sum}__btn`).style.display = 'none';
    document.querySelector('.save__btn').style.display = 'block';
    document.querySelector(`.${sum}__btn`).id = 'btn-save';
    document.querySelector(`.${sum}__marker`).style.display = 'block';
    document.querySelector(`.${sum}__hints`).style.backgroundColor = '#FFEC44';
    document.querySelector(`.${sum}__hints`).children[0].textContent = 'Спасибо тебе за отличную работу! Надеемся, что этот опыт был для тебя ценен!';
    if(window.matchMedia('(max-width: 1440px)').matches){
      document.querySelector(`.${sum}__hints`).style.paddingLeft = '35px';
      document.querySelector(`.${sum}__hints`).style.paddingRight = '20px';
      document.querySelector(`.${sum}__hints`).style.paddingTop = '60px';
    }
    if(window.matchMedia('(max-width: 1300px)').matches){
      console.log('jo');
      document.querySelector(`.${sum}__hints`).style.paddingLeft = '15px';
      document.querySelector(`.${sum}__hints`).style.paddingRight = '15px';
      document.querySelector(`.${sum}__hints`).style.paddingTop = '40px';
    }
    if(window.matchMedia('(max-width: 960px)').matches){
      document.querySelector(`.${sum}__hints`).style.paddingLeft = '15px';
      document.querySelector(`.${sum}__hints`).style.paddingRight = '15px';
      document.querySelector(`.${sum}__hints`).style.paddingTop = '30px';
    }
    if(window.matchMedia('(max-width: 435px)').matches){
      document.querySelector(`.${sum}__hints`).style.paddingLeft = '15px';
      document.querySelector(`.${sum}__hints`).style.paddingRight = '5px';
      document.querySelector(`.${sum}__hints`).style.paddingTop = '20px';
    }
  }
}

//Кнопка ОК в последнем блоке
const blockMap = {
'target': {
  block: 'block1'
},
'audience': {
  block: 'block2'
},
'values': {
  block: 'block3'
},
'emotions': {
  block: 'block4'
},
'threads': {
  block: 'block5'
},
'limits': {
  block: 'block6'
},
'counter': {
  block: 'block7'
},
'valueProp': {
  block: 'block8'
}
};

function findEmpty() {
  let idFirstEmpty = '';
  for(let key in myData){
    if(myData[key].length == 0){
      idFirstEmpty = key;
      break;
    }
  }
  const firstEmpty = blockMap[idFirstEmpty].block;
  let scrollTarget = document.getElementById(firstEmpty);
  let topOffset = document.getElementById(firstEmpty).offsetHeight;
  let elementPosition = scrollTarget.getBoundingClientRect().bottom;
  let offsetPosition = elementPosition - topOffset - 50;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

const returnEmptyBtn = document.getElementById('btn-returnToEmpty');
returnEmptyBtn.addEventListener("click", findEmpty);

// Стикеры подсказки-адаптив
const clickedStiker = document.querySelector(".main__stiker");
clickedStiker.addEventListener('click', () => {
    clickedStiker.classList.toggle("-mini-stiker");
})

