const API = '/api';

async function fetchProjects(){
  const res = await fetch(API + '/projects');
  const list = await res.json();
  const container = document.getElementById('projects-list');
  
  container.innerHTML = list.map(p => `
    <div class="project-card">
      <img src="${p.image || '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Rectangle.svg'}" alt="${p.name}" />
      <div class="project-card-content">
        <h3>${p.name}</h3>
        <span class="category">${p.description}</span>
        <button class="read-more" disabled>READ MORE</button>
      </div>
    </div>
  `).join('');
}

async function fetchClients(){
  const res = await fetch(API + '/clients');
  const list = await res.json();
  const container = document.getElementById('clients-list');
  
  container.innerHTML = list.map(c => `
    <div class="client-card">
      <img src="${c.image || '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 28.svg'}" alt="${c.name}" />
      <p>${c.description}</p>
      <strong>${c.name}</strong>
      <small>${c.designation || ''}</small>
    </div>
  `).join('');
}

// Hero contact form handler
document.getElementById('hero-contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  try {
    await fetch(API + '/contact', { 
      method: 'POST', 
      headers:{'Content-Type':'application/json'}, 
      body: JSON.stringify(payload) 
    });
    alert('Thank you! We will contact you soon.');
    e.target.reset();
  } catch (err) {
    alert('Failed to submit. Please try again.');
  }
});

// Newsletter subscription handler
document.getElementById('subscribe-form').addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  try {
    await fetch(API + '/subscribe', { 
      method:'POST', 
      headers:{'Content-Type':'application/json'}, 
      body: JSON.stringify(payload) 
    });
    alert('Successfully subscribed to our newsletter!');
    e.target.reset();
  } catch (err) {
    alert('Failed to subscribe. Please try again.');
  }
});

// Initialize
fetchProjects();
fetchClients();
