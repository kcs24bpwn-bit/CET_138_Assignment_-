const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('.page-section');
    const heroHeading = document.getElementById('main-heading');
    const heroSubtext = document.getElementById('sub-heading');

    const headings = {
      home: { title: 'Welcome to Nepal', sub: 'Discover the beauty of Himalayas' },
      about: { title: 'About Nepal', sub: 'Land of mountains and culture' },
      services: { title: 'Our Services', sub: 'Making your journey memorable' },
      contact: { title: 'Contact Us', sub: 'We\'d love to hear from you' }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPage = this.getAttribute('data-page');
        
        navLinks.forEach(l => l.classList.remove('current'));
        this.classList.add('current');
        
        sections.forEach(s => s.classList.remove('show'));
        document.getElementById(targetPage + '-page').classList.add('show');
        
        heroHeading.textContent = headings[targetPage].title;
        heroSubtext.textContent = headings[targetPage].sub;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    const filterTags = document.querySelectorAll('.filter-tag');
    const placeCards = document.querySelectorAll('.place-card');

    filterTags.forEach(tag => {
      tag.addEventListener('click', function() {
        const category = this.getAttribute('data-type');
        
        filterTags.forEach(t => t.classList.remove('selected'));
        this.classList.add('selected');
        
        placeCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-kind') === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
          } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
          }
        });
      });
    });

    const modal = document.getElementById('place-modal');
    const closeBtn = document.querySelector('.close-popup');
    
    placeCards.forEach(card => {
      card.addEventListener('click', function() {
        const title = this.querySelector('h4').textContent;
        const img = this.querySelector('img').src;
        const desc = this.querySelector('p').textContent;
        
        document.getElementById('modal-name').textContent = title;
        document.getElementById('modal-img').src = img;
        document.getElementById('modal-info').textContent = desc;
        
        modal.style.display = 'block';
      });
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });

    placeCards.forEach(card => card.style.opacity = '1');