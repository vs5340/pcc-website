const nav=document.getElementById('nav');
document.getElementById('menuBtn').addEventListener('click',()=>nav.classList.toggle('open'));
document.getElementById('year').textContent=new Date().getFullYear();
const modal=document.getElementById('modal');
function showModal(title){document.getElementById('modalTitle').textContent=title;modal.classList.add('show');modal.setAttribute('aria-hidden','false')}
document.querySelectorAll('[data-buy]').forEach(b=>b.addEventListener('click',()=>showModal(b.dataset.buy)));
document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>showModal(b.dataset.demo)));
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
document.getElementById('close').addEventListener('click',closeModal);
document.getElementById('ok').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
