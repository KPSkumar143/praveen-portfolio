// js/main.js - menu toggle and modal logic
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu (optional)
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=> {
      nav.classList.toggle('open');
    });
  }

  // Modal open
  document.querySelectorAll('[data-open]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const id = btn.getAttribute('data-open');
      const modal = document.getElementById(id);
      if(modal) modal.style.display = 'flex';
    });
  });
  // Modal close
  document.querySelectorAll('.modal-close').forEach(b=>{
    b.addEventListener('click', ()=>{
      b.closest('.modal-back').style.display = 'none';
    });
  });
});
