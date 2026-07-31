
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent('New NexScale Website Inquiry');
    const body=encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nMessage: ${data.get('message')}`
    );
    window.location.href=`mailto:hello@nexscale.example?subject=${subject}&body=${body}`;
  });
}
