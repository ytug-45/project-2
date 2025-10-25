const topRow = document.querySelector('.top-row');
const bottomRow = document.querySelector('.bottom-row');

function createCard(src) {
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.src = src;
  card.appendChild(img);

  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
    card.style.transform = "scale(1.08) translateY(-10px)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1) translateY(0)";
    card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
  });

  return card;
}

const imgSrc = [
  "https://shikimori.one/system/mangas/original/25.jpg",
  "https://upload.wikimedia.org/wikipedia/en/4/4a/Berserk_vol01.png",
  "https://m.media-amazon.com/images/I/91NxYvUNf6L._AC_UF1000,1000_QL80_.jpg",
  "https://jumpg-assets.tokyo-cdn.com/secure/title/100004/title_thumbnail_portrait_list/311788.jpg?hash=ypRnsOPrqQTWm-GBTUArRQ&expires=2145884400",
  "https://mangavagabond.com/wp-content/uploads/2025/06/vagabond-01-taschenbuch-takehiko-inoue.webp",
  "https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg",
  "https://manga-mon.com/cdn/shop/files/8_e7cff93c-c259-44f9-91d9-c9e8284f4a2b.heic?v=1699839597&width=1946",
  "https://upload.wikimedia.org/wikipedia/ru/3/3c/Steel_Ball_Run.jpg"
];

function fillRow(row, imgs) {
  for (let i = 0; i < 2; i++) { 
    imgs.forEach(src => row.appendChild(createCard(src)));
  }
}

fillRow(topRow, imgSrc);
fillRow(bottomRow, imgSrc);


fillRow(topRow, imgSrc);
fillRow(bottomRow, imgSrc);

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".header-nav__link");

  navLinks.forEach(link => {
    link.style.transition = "transform 0.25s cubic-bezier(0.25, 1.5, 0.5, 1), color 0.25s ease, text-shadow 0.25s ease";

    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-6px)";
      link.style.color = "#ff65a3"; 
      link.style.textShadow = "0 4px 8px rgba(1, 77, 254, 0.5)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
      link.style.color = "var(--black)";
      link.style.textShadow = "none";
    });
  });
});

const cards = document.querySelectorAll('.product-item');

cards.forEach((card, i) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  card.style.transition = 'all 0.5s ease';
  setTimeout(() => {
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, i * 150); 
});


cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".select-btn");

  buttons.forEach(btn => {
    
    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "all 0.2s ease";
      btn.style.transform = "scale(1.1)";
      btn.style.backgroundColor = "#ff6b81";
      btn.style.boxShadow = "0 0 10px rgba(255,107,129,0.6)";
      btn.style.color = "#fff";
    });

    
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
      btn.style.backgroundColor = "#ff4757";
      btn.style.boxShadow = "none";
      btn.style.color = "#fff";
    });

    
    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.95)";
    });
    btn.addEventListener("mouseup", () => {
      btn.style.transform = "scale(1.1)";
    });
  });
});

document.querySelectorAll('.product-item').forEach(item => {
  const oldPriceElem = item.querySelector('.old-price');
  const newPriceElem = item.querySelector('.new-price');
  const discountElem = item.querySelector('.discount');

  if (oldPriceElem && newPriceElem && discountElem) {
    const oldPrice = parseFloat(oldPriceElem.textContent);
    const newPrice = parseFloat(newPriceElem.textContent);

    if (oldPrice > newPrice) {
      const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
      discountElem.textContent = `-${discount}%`;
      setTimeout(() => discountElem.classList.add('visible'), 200);
      newPriceElem.classList.add('pulse');
    }
  }
});

document.querySelectorAll('.product-item').forEach(item => {
  const oldPriceElem = item.querySelector('.old-price');
  const newPriceElem = item.querySelector('.new-price');
  const discountElem = item.querySelector('.discount');

  if (oldPriceElem && newPriceElem && discountElem) {
    const oldPrice = parseFloat(oldPriceElem.textContent);
    const newPrice = parseFloat(newPriceElem.textContent);

    if (oldPrice > newPrice) {
      const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
      discountElem.textContent = `-${discount}%`;

      setTimeout(() => {
        discountElem.classList.add('visible', 'discount-bounce');
      }, 200);

      newPriceElem.classList.add('pulse');
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const discountedCards = document.querySelectorAll(".product-item");

  discountedCards.forEach(card => {
    
    const hasDiscount = card.querySelector(".old-price");
    if (!hasDiscount) return;

    const intensity = 15; 
    const scale = 1.05;   

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x - rect.width / 2) / rect.width) * intensity;
      const rotateX = -((y - rect.height / 2) / rect.height) * intensity;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.4s ease";
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      setTimeout(() => (card.style.transition = ""), 400);
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  
  let cards = document.querySelectorAll('.tilt-card');
  if (cards.length === 0) cards = document.querySelectorAll('.product-item');

  if (!cards || cards.length === 0) {
    console.warn('Tilt: не найдено карточек .tilt-card или .product-item — добавь класс к карточке.');
    return;
  }

 
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  cards.forEach(card => {
    

    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';

    const intensity = 18; 
    const scale = 1.03;   
    let rafId = null;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const halfW = rect.width / 2;
      const halfH = rect.height / 2;

      
      const rotateY = ((x - halfW) / halfW) * intensity; 
      const rotateX = -((y - halfH) / halfH) * intensity;

      
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      });
    });

    card.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      card.style.transition = 'transform 420ms cubic-bezier(.2,.8,.2,1)';
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
      
      setTimeout(() => { card.style.transition = ''; }, 430);
    });

    
    card.addEventListener('mousedown', () => {
      card.style.transition = 'transform 120ms ease';
      card.style.transform += ' scale(0.995)';
    });
    card.addEventListener('mouseup', () => {
      card.style.transition = 'transform 120ms ease';
      card.style.transform = card.style.transform.replace(' scale(0.995)', ` scale(${scale})`);
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step');

  function revealSteps() {
    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        step.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealSteps);
  revealSteps();
});

document.addEventListener('DOMContentLoaded', () => {
 
  const steps = document.querySelectorAll('.step');
  function revealSteps() {
    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) step.classList.add('visible');
    });
  }
  window.addEventListener('scroll', revealSteps);
  revealSteps();

 
  const form = document.getElementById('orderForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    success.style.display = 'block';
    setTimeout(() => success.style.display = 'none', 4000);
  });
});

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header-nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active'); 
    nav.classList.toggle('show');     
  });


 
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) { 
        el.classList.add('visible');
      }
    });
  }

  
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);


const welcomeText = document.getElementById('welcome-text');
const text = "Добро пожаловать!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        welcomeText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // скорость печати
    }
}

// Запускаем при загрузке страницы
window.addEventListener('DOMContentLoaded', typeWriter);


