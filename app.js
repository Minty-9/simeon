const CASES = {
  vacc: {
    title: 'VACC Learn',
    lead: 'A learning platform for Vera Alex Coaching Company. Client project, live.',
    img: 'img/vacc.png',
    stack: ['Web app', 'Installable PWA', 'Admin panel', 'Certificates'],
    sections: [
      ['The brief', '<p>Vera Alex Coaching Company needed one place where learners could take courses, practise with real assignments and stay accountable, instead of juggling videos, notes and chats across different tools.</p>'],
      ['What learners get', '<ul><li>Video lessons and written chapters inside the app</li><li>Assignments submitted as text or a file upload</li><li>Progress tracking across every course</li><li>A community feed and announcements</li><li>Downloadable certificates on completion</li></ul>'],
      ['What the team gets', '<p>An admin side for managing courses, assignments, announcements, community and users, so the coaching team can run the platform without a developer.</p>'],
      ['Built to install', '<p>Learners can add the app to their phone\u2019s home screen straight from the browser. No app store, no download.</p>'],
      ['Status', '<p>Shipped and live with the client\u2019s learners.</p>']
    ],
    links: [['Visit live app \u2197', 'https://app.veraalexcoaching.com', 'pl-solid']]
  },
  lespasse: {
    title: 'Les Passe',
    lead: 'A gate pass system that lets estate residents send visitors an access code in seconds.',
    img: 'img/lespasse.png',
    stack: ['PHP', 'MySQL', 'JavaScript', 'QR codes', 'Custom MVC'],
    sections: [
      ['The problem', '<p>Getting a visitor into a gated estate usually means a phone call to the resident, a paper logbook, and a guard making a judgement call. It is slow at the gate, easy to get wrong, and leaves no reliable record of who came in.</p>'],
      ['The idea', '<p>The resident creates a pass and sends the visitor a code. The visitor shows it at the gate, the guard verifies it, and the entry is logged. No calls, no guessing.</p>'],
      ['How it works', '<ul><li><strong>Residents</strong> generate time-limited passes with a QR code and share them over WhatsApp.</li><li><strong>Guards</strong> verify passes at the gate from their own dashboard.</li><li><strong>Admins</strong> audit every entry from a full log.</li></ul>'],
      ['What I built', '<p>A multi-role system with separate dashboards for residents, guards and admins, secure password hashing, QR pass generation, WhatsApp sharing and complete entry logging. Written in PHP, MySQL and vanilla JavaScript on a custom MVC structure.</p>'],
      ['What I learned', '<p>Deploying to Linux exposed bugs my Windows machine hid: file name case mismatches, a port misconfiguration, and missing URL routing for PHP\u2019s built-in server. Lesson: test in the environment you ship to.</p>']
    ],
    links: [['Visit live site \u2197', 'https://www.lespasse.ng', 'pl-solid']]
  },
  spot: {
    title: 'The Spot \u2014 Restaurant OS',
    lead: 'A full restaurant management system, built solo with no framework.',
    img: 'img/spot.png',
    stack: ['PHP', 'SQLite', 'JavaScript', 'Tailwind CSS', 'Custom MVC', 'Role-based auth'],
    sections: [
      ['The problem', '<p>Most restaurant POS tools are too expensive for small local restaurants, or don\u2019t fit Nigerian business workflows: split billing, table-based ordering and cash-first operations.</p>'],
      ['The solution', '<p>A public ordering menu for customers, a live kitchen dashboard for the kitchen, and an admin panel for the owner, all running in the browser.</p>'],
      ['What I built', '<ul><li>Live orders and kitchen queues</li><li>Inventory and staff roles</li><li>Billing, including split bills</li><li>Table-based ordering</li></ul><p style="margin-top:8px">Vanilla PHP, SQLite, JavaScript and Tailwind CSS on a custom MVC structure, with no third-party dependencies.</p>'],
      ['What I learned', '<p>Building without a framework meant writing routing, auth and data access myself. It was slower to start, but I understand every layer of the system.</p>']
    ],
    links: [
      ['Live demo \u2197', 'https://restaurant-ordering-system-lstg.onrender.com', 'pl-solid'],
      ['GitHub', 'https://github.com/minty-9/restaurant-ordering-system', 'pl-ghost'],
      ['Walkthrough', 'https://www.loom.com/share/87bf43bd2bcb42b692c18b636e8cdba4', 'pl-loom']
    ]
  }
};

document.getElementById('yr').textContent = new Date().getFullYear();

/* mobile nav */
const ham = document.getElementById('hamburger'), mnav = document.getElementById('mobile-nav');
ham.addEventListener('click', () => ham.setAttribute('aria-expanded', mnav.classList.toggle('open')));

/* hero stagger */
window.addEventListener('load', () =>
  document.querySelectorAll('.hs').forEach((el, i) => setTimeout(() => el.classList.add('show'), i * 110)));

/* case study popup */
const overlay = document.getElementById('cs-overlay');
if (overlay) {
  const box = overlay.querySelector('.cs-box'), content = document.getElementById('cs-content');
  let opener = null;
  const close = () => { overlay.classList.remove('open'); document.body.classList.remove('lock'); if (opener) opener.focus(); };
  document.querySelectorAll('[data-case]').forEach(btn => btn.addEventListener('click', () => {
    const c = CASES[btn.dataset.case]; if (!c) return;
    opener = btn;
    content.innerHTML =
      `<img class="cs-img" src="${c.img}" alt="" onerror="this.remove()">` +
      `<div class="cs-body"><h2 id="cs-title">${c.title}</h2><p class="cs-lead">${c.lead}</p>` +
      c.sections.map(([h, b]) => `<h3>${h}</h3>${b}`).join('') +
      `<div class="tags">${c.stack.map(t => `<span class="tag">${t}</span>`).join('')}</div>` +
      `<div class="plinks">${c.links.map(([t, u, k]) => `<a href="${u}" target="_blank" rel="noopener" class="${k}">${t}</a>`).join('')}</div></div>`;
    box.scrollTop = 0;
    overlay.classList.add('open'); document.body.classList.add('lock');
    overlay.querySelector('.cs-close').focus();
  }));
  overlay.querySelector('.cs-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });
}

/* contact form -> mailto */
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const n = form.name.value.trim(), em = form.email.value.trim(), m = form.message.value.trim();
  location.href = 'mailto:simeondavid99@gmail.com?subject=' + encodeURIComponent('Project inquiry from ' + n) +
    '&body=' + encodeURIComponent(m + '\n\nReply to: ' + em);
});
