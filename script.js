const WA='923335822363',GREET='السلام علیکم! میں بندھن شادی دفتر سے رشتے کے سلسلے میں معلومات حاصل کرنا چاہتا/چاہتی ہوں۔ (Assalam-o-Alaikum! I would like to inquire about your Rishta services.)';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
// Mobile menu
const mb=document.getElementById('mb'),nv=document.querySelector('nav');
mb&&mb.addEventListener('click',()=>nv.classList.toggle('open'));
// WhatsApp click-to-chat buttons
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa||GREET);a.target='_blank';a.rel='noopener'});
// Form -> WhatsApp message (register, contact, quick search)
document.querySelectorAll('form[data-wa-form]').forEach(f=>f.addEventListener('submit',e=>{
 e.preventDefault();
 let m=`السلام علیکم\n*${f.dataset.waForm}*\n\n`;
 f.querySelectorAll('input,select,textarea').forEach(i=>{
  if(!i.value.trim())return;
  m+=`• ${i.closest('label').childNodes[0].textContent.trim()}: ${i.value.trim()}\n`});
 window.open(wa(m),'_blank');
}));
/* CHATBOT: future AI chatbot / Tawk.to integration code can be added here or in the HTML placeholder at the bottom of each page. */
