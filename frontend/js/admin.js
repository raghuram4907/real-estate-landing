const API = '/api';

document.getElementById('project-form').addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const res = await fetch(API + '/projects', { method:'POST', body: fd });
  if (res.ok) { alert('Project added'); e.target.reset(); }
});

document.getElementById('client-form').addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const res = await fetch(API + '/clients', { method:'POST', body: fd });
  if (res.ok) { alert('Client added'); e.target.reset(); }
});

async function loadContacts(){
  const res = await fetch(API + '/contact');
  const list = await res.json();
  const el = document.getElementById('contacts-list');
  el.innerHTML = list.map(c=>`<div><strong>${c.fullName}</strong><div>${c.email} | ${c.mobile} | ${c.city}</div></div><hr/>`).join('');
}

async function loadSubs(){
  const res = await fetch(API + '/subscribe');
  const list = await res.json();
  const el = document.getElementById('subs-list');
  el.innerHTML = list.map(s=>`<div>${s.email}</div>`).join('');
}

loadContacts();
loadSubs();
