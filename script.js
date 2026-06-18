const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'CLOSE' : 'MENU';
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'MENU';
  }));
}

const contactDialog = document.querySelector('.contact-dialog');
const contactTriggers = document.querySelectorAll('.contact-trigger');
const contactClose = document.querySelector('.contact-close');

contactTriggers.forEach((trigger) => trigger.addEventListener('click', (event) => {
  event.preventDefault();
  if (contactDialog && !contactDialog.open) {
    contactDialog.classList.remove('is-closing');
    contactDialog.showModal();
  }
}));

if (contactDialog) {
  const closeContact = () => {
    if (!contactDialog.open || contactDialog.classList.contains('is-closing')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      contactDialog.close();
      return;
    }
    contactDialog.classList.add('is-closing');
    window.setTimeout(() => {
      contactDialog.close();
      contactDialog.classList.remove('is-closing');
    }, 180);
  };

  contactClose?.addEventListener('click', closeContact);
  contactDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeContact();
  });
  contactDialog.addEventListener('click', (event) => {
    const bounds = contactDialog.getBoundingClientRect();
    const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    if (!inside) closeContact();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const timeElement = document.querySelector('#local-time');
if (timeElement) {
  const updateTime = () => {
    const time = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false
    }).format(new Date());
    timeElement.textContent = `NEW YORK / ${time}`;
  };
  updateTime();
  setInterval(updateTime, 60000);
}
