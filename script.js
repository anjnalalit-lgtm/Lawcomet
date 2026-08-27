const toggle=document.querySelector('.menu-toggle');
const mobile=document.querySelector('.mobile-nav');
toggle?.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
