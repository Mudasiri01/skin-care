'use strict';
/* ---------- Sample content (edit freely) ---------- */
const IMG = 'assets/images/';
/* Real photos (Unsplash, free licence). Swap any URL for your own clinic photo. */
const REAL = {
  'treatment-1': 'https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?auto=format&fit=crop&q=75&w=900',
  'treatment-2': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=75&w=900',
  'treatment-3': 'https://images.unsplash.com/photo-1713085085470-fba013d67e65?auto=format&fit=crop&q=75&w=900',
  'treatment-4': 'https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?auto=format&fit=crop&q=75&w=900',
  'treatment-5': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=75&w=900',
  'treatment-6': 'https://images.unsplash.com/photo-1643684391140-c5056cfd3436?auto=format&fit=crop&q=75&w=900',
  'treatment-7': 'https://images.unsplash.com/photo-1761718209793-cb6d348831e0?auto=format&fit=crop&q=75&w=900',
  'treatment-8': 'https://images.unsplash.com/photo-1782159981479-5e90597f284a?auto=format&fit=crop&q=75&w=900',
  'treatment-9': 'https://images.unsplash.com/photo-1731514771613-991a02407132?auto=format&fit=crop&q=75&w=900',
  'treatment-10': 'https://images.unsplash.com/photo-1761718209835-c8586b7dcac0?auto=format&fit=crop&q=75&w=900',
  'treatment-11': 'https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?auto=format&fit=crop&q=75&w=900',
  'treatment-12': 'https://images.unsplash.com/photo-1643684460412-76908d8e5a25?auto=format&fit=crop&q=75&w=900'
};
const treatments = [
 ['HydraFacial','fa-droplet','Multi-step cleansing, exfoliation and hydration. Suitable for many skin types after assessment.','Includes cleansing, gentle exfoliation, extraction and a hydrating serum. Your specialist will confirm suitability and discuss any sensitivities.'],
 ['Acne Treatment','fa-circle-dot','Assessment-led care for breakouts, which may combine topical, procedural or lifestyle guidance.','Acne has many causes. A plan may include prescription topicals, facials or other options. Improvement takes time and varies.'],
 ['Chemical Peels','fa-flask','Controlled exfoliation to support smoother-looking texture and tone.','Peel strength depends on skin type and concerns. Some redness or flaking can occur. Sun protection is important afterwards.'],
 ['Laser Skin Rejuvenation','fa-bolt','Light-based treatment considered for texture and tone concerns.','Not suitable for everyone. Medical history, skin type and medication are reviewed first. Several sessions may be discussed.'],
 ['Skin Brightening','fa-sun','Treatments aimed at a more even, fresher-looking complexion.','May combine professional treatments with home care and daily sun protection. Outcomes differ between individuals.'],
 ['Anti-Aging Treatments','fa-hourglass-half','Options for fine lines and skin firmness, chosen after a full consultation.','Your specialist explains realistic expectations, benefits, risks and alternatives before anything is recommended.'],
 ['Microneedling','fa-bullseye','Fine needles create controlled micro-channels to encourage skin renewal.','Mild redness and sensitivity are common. Not advised for active infection or some skin conditions. Suitability is assessed first.'],
 ['Skin Consultation','fa-comments','A thorough, unhurried review of your skin, history and goals.','The best starting point. You leave with an explained plan, and any treatment is optional.'],
 ['Pigmentation Treatment','fa-palette','Care plans for uneven tone, dark patches and sun-related changes.','Pigmentation can have different causes and may return, especially without sun protection. Diagnosis comes first.'],
 ['Dermatology Services','fa-stethoscope','Medical assessment and management of common skin conditions.','Includes review of rashes, dryness, sensitivity and other concerns. Changing or concerning moles should be checked promptly.'],
 ['Scar Treatment','fa-bandage','Options to soften the appearance of some acne and surface scars.','Scars differ in type and depth. Treatments can improve appearance for some people but rarely remove scars completely.'],
 ['Skin Hydration Therapy','fa-glass-water','Hydrating treatments for dry, dull or dehydrated skin.','Combines gentle professional treatments with a home routine. Frequency is tailored to your skin.']
];
const why = [
 ['fa-user-doctor','Qualified skin specialists','A team led by clinicians. Display verified credentials here.'],
 ['fa-comments','Personalised consultations','Time to listen, examine and explain before recommending anything.'],
 ['fa-microscope','Modern equipment','Maintained, regularly serviced devices used by trained staff.'],
 ['fa-shield-heart','Hygiene and safety standards','Single-use items where appropriate and strict cleaning routines.'],
 ['fa-hand-holding-heart','Professional care','Respectful, discreet and unhurried at every appointment.'],
 ['fa-clipboard-list','Individual treatment plans','Plans built around your skin, history and priorities.']
];
const doctors = [
 ['Dr. [Name Placeholder]','Consultant Dermatologist'],
 ['Dr. [Name Placeholder]','Skin Specialist'],
 ['[Name Placeholder]','Aesthetic Practitioner']
];
const cats = ['All','Acne','Pigmentation','Skin Rejuvenation','Hydration'];
const gallery = [['Acne',1],['Pigmentation',2],['Skin Rejuvenation',3],['Hydration',4],['Acne',5],['Pigmentation',6],['Skin Rejuvenation',7],['Hydration',8]];
const exp = ['Modern reception','Treatment rooms','Skincare equipment','Consultation rooms'];
const steps = [['Book your consultation','Send a request online or by WhatsApp and we will reply to arrange a time.'],['Meet our specialist','A full skin assessment and an honest conversation about your goals.'],['Get your personalised plan','Clear options, costs, risks and timelines, with no pressure to proceed.'],['Begin your skincare journey','Start treatment if you choose, with follow-up and aftercare guidance.']];
const reviews = [['Sample Client A',5,'The consultation felt calm and thorough. Nothing was rushed and every option was explained.'],['Sample Client B',5,'I appreciated the honest advice about what to expect and how to look after my skin.'],['Sample Client C',4,'Clean, welcoming clinic and a clear plan I could follow at home.']];
const offers = [
 ['fa-comments','Consultation offer','Introductory skin consultation with a specialist.','Sample terms: new clients only. One per person. Subject to availability.'],
 ['fa-snowflake','Seasonal skincare package','A seasonal bundle of professional care and home guidance.','Sample terms: valid 30 days from booking. Suitability confirmed at consultation.'],
 ['fa-droplet','Facial treatment package','A course of facials planned after assessment.','Sample terms: course length set by your specialist. Non-refundable once started.'],
 ['fa-gift','Special treatment promotion','Limited-time pricing on selected treatments.','Sample terms: selected treatments only. Cannot be combined with other offers.']
];
const faqs = [
 ['What should I expect during my first consultation?','Your specialist reviews your medical history, examines your skin, discusses your goals and explains suitable options, risks and costs. You are never obliged to start treatment.'],
 ['How do I choose the right skin treatment?','The right choice depends on your skin type, concerns, health and goals. Your specialist will recommend options after assessment.'],
 ['Are consultations personalized?','Yes. Each consultation is tailored to your skin and history, and any plan is written for you individually.'],
 ['How should I prepare for a treatment?','Arrive with clean skin where possible, tell us about medicines and skin products you use, and avoid sun exposure beforehand unless told otherwise. We will give treatment-specific advice.'],
 ['How long does an appointment take?','Consultations typically take 30 to 45 minutes and treatments vary. We confirm timings when you book. (Sample answer: update with your clinic timings.)'],
 ['Are treatments suitable for all skin types?','No. Suitability depends on skin type, condition, medications and health history. Some treatments are not advised for certain people.'],
 ['How can I book an appointment?','Use the request form on this page, message us on WhatsApp or call the clinic. Our team will contact you to confirm a time.'],
 ['What aftercare instructions should I follow?','Aftercare depends on the treatment, but commonly includes gentle cleansing, moisturising and daily sun protection. You will receive written instructions.']
];
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const img = (name, alt, cls = '') => `<img class="${cls}" referrerpolicy="no-referrer" src="${REAL[name] || IMG + name + '.jpg'}" data-ph="${alt}" alt="${alt}" loading="lazy">`;
const h = (el, html) => el.innerHTML = html;

