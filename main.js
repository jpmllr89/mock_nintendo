// Read more/ Read less toggle

const moreButton = document.getElementById('moreText');
const readLessHTML = "<i class='bx bx-x'></i> Read Less";
const readMoreHTML = "<i class='bx bx-plus'></i> Read More";

moreButton.addEventListener('click', (e) =>{
  let dots = document.getElementById('dots');
  let more = document.getElementById('more');
  if(dots.classList.contains('hidden')){
    dots.classList.remove('hidden');
    moreButton.innerHTML = readMoreHTML;
    more.classList.add('hidden');
  }else{
    dots.classList.add('hidden');
    moreButton.innerHTML = readLessHTML;
    more.classList.remove('hidden');
  }
});