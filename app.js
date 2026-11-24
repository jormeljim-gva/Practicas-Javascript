const nav = document.querySelector('#exercise-nav');
const search = document.querySelector('#search');
const welcome = document.querySelector('#welcome');
const workspace = document.querySelector('#workspace');
const frame = document.querySelector('#exercise-frame');
const output = document.querySelector('#console-output');
const state = { exercises: [], selected: null, codeType: 'html' };

document.querySelector('#home-link').addEventListener('click', event => {
  event.preventDefault();
  state.selected = null;
  workspace.hidden = true;
  welcome.hidden = false;
  document.querySelector('#crumb-current').textContent = 'Selecciona un ejercicio';
  history.replaceState(null, '', location.pathname);
  renderNav();
});

const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function loadCatalog() {
  try {
    const response = await fetch('./exercises.json');
    if (!response.ok) throw new Error(`No se pudo cargar exercises.json (${response.status})`);
    const catalog = await response.json();
    state.exercises = catalog.exercises || [];
    document.querySelector('#stat-exercises').textContent = state.exercises.length;
    document.querySelector('#exercise-count').textContent = state.exercises.length;
    document.querySelector('#stat-groups').textContent = catalog.groups?.length ?? new Set(state.exercises.map(item => item.group)).size;
    document.querySelector('#group-count').textContent = `${catalog.groups?.length ?? 0} grupos`;
    renderNav();
    const initialId = new URLSearchParams(location.search).get('exercise');
    if (initialId && state.exercises.some(item => item.id === initialId)) selectExercise(initialId);
  } catch (error) {
    nav.innerHTML = `<div class="empty-nav">${esc(error.message)}<br><br>Abre esta página con Live Server o un servidor local.</div>`;
  }
}

function renderNav() {
  const query = normalize(search.value.trim());
  const matching = state.exercises.filter(item => normalize(`${item.group} ${item.section} ${item.title} ${item.html} ${item.js}`).includes(query));
  if (!matching.length) { nav.innerHTML = '<div class="empty-nav">No se encontraron ejercicios.</div>'; return; }
  const grouped = new Map();
  for (const item of matching) {
    const key = item.group;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(item);
  }
  nav.innerHTML = [...grouped].map(([group, items]) => {
    const expanded = query || items.some(item => item.id === state.selected?.id) || !document.querySelector(`[data-group="${CSS.escape(group)}"]`)?.hidden;
    return `<section class="nav-group"><button class="group-toggle" data-toggle="${esc(group)}" aria-expanded="${Boolean(expanded)}"><span class="group-chevron">${expanded ? '▾' : '▸'}</span><span class="group-name">${esc(group)}</span><span class="group-count">${items.length}</span></button><div class="exercise-list" data-group="${esc(group)}" ${expanded ? '' : 'hidden'}>${items.map(item => `<button class="exercise-link ${state.selected?.id === item.id ? 'active' : ''}" data-exercise="${esc(item.id)}"><span class="exercise-number">${String(item.number).padStart(2,'0')}</span><span>${esc(item.title)}</span></button>`).join('')}</div></section>`;
  }).join('');
}

function selectExercise(id) {
  const item = state.exercises.find(entry => entry.id === id);
  if (!item) return;
  state.selected = item;
  welcome.hidden = true;
  workspace.hidden = false;
  document.querySelector('#crumb-current').textContent = `${item.group} / ${item.title}`;
  document.querySelector('#exercise-group').textContent = item.group.toUpperCase() + (item.section ? `  /  ${item.section.toUpperCase()}` : '');
  document.querySelector('#exercise-title').textContent = item.title;
  document.querySelector('#exercise-path').textContent = item.html;
  document.querySelector('#open-new').href = item.html;
  output.innerHTML = '<span class="console-muted">Esperando salida del ejercicio…</span>';
  loadPreview(item);
  renderNav();
  loadCode('html');
  history.replaceState(null, '', `?exercise=${encodeURIComponent(item.id)}`);
}

