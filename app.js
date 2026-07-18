// ============================================
// NextGenData & MLOps – Application Logic
// Sidebar, Routing, Search, Interactivity
// ============================================

// ─── State ───────────────────────────────────────
let currentPage = 'home';
let searchOpen = false;
let sidebarOpen = false;

// ─── Initialize ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  setupSearch();
  setupMobileToggle();
  setupKeyboardShortcuts();

  // Load initial page from URL hash or default to home
  const hash = window.location.hash.slice(1);
  if (hash && SITE_CONTENT[hash]) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
});

// ─── Sidebar ─────────────────────────────────────
function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  let html = '';

  // Home link
  html += `<div class="nav-item" data-page="home" onclick="navigateTo('home')">
    <span class="item-icon">🏠</span> Home
  </div>`;

  NAV_STRUCTURE.forEach((section, idx) => {
    html += `
      <div class="nav-folder" id="folder-${idx}">
        <div class="nav-folder-title" onclick="toggleFolder(${idx})">
          <span class="folder-icon">${section.icon}</span>
          <span>${section.title}</span>
          <span class="chevron">▶</span>
        </div>
        <div class="nav-folder-children">`;

    section.children.forEach(child => {
      html += `
          <div class="nav-item" data-page="${child.id}" onclick="navigateTo('${child.id}')">
            <span class="item-icon">${child.icon}</span>
            ${child.title}
          </div>`;
    });

    html += `
        </div>
      </div>`;
  });

  nav.innerHTML = html;
}

function toggleFolder(idx) {
  const folder = document.getElementById(`folder-${idx}`);
  folder.classList.toggle('open');
}

function openParentFolder(pageId) {
  NAV_STRUCTURE.forEach((section, idx) => {
    const hasChild = section.children.some(c => c.id === pageId);
    if (hasChild) {
      const folder = document.getElementById(`folder-${idx}`);
      if (folder) folder.classList.add('open');
    }
  });
}

// ─── Navigation / Routing ────────────────────────
function navigateTo(pageId) {
  const page = SITE_CONTENT[pageId];
  if (!page) return;

  currentPage = pageId;
  window.location.hash = pageId === 'home' ? '' : pageId;

  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageId);
  });

  // Open parent folder
  openParentFolder(pageId);

  // Update breadcrumb
  updateBreadcrumb(page);

  // Render page content
  renderPage(page);

  // Close mobile sidebar
  if (sidebarOpen) toggleMobileSidebar();

  // Close search
  if (searchOpen) closeSearch();

  // Scroll to top
  document.querySelector('.main-content').scrollTo(0, 0);
}

function updateBreadcrumb(page) {
  const breadcrumb = document.getElementById('breadcrumb');
  if (page.id === 'home') {
    breadcrumb.innerHTML = `
      <span class="breadcrumb-current">🏠 Home</span>`;
  } else {
    breadcrumb.innerHTML = `
      <span class="breadcrumb-item" onclick="navigateTo('home')">🏠 Home</span>
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-item" onclick="navigateTo('home')">${page.category}</span>
      <span class="breadcrumb-separator">›</span>
      <span class="breadcrumb-current">${page.title}</span>`;
  }
}

function renderPage(page) {
  const content = document.getElementById('page-content');

  if (page.id === 'home') {
    content.innerHTML = `<div class="page-content-animated">${page.body}</div>`;
    if (window.mermaid) { setTimeout(() => mermaid.run({ querySelector: '.mermaid' }).catch(console.error), 0); }
    return;
  }

  let tagsHtml = '';
  if (page.tags && page.tags.length) {
    tagsHtml = `<div class="page-tags">${page.tags.map(t => `<span class="tag">#${t}</span>`).join('')}</div>`;
  }

  content.innerHTML = `
    <div class="page-content-animated">
      <div class="page-header">
        <h1>${page.title}</h1>
        <div class="page-meta">
          <span class="page-meta-item">
            <span class="meta-icon">📁</span> ${page.category}
          </span>
          <span class="page-meta-item">
            <span class="meta-icon">📅</span> Updated ${formatDate(page.lastUpdated)}
          </span>
        </div>
        ${tagsHtml}
      </div>
      <div class="page-body">
        ${page.body}
      </div>
    </div>`;

  if (window.mermaid) {
    setTimeout(() => mermaid.run({ querySelector: '.mermaid' }).catch(console.error), 0);
  }
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ─── Search ──────────────────────────────────────
function setupSearch() {
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  input.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });
}

function openSearch() {
  searchOpen = true;
  const overlay = document.getElementById('search-overlay');
  overlay.classList.add('active');
  const input = document.getElementById('search-input');
  input.value = '';
  input.focus();
  performSearch('');
}

function closeSearch() {
  searchOpen = false;
  document.getElementById('search-overlay').classList.remove('active');
}

function performSearch(query) {
  const results = document.getElementById('search-results');
  const q = query.toLowerCase().trim();

  if (!q) {
    // Show all pages when empty
    const allPages = Object.values(SITE_CONTENT).filter(p => p.id !== 'home');
    results.innerHTML = allPages.map(p => searchResultItem(p)).join('');
    return;
  }

  // Fuzzy search across titles, categories, and tags
  const matches = Object.values(SITE_CONTENT)
    .filter(page => {
      if (page.id === 'home') return false;
      const searchable = [
        page.title,
        page.category,
        ...(page.tags || []),
      ].join(' ').toLowerCase();
      // Simple fuzzy: check if all query words appear somewhere
      return q.split(' ').every(word => searchable.includes(word));
    })
    .slice(0, 15);

  if (matches.length === 0) {
    results.innerHTML = `<div class="search-empty">No results found for "${query}"</div>`;
  } else {
    results.innerHTML = matches.map(p => searchResultItem(p)).join('');
  }
}

function searchResultItem(page) {
  return `
    <div class="search-result-item" onclick="navigateTo('${page.id}')">
      <span class="search-result-icon">📄</span>
      <div>
        <div class="search-result-title">${page.title}</div>
        <div class="search-result-category">${page.category}</div>
      </div>
    </div>`;
}

// ─── Mobile ──────────────────────────────────────
function setupMobileToggle() {
  const backdrop = document.getElementById('sidebar-backdrop');
  backdrop.addEventListener('click', toggleMobileSidebar);
}

function toggleMobileSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('mobile-open', sidebarOpen);
  document.getElementById('sidebar-backdrop').classList.toggle('active', sidebarOpen);
  document.getElementById('mobile-toggle-btn').innerHTML = sidebarOpen ? '✕' : '☰';
}

// ─── Keyboard Shortcuts ──────────────────────────
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOpen) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    // Escape to close search
    if (e.key === 'Escape' && searchOpen) {
      closeSearch();
    }
  });
}

// ─── Code Copy ───────────────────────────────────
function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('.code-content pre').textContent;

  navigator.clipboard.writeText(code).then(() => {
    button.classList.add('copied');
    button.innerHTML = '✅ Copied!';
    setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = '📋 Copy';
    }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    button.classList.add('copied');
    button.innerHTML = '✅ Copied!';
    setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = '📋 Copy';
    }, 2000);
  });
}

// ─── Hash Change Listener ────────────────────────
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash && SITE_CONTENT[hash] && hash !== currentPage) {
    navigateTo(hash);
  } else if (!hash && currentPage !== 'home') {
    navigateTo('home');
  }
});
