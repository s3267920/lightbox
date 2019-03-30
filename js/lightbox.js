(function() {
  let contentImgList = document.getElementById('content_img_list');
  let imgBox = document.querySelectorAll('.img_box');
  let modal = document.querySelector('.modal');
  let modalImgBox = document.querySelector('.modal_img_toggle_box');
  let currentNum = document.querySelector('.current_img_num');
  let totalNum = document.querySelector('.total_img_num');
  let imgList = [];
  //獲得每個img src
  imgBox.forEach((el, index) => {
    el.setAttribute('data-index', index);
    imgList.push(el.style.backgroundImage);
  });
  contentImgList.addEventListener('click', e => {
    if (e.target && e.target.className === 'img_box') {
      currentImg = e.target.dataset.index;
      modalHandle(e.target.dataset.index);
      modal.style.display = 'flex';
    }
  });
  function modalHandle(dataIndex, way = true) {
    if (way) {
      if (dataIndex === imgList.length) currentNum.textContent = 1;
      else currentNum.textContent = Number(dataIndex) + 1;
    } else if (!way) {
      if (dataIndex === 1) currentNum.textContent = 6;
      else currentNum.textContent = imgList.length;
    }
    modalImgBox.style.backgroundImage = imgList[Number(currentNum.textContent) - 1];
    totalNum.textContent = `/${imgList.length}`;
  }
  modalImgBox.addEventListener('click', e => {
    switch (e.target && e.target.className) {
      case 'fas fa-times-circle':
        modal.style.display = 'none';
        break;
      case 'fas fa-chevron-right':
        modalHandle(Number(currentNum.textContent));
        break;
      case 'fas fa-chevron-left':
        modalHandle(Number(currentNum.textContent), false);
        break;
      default:
        break;
    }
  });
})();
