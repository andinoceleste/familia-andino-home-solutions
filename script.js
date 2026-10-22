// Accessible slide-out navigation shared by all pages.
document.querySelectorAll('.site-header').forEach((header,index)=>{
 const toggle=header.querySelector('.menu-toggle');
 if(!toggle)return;
 const drawer=document.createElement('nav');
 drawer.className='mobile-slide-drawer';
 drawer.id='site-navigation-drawer';
 drawer.setAttribute('aria-label','Mobile navigation');
 drawer.innerHTML='<a href="index.html">Home</a><a href="index.html#services">Services</a><a href="gallery.html">Our Work</a><a href="about.html">About Us</a><a href="index.html#contact">Contact</a><a class="drawer-estimate" href="index.html#contact">Get a Free Estimate →</a>';
 document.body.appendChild(drawer);
 const backdrop=document.createElement('div');
 backdrop.className='mobile-drawer-backdrop';
 document.body.appendChild(backdrop);
 toggle.setAttribute('aria-controls',drawer.id);
 const close=()=>{
  drawer.classList.remove('is-open');backdrop.classList.remove('is-open');
  document.body.classList.remove('drawer-open');
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Open menu');
  toggle.textContent='☰';
 };
 const open=()=>{
  drawer.classList.add('is-open');backdrop.classList.add('is-open');
  document.body.classList.add('drawer-open');
  toggle.setAttribute('aria-expanded','true');
  toggle.setAttribute('aria-label','Close menu');
  toggle.textContent='×';
 };
 toggle.addEventListener('click',()=>drawer.classList.contains('is-open')?close():open());
 backdrop.addEventListener('click',close);
 drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 window.addEventListener('resize',()=>{if(false)close()});
});
