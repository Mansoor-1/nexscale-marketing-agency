const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('open');
    }
  });
});

const form = document.querySelector('#contact-form');

if (form) {

  form.addEventListener('submit', e => {

    e.preventDefault();

    const data = new FormData(form);

    const subject = encodeURIComponent(
      'New NexScale Website Inquiry'
    );

    const body = encodeURIComponent(
      `Name: ${data.get('name')}
Email: ${data.get('email')}
Service: ${data.get('service')}
Message: ${data.get('message')}`
    );

    window.location.href =
      `mailto:hello@nexscale.com?subject=${subject}&body=${body}`;

  });

}
