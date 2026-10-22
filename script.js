// Responsive navigation for all site pages
document.querySelectorAll('.site-header').forEach(header=>{
 const toggle=header.querySelector('.menu-toggle');
 const navs=[...header.querySelectorAll('.nav')];
 if(!toggle)return;
 const close=()=>{navs.forEach(n=>n.classList.remove('mobile-open'));toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');toggle.textContent='☰';};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';navs.forEach(n=>n.classList.toggle('mobile-open',open));toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');toggle.textContent=open?'×':'☰';});
 navs.forEach(n=>n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close)));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 document.addEventListener('click',e=>{if(!header.contains(e.target))close()});
});
