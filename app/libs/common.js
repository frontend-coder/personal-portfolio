$(document).ready(() => {
  const filterContainer = document.querySelector('.portfolio-filter');
  const filterBtns = filterContainer.children;
  const totalFilterBtn = filterBtns.length;
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const totalPortfolioItem = portfolioItems.length;

  for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function () {
      filterContainer.querySelector('.active').classList.remove('active');
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');
      for (let k = 0; k < totalPortfolioItem; k++) {
        if (filterValue === portfolioItems[k].getAttribute('data-category')) {
          portfolioItems[k].classList.remove('hide');
          portfolioItems[k].classList.add('show');
        } else {
          portfolioItems[k].classList.remove('show');
          portfolioItems[k].classList.add('hide');
        }
        if (filterValue === 'all') {
          portfolioItems[k].classList.remove('hide');
          portfolioItems[k].classList.add('show');
        }
      }
    });
  }
});


const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.close-lightbpx');
const lightboxText = lightbox.querySelector('.caption-text');
const lightboxCiunter = lightbox.querySelector('.caption-ciunter');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const totalPortfolioItem = portfolioItems.length;

let itemIndex = 0;
for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItems[i].addEventListener('click', () => {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function toggleLightbox() {
  lightbox.classList.toggle('open');
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
  lightboxCiunter.innerHTML = `${itemIndex + 1} из ${totalPortfolioItem}`;
}
lightbox.addEventListener('click', (event) => {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});