/* ---------- Render ---------- */
h($('#treatGrid'), treatments.map((t, i) => `<div class="col-md-6 col-lg-4 col-xl-3 tcard"><article class="t-card"><div class="t-img">${img('treatment-' + (i + 1), t[0] + ' treatment')}<span class="t-ico"><i class="fa-solid ${t[1]}"></i></span></div><div class="t-body"><h3>${t[0]}</h3><p>${t[2]}</p><button class="link-btn" data-treat="${i}">Learn more</button></div></article></div>`).join(''));
h($('#whyGrid'), why.map(w => `<div class="col-md-6 col-lg-4 rv"><div class="why"><i class="fa-solid ${w[0]}"></i><h3>${w[1]}</h3><p>${w[2]}</p></div></div>`).join(''));
h($('#docGrid'), doctors.map((d, i) => `<div class="col-sm-6 col-lg-4 col-xl-3 rv"><article class="t-card doc"><div class="t-img">${img('doctor-' + (i + 1), 'Portrait placeholder for ' + d[1])}</div><div class="t-body"><h3>${d[0]}</h3><strong>${d[1]}</strong><small>Qualifications: [to be added once verified]<br>Experience: [to be added]</small><button class="btn btn-gold btn-sm mt-3" data-doc="${i}">View profile</button></div></article></div>`).join(''));
h($('#fDocs'), doctors.map((d, i) => `<li><a href="#doctors" data-doc="${i}">${d[1]}</a></li>`).join(''));
h($('#filters'), cats.map((c, i) => `<button type="button" class="${i ? '' : 'on'}" data-cat="${c}">${c}</button>`).join(''));
h($('#galGrid'), gallery.map(g => `<div class="col-sm-6 col-lg-3 gal" data-cat="${g[0]}"><div class="cmp"><img class="after" src="${IMG}gallery-${g[1]}.jpg" data-ph="${g[0]} sample" alt="After sample, ${g[0]}" loading="lazy"><img class="before" src="${IMG}gallery-${g[1]}.jpg" data-ph="${g[0]} sample" alt="Before sample, ${g[0]}" loading="lazy"><span class="tag l">Before</span><span class="tag r">After</span><div class="bar"></div><input type="range" min="0" max="100" value="50" aria-label="Compare before and after, ${g[0]} sample"></div><div class="cmp-cap"><span>${g[0]} · Illustrative sample</span><button type="button" data-lb="${g[1]}" data-t="${g[0]}">Enlarge</button></div></div>`).join(''));
h($('#expGrid'), exp.map((e, i) => `<div class="col-6 col-lg-3"><div class="exp-item">${img('clinic-' + (i + 1), e)}<span>${e}</span><div class="cover"></div></div></div>`).join(''));
h($('#steps'), '<div class="tl-line"></div>' + steps.map((s, i) => `<div class="step"><div class="n">${i + 1}</div><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join(''));
h($('#tSlides'), reviews.map((r, i) => `<div class="swiper-slide"><figure class="t-slide m-0">${img('client-' + (i + 1), 'Sample client portrait')}<div class="stars" aria-label="${r[1]} out of 5 stars">${'<i class="fa-solid fa-star"></i>'.repeat(r[1])}${'<i class="fa-regular fa-star"></i>'.repeat(5 - r[1])}</div><blockquote><p>“${r[2]}”</p></blockquote><figcaption><strong>${r[0]}</strong><br><small>Sample testimonial</small></figcaption></figure></div>`).join(''));
h($('#offerGrid'), offers.map((o, i) => `<div class="col-md-6 col-lg-3 rv"><div class="offer"><i class="fa-solid ${o[0]}"></i><h3>${o[1]}</h3><p>${o[2]}</p><div class="terms">${o[3]}</div><button class="btn btn-gold" data-offer="${i}">Request this offer</button></div></div>`).join(''));
h($('#faqAcc'), faqs.map((f, i) => `<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button ${i ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#f${i}" aria-expanded="${!i}" aria-controls="f${i}">${f[0]}</button></h3><div id="f${i}" class="accordion-collapse collapse ${i ? '' : 'show'}" data-bs-parent="#faqAcc"><div class="accordion-body">${f[1]}</div></div></div>`).join(''));
h($('#bTreat'), '<option value="" hidden></option>' + treatments.map(t => `<option>${t[0]}</option>`).join(''));
$('#yr').textContent = new Date().getFullYear();

/* ---------- Image fallback: no broken images ---------- */
const palette = [['#F2D9D3','#E9DCCB'],['#E9DCCB','#FBF7F1'],['#F7E6E1','#D9BE93'],['#FBF7F1','#F2D9D3']];
function placeholder(el) {
  if (el.dataset.fb) return; el.dataset.fb = 1;
  const n = [...(el.dataset.ph || 'x')].reduce((a, c) => a + c.charCodeAt(0), 0), p = palette[n % 4];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><circle cx="${200 + n % 400}" cy="${150 + n % 200}" r="170" fill="#fff" opacity=".35"/><path d="M400 210c42 50 60 84 60 112a60 60 0 0 1-120 0c0-28 18-62 60-112z" fill="#B8935A" opacity=".55"/><text x="400" y="460" font-family="Georgia,serif" font-size="30" fill="#6f625a" text-anchor="middle">${(el.dataset.ph || '').replace(/[<&]/g, '')}</text></svg>`;
  el.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
document.addEventListener('error', e => { if (e.target.tagName === 'IMG' && e.target.dataset.ph) placeholder(e.target); }, true);
$$('img[data-ph]').forEach(i => { if (i.complete && !i.naturalWidth) placeholder(i); });

/* ---------- Helpers: toast, modal ---------- */
const toast = m => { $('#toastB').textContent = m; bootstrap.Toast.getOrCreateInstance($('#toast'), { delay: 4500 }).show(); };
const info = { about: ['About Aurelle', 'Aurelle is a sample clinic identity. Replace this text with your clinic history, team and philosophy.'], privacy: ['Privacy Policy', 'Sample placeholder. Add your policy describing what personal data you collect, why, how long you keep it and how people can contact you.'], terms: ['Terms and Conditions', 'Sample placeholder. Add booking, cancellation, offer and website-use terms reviewed by your legal adviser.'] };
function openInfo(title, body, cta = true, treat) {
  $('#infoT').textContent = title; $('#infoB').innerHTML = '<p>' + body + '</p>' + (treat ? '<p class="note">Treatment suitability and results vary. A consultation is needed before any treatment.</p>' : '');
  $('#infoCta').style.display = cta ? '' : 'none'; $('#infoCta').dataset.treat = treat || '';
  bootstrap.Modal.getOrCreateInstance($('#infoModal')).show();
}
function goBook(treat) { if (treat) $('#bTreat').value = treat; $('#booking').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => $('#bName').focus({ preventScroll: true }), 700); }
document.addEventListener('click', e => {
  const t = e.target.closest('[data-treat],[data-doc],[data-info],[data-offer],[data-lb]'); if (!t) return;
  if (t.dataset.info) { e.preventDefault(); const d = info[t.dataset.info]; openInfo(d[0], d[1], t.dataset.info === 'about'); }
  else if (t.dataset.treat) { const d = treatments[t.dataset.treat]; openInfo(d[0], d[3], true, d[0]); }
  else if (t.dataset.doc) { e.preventDefault(); const d = doctors[t.dataset.doc]; openInfo(d[0], d[1] + '. Add a verified biography, qualifications, registration number and areas of interest here.', true); }
  else if (t.dataset.offer) { const o = offers[t.dataset.offer]; $('#bMsg').value = 'Offer enquiry: ' + o[1]; goBook('Skin Consultation'); }
  else if (t.dataset.lb) { $('#lbImg').src = IMG + 'gallery-' + t.dataset.lb + '.jpg'; $('#lbImg').dataset.ph = t.dataset.t + ' sample'; $('#lbImg').alt = t.dataset.t + ' illustrative sample'; $('#lbCap').textContent = t.dataset.t + ' · Illustrative sample. Results vary.'; bootstrap.Modal.getOrCreateInstance($('#lbModal')).show(); }
});
$('#infoCta').addEventListener('click', e => { setTimeout(() => goBook(e.currentTarget.dataset.treat), 350); });

/* ---------- Nav ---------- */
const nav = $('#nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40); onScroll(); addEventListener('scroll', onScroll, { passive: true });
$$('.nav-link').forEach(a => a.addEventListener('click', () => { const c = $('#menu'); if (c.classList.contains('show')) bootstrap.Collapse.getInstance(c)?.hide(); }));
const spy = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) $$('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
['home', 'about', 'treatments', 'why', 'gallery', 'doctors', 'contact'].forEach(id => spy.observe($('#' + id)));

/* ---------- Gallery: filters + compare ---------- */
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  $$('#filters button').forEach(x => x.classList.toggle('on', x === b));
  $$('.gal').forEach(g => { const show = b.dataset.cat === 'All' || g.dataset.cat === b.dataset.cat; g.style.display = show ? '' : 'none'; if (show && window.gsap) gsap.fromTo(g, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5 }); });
  window.ScrollTrigger && ScrollTrigger.refresh();
});
$$('.cmp input').forEach(r => r.addEventListener('input', () => { const c = r.parentElement; c.querySelector('.before').style.clipPath = `inset(0 ${100 - r.value}% 0 0)`; c.querySelector('.bar').style.left = r.value + '%'; }));

/* ---------- Swiper ---------- */
new Swiper('.tSwiper', { loop: true, speed: 800, autoplay: { delay: 5500, disableOnInteraction: false }, effect: 'fade', fadeEffect: { crossFade: true }, pagination: { el: '.swiper-pagination', clickable: true }, a11y: { enabled: true } });

/* ---------- Forms ---------- */
const bd = $('#bDate'); const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); bd.min = today.toISOString().slice(0, 10);
function validate(form) {
  let ok = true; $$('input,select,textarea', form).forEach(f => { const v = f.checkValidity() && (f.type !== 'date' || !f.value || f.value >= bd.min); f.classList.toggle('is-invalid', !v); if (!v) ok = false; });
  if (!ok) $('.is-invalid', form)?.focus(); return ok;
}
$$('form').forEach(f => f.addEventListener('input', e => { if (e.target.classList.contains('is-invalid')) e.target.classList.toggle('is-invalid', !e.target.checkValidity()); }));
$('#bookForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validate(e.target)) return;
  const ok = $('#bookOk'); ok.classList.remove('d-none');
  ok.innerHTML = `<strong>Request received, ${$('#bName').value.split(' ')[0]}.</strong> This is a request, not a confirmed booking. The clinic will contact you to confirm. <em>(Demo: no data was sent. Connect a backend or booking service before launch.)</em>`;
  toast('Appointment request recorded in this demo.'); e.target.reset(); window.gsap && gsap.from(ok, { y: 14, opacity: 0, duration: .6 });
});
$('#contactForm').addEventListener('submit', e => { e.preventDefault(); if (!validate(e.target)) return; toast('Message ready. Demo only, nothing was sent.'); e.target.reset(); });
$('#newsForm').addEventListener('submit', e => { e.preventDefault(); const i = $('#nEmail'); if (!i.checkValidity()) { i.classList.add('is-invalid'); return i.focus(); } i.classList.remove('is-invalid'); toast('Thanks. Subscription is a demo until connected to a mailing service.'); e.target.reset(); });

/* ---------- Animations ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
function counters() { $$('[data-count]').forEach(el => { const end = +el.dataset.count, s = el.dataset.suffix || ''; if (reduce) { el.textContent = fmt(end) + s; return; } const o = { v: 0 }; ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: end, duration: 2.2, ease: 'power2.out', onUpdate: () => el.textContent = fmt(o.v) + s }) }); }); }
function splitHero() { const t = $('#heroTitle'); t.setAttribute('aria-label', t.textContent); t.innerHTML = t.textContent.split(' ').map(w => `<span class="w" aria-hidden="true"><span>${w}</span></span>`).join(' '); }
splitHero();
if (!window.gsap || reduce) {
  $('#loader').remove(); counters();
} else {
  gsap.registerPlugin(ScrollTrigger);
  const heroIn = () => { gsap.from('#heroTitle .w span', { yPercent: 110, duration: 1.1, stagger: .12, ease: 'power4.out' }); gsap.from('.hero-kicker,.hero-sub,.hero-cta', { y: 30, opacity: 0, duration: 1, stagger: .2, delay: .6, ease: 'power3.out' }); gsap.from('.badge-float', { scale: .6, opacity: 0, duration: .9, stagger: .15, delay: 1.2, ease: 'back.out(1.7)' }); };
  gsap.timeline({ onComplete: () => { $('#loader').remove(); heroIn(); } })
    .from('.loader-logo', { y: 30, opacity: 0, duration: .9, ease: 'power3.out' }).to('.loader-line', { scaleX: 1, duration: .8 }, '-=.3')
    .to('#loader', { yPercent: -100, duration: .9, ease: 'power4.inOut', delay: .2 });
  // floating decoration
  gsap.to('.b1', { y: 40, x: -30, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' }); gsap.to('.b2', { y: -50, x: 40, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  $$('.badge-float').forEach((b, i) => gsap.to(b, { y: i % 2 ? 14 : -14, duration: 2.5 + i * .4, repeat: -1, yoyo: true, ease: 'sine.inOut' }));
  // parallax
  gsap.to('.hero-bg img', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.exp-bg img', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '.experience', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.to('.c2', { y: -40, ease: 'none', scrollTrigger: { trigger: '.collage', scrub: true } });
  counters();
  // reveals (used sparingly: grids and key blocks)
  ScrollTrigger.batch('.tcard,.rv', { start: 'top 88%', once: true, onEnter: b => gsap.fromTo(b, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: .09, ease: 'power3.out' }), });
  gsap.set('.tcard,.rv', { opacity: 0 });
  gsap.from('.collage img', { clipPath: 'inset(0 0 100% 0)', duration: 1.3, stagger: .25, ease: 'power3.inOut', scrollTrigger: { trigger: '.collage', start: 'top 80%' } });
  gsap.from('#about .col-lg-6:last-child > *', { y: 30, opacity: 0, stagger: .12, duration: .9, scrollTrigger: { trigger: '#about .col-lg-6:last-child', start: 'top 80%' } });
  $$('.exp-item').forEach((it, i) => gsap.to($('.cover', it), { scaleY: 0, duration: 1.1, delay: i * .1, ease: 'power3.inOut', scrollTrigger: { trigger: it, start: 'top 85%' } }));
  // timeline
  const vertical = () => innerWidth < 992;
  gsap.to('.tl-line', { [vertical() ? 'scaleY' : 'scaleX']: 1, ease: 'none', scrollTrigger: { trigger: '#steps', start: 'top 70%', end: 'bottom 60%', scrub: true } });
  $$('.step').forEach(s => gsap.from(s, { y: 30, opacity: 0, duration: .8, scrollTrigger: { trigger: s, start: 'top 88%' } }));
  $$('.sec-title').forEach(t => gsap.from(t, { y: 26, opacity: 0, duration: .9, scrollTrigger: { trigger: t, start: 'top 90%', once: true } }));
  addEventListener('load', () => ScrollTrigger.refresh());
}
