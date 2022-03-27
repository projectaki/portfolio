const sidenav = document.querySelector('#sidenav-mobile');
const sidenavToggle = document.querySelector('#sidenav-toggle');
const themeToggle = document.getElementById('toggle');
const links = document.querySelectorAll('.nav-link');
const tocContainer = document.querySelector('#toc-container');
const pageContent = document.querySelector('app-toc .page-content');

if (sidenav && sidenavToggle && themeToggle && links && tocContainer && pageContent) {
  setInitialTheme();
  setPreStyle();
  setCurrentRouterHighlight();
  createTOCFromHeadings();
  regEventListeners();
}

function regEventListeners() {
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  sidenavToggle.addEventListener('click', toggle);
  themeToggle.addEventListener('click', toggleTheme);
}

function closeMenu() {
  const contains = sidenav.classList.contains('hidden');
  if (!contains) sidenav.classList.add('hidden');
}

function toggle() {
  sidenav.classList.toggle('hidden');
}

function toggleTheme() {
  const isDark = !document.body.classList.contains('lightMode');
  document.body.classList.toggle('lightMode');

  localStorage.setItem('darkMode', !isDark);
  setThemeIcon(!isDark);
}

function setInitialTheme() {
  const isDark = JSON.parse(localStorage.getItem('darkMode'));
  if (isDark === null || isDark) {
    localStorage.setItem('darkMode', true);
    setThemeIcon(true);
  } else {
    localStorage.setItem('darkMode', false);
    setThemeIcon(false);
    document.body.classList.toggle('lightMode');
  }
}

function setThemeIcon(isDark) {
  themeToggle.innerHTML = isDark ? '🌞' : '🌚';
}

function setPreStyle() {
  const pres = document.querySelectorAll('pre');
  const preConts = [...pres].map(x => x.parentElement);

  preConts.forEach(p => p.classList.add('code-block'));
}

function setCurrentRouterHighlight() {
  const pathname = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(l => {
    if (l.pathname === pathname) l.style.backgroundColor = '#06c258';
  });
}

function createTOCFromHeadings() {
  if (!pageContent || !tocContainer) return;
  const search = ['H2', 'H3', 'H4', 'H5', 'H6'];
  const headerTocTuple = [];

  recurse(
    {
      elem: pageContent,
      tocContainer,
      search,
    },
    headerTocTuple
  );

  highlightOnScrollClosure(headerTocTuple);
}

function recurse({ elem, tocContainer, search }, headerTocTuple) {
  for (const child of elem.children) {
    if (search.some(x => x === child.tagName)) {
      child.id = getRandom();
      const el = createEl({ id: child.id, title: child.innerText });
      headerTocTuple.push({ header: child, tocLink: el });
      tocContainer.appendChild(el);
    }
    recurse({ elem: child, tocContainer, search }, headerTocTuple);
  }
}

function highlightOnScrollClosure(headerTocTuple) {
  let prevOffset = 0;

  const func = headerTocTuple => {
    for (const [idx, item] of headerTocTuple.entries()) {
      let isFirst = true;
      var observer = new IntersectionObserver(function (entries) {
        const [entry] = entries;
        if (isFirst) {
          isFirst = false;
        } else {
          // Enter viewport
          if (entry.isIntersecting) {
            const isScrollUp = entry.target.offsetTop < prevOffset;
            if (isScrollUp) {
              highlightActive(item.tocLink);
              prevOffset = entry.target.offsetTop;
            }
          }
          // Leave viewport
          else {
            if (idx !== headerTocTuple.length - 1) {
              const nextTuple = headerTocTuple[idx + 1];
              const isScrollDown = nextTuple.header.offsetTop > prevOffset;
              if (isScrollDown) {
                highlightActive(headerTocTuple[idx + 1].tocLink);
                prevOffset = nextTuple.header.offsetTop;
              }
            }
          }
        }
      });

      observer.observe(item.header);
    }
    highlightActive(headerTocTuple[0].tocLink);
  };

  return func(headerTocTuple);
}

function getRandom() {
  const array = new Uint32Array(1);
  return window.crypto.getRandomValues(array)[0];
}

function createEl({ id, title }) {
  const div = document.createElement('div');

  div.onclick = () => onClickHandler(id, div);
  div.innerText = title;
  div.classList.add('toc-link');
  return div;
}

function onClickHandler(id, div) {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: 'auto', block: 'start' });

  highlightActive(div);
}

function highlightActive(el) {
  for (let l of tocContainer.children) {
    l.classList.remove('active');
  }

  el.classList.add('active');
}
