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

function showPDF(pdfSrc) {
  // 기존에 보여지고 있는 embed 태그를 삭제
  const pdfContainer = document.querySelector('.pdf');
  pdfContainer.innerHTML = '';

  // 새로운 embed 태그 생성 및 설정
  const pdfEmbed = document.createElement('embed');
  pdfEmbed.setAttribute('src', pdfSrc);
  pdfEmbed.setAttribute('type', 'application/pdf');
  pdfContainer.appendChild(pdfEmbed);

  // PDF 영역 보이기
  pdfContainer.style.display = 'block';
}
