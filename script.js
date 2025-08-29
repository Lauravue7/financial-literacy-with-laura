const nav=document.querySelector('.nav');
const toggle=document.querySelector('.menu-toggle');
if(toggle){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href')===path){a.classList.add('active');}
});
