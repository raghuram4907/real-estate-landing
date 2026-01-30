const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:5000/api' : '/api';

async function fetchProjects(){
  const res = await fetch(API + '/projects');
  const list = await res.json();
  const container = document.getElementById('projects-list');
  
  // Use placeholder images if no projects yet
  const defaultProjects = list.length > 0 ? list : [
    { name: 'Consultation', description: 'Design • Modern', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232.svg' },
    { name: 'Design', description: 'Design • Modern', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-1.svg' },
    { name: 'Marketing & Design', description: 'Design • Modern', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-2.svg' },
    { name: 'Consultation & Marketing', description: 'Design • Modern', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-3.svg' },
    { name: 'Consultation', description: 'Design • Modern', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Rectangle.svg' }
  ];
  
  container.innerHTML = defaultProjects.map(p => `
    <div class="project-card">
      <img src="${p.image || 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Rectangle.svg'}" alt="${p.name}" />
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
  
  // Use placeholder data if no clients yet
  const defaultClients = list.length > 0 ? list : [
    { name: 'Barbara D. Smith', designation: 'CEO', description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo erat elit vel magna sodales hendrerit scelerisque elit.', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 28.svg' },
    { name: 'Barbara D. Smith', designation: 'Web Developer', description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo erat elit vel magna sodales hendrerit scelerisque elit.', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 29.svg' },
    { name: 'Barbara D. Smith', designation: 'Designer', description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo erat elit vel magna sodales hendrerit scelerisque elit.', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 31.svg' },
    { name: 'Barbara D. Smith', designation: 'Manager', description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo erat elit vel magna sodales hendrerit scelerisque elit.', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 33.svg' },
    { name: 'Barbara D. Smith', designation: 'Marketing Head', description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo erat elit vel magna sodales hendrerit scelerisque elit.', image: 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 35.svg' }
  ];
  
  container.innerHTML = defaultClients.map(c => `
    <div class="client-card">
      <img src="${c.image || 'http://localhost:5000/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 28.svg'}" alt="${c.name}" />
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