async function loadPreview(item) {
  output.innerHTML = '<span class="console-muted">Esperando salida del ejercicio…</span>';
  try {
    const response = await fetch(item.html);
    if (!response.ok) throw new Error(`No se pudo cargar la vista previa (${response.status})`);
    let html = await response.text();
    const base = new URL('.', new URL(item.html, location.href)).href;
    const bridge = `<base href="${base}"><script>(()=>{const send=(kind,args)=>parent.postMessage({type:'practice-console',kind,args},'*');addEventListener('error',e=>send('error',[e.message,e.filename,e.lineno?'línea '+e.lineno:''].filter(Boolean)));addEventListener('unhandledrejection',e=>send('error',['Promise rechazada:',String(e.reason)]));for(const kind of ['log','info','warn','error']){const original=console[kind].bind(console);console[kind]=(...args)=>{original(...args);send(kind,args.map(x=>{try{return typeof x==='string'?x:JSON.stringify(x)}catch{return String(x)}}))}}})()<\/script>`;
    if (/<head\b[^>]*>/i.test(html)) html = html.replace(/<head\b[^>]*>/i, match => match + bridge);
    else html = `<!doctype html><html><head>${bridge}</head><body>${html}</body></html>`;
    frame.srcdoc = html;
  } catch (error) {
    output.innerHTML = `<span class="console-error">${esc(error.message)}. Abre la página con Live Server o un servidor local.</span>`;
  }
}

async function loadCode(type) {
  if (!state.selected) return;
  state.codeType = type;
  document.querySelectorAll('.code-tab').forEach(button => button.classList.toggle('active', button.dataset.code === type));
  const path = state.selected[type];
  const code = document.querySelector('#code-content');
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`No se pudo leer el archivo (${response.status})`);
    code.textContent = await response.text();
  } catch (error) { code.textContent = `${error.message}\n\nComprueba que has abierto la página desde un servidor local.`; }
}

function addConsoleMessage(kind, args) {
  const content = args.map(arg => {
    if (arg instanceof Error) return `${arg.name}: ${arg.message}\n${arg.stack || ''}`;
    if (typeof arg === 'string') return arg;
    try { return JSON.stringify(arg, null, 2) ?? String(arg); } catch { return String(arg); }
  }).join(' ');
  const empty = output.querySelector('.console-muted');
  if (empty) empty.remove();
  const line = document.createElement('div');
  line.className = kind === 'error' ? 'console-error' : kind === 'warn' ? 'console-warn' : '';
  line.textContent = `${kind === 'error' ? '✕' : kind === 'warn' ? '!' : '›'} ${content}`;
  output.append(line);
}

window.addEventListener('message', event => {
  if (event.source !== frame.contentWindow || event.data?.type !== 'practice-console') return;
  addConsoleMessage(event.data.kind, event.data.args || []);
});

nav.addEventListener('click', event => {
  const exercise = event.target.closest('[data-exercise]');
  if (exercise) return selectExercise(exercise.dataset.exercise);
  const toggle = event.target.closest('[data-toggle]');
  if (toggle) {
    const list = nav.querySelector(`[data-group="${CSS.escape(toggle.dataset.toggle)}"]`);
    list.hidden = !list.hidden;
    toggle.setAttribute('aria-expanded', String(!list.hidden));
    toggle.querySelector('.group-chevron').textContent = list.hidden ? '▸' : '▾';
  }
});
search.addEventListener('input', renderNav);
document.querySelector('#random-exercise').addEventListener('click', () => { if (state.exercises.length) selectExercise(state.exercises[Math.floor(Math.random() * state.exercises.length)].id); });
document.querySelector('#reload-frame').addEventListener('click', () => { if (state.selected) loadPreview(state.selected); });
document.querySelector('#clear-console').addEventListener('click', () => { output.innerHTML = '<span class="console-muted">Los errores del ejercicio aparecerán aquí.</span>'; });
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(item => item.classList.toggle('active', item === tab));
  const codeMode = tab.dataset.panel === 'code';
  document.querySelector('#preview-panel').hidden = codeMode;
  document.querySelector('#code-panel').hidden = !codeMode;
  if (codeMode) loadCode(state.codeType);
}));
document.querySelectorAll('.code-tab').forEach(tab => tab.addEventListener('click', () => loadCode(tab.dataset.code)));
document.querySelector('#copy-code').addEventListener('click', async event => {
  try { await navigator.clipboard.writeText(document.querySelector('#code-content').textContent); event.currentTarget.innerHTML = 'Copiado <span>✓</span>'; setTimeout(() => event.currentTarget.innerHTML = 'Copiar código <span>▢</span>', 1400); }
  catch { event.currentTarget.innerHTML = 'No disponible <span>!</span>'; }
});
document.addEventListener('keydown', event => { if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); } if (event.key === 'Escape' && document.activeElement === search) { search.value = ''; renderNav(); search.blur(); } });
loadCatalog();
