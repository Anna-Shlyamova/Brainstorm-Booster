document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        let scrollTarget = document.getElementById(href);
        let topOffset = document.getElementById(href).offsetHeight;
        let elementPosition = scrollTarget.getBoundingClientRect().bottom;
        let offsetPosition = elementPosition - topOffset - 50;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
    });
    });
});


const imageMap = {
  '1': {
    new: 'assets/images/general/1smallG.svg'
  },
  '2': {
    new: 'assets/images/general/2smallG.svg'
  },
  '3': {
    new: 'assets/images/general/3smallG.svg'
  },
  '4': {
    new: 'assets/images/general/4smallG.svg'
  },
  '5': {
    new: 'assets/images/general/5smallG.svg'
  },
  '6': {
    new: 'assets/images/general/6smallG.svg'
  },
  '7': {
    new: 'assets/images/general/7smallG.svg'
  },
  '8': {
    new: 'assets/images/general/8smallG.svg'
  }
};


let saveBtn = document.querySelectorAll('.btn');
for (let i = 0; i < saveBtn.length; i++){
  Array.from(saveBtn)[i].addEventListener('click', () => {
    if (saveBtn[i].classList.contains('save-btn')) {
      const id = saveBtn[i].offsetParent.id.at(-1);
      changeImage(id);
    }
  });
}

function changeImage(blockId) {
  const block = document.querySelector(`a[href*=block${blockId}]`);
  const image = block.querySelector('img');
  const newImage = imageMap[blockId].new;
  let tmp = '';
  switch(Number(blockId)){
    case 1:
      tmp = myData.target;
      break;
    case 2:
      tmp = myData.audience;
      break;
    case 3:
      tmp = myData.values;
      break;
    case 4:
      tmp = myData.emotions;
      break;
    case 5:
      tmp = myData.threads;
      break;
    case 6:
      tmp = myData.limits;
      break;
    case 7:
      tmp = myData.counter;
      break;
    case 8:
      tmp = myData.valueProp;
      break;
  }
  if (tmp.length !== 0) {
    image.src = newImage;
  }
}
