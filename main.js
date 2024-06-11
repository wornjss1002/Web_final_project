const current = document.getElementById('current');
// const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach((img) => img.addEventListener('click', imgClick));

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1));

  current.src = e.target.src;

  current.classList.add('fade-in');

  setTimeout(() => current.classList.remove('fade-in'), 500);

  e.target.style.opacity = 0.4;
}
document.addEventListener('DOMContentLoaded', function () {
  // 첫 번째 이미지를 가져오기
  const firstImgSrc = document.querySelector('.imgs img').src;
  // current 이미지 업데이트
  document.getElementById('current').src = firstImgSrc;
});
