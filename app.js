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

// ============================================
// Snowflake Interactive Widget Handlers
// ============================================

function updateWarehouseCalc() {
  const sizeSelect = document.getElementById('sf-wh-size');
  const clustersInput = document.getElementById('sf-wh-clusters');
  const hoursInput = document.getElementById('sf-wh-hours');
  const rateInput = document.getElementById('sf-wh-rate');

  if (!sizeSelect || !clustersInput || !hoursInput || !rateInput) return;

  const baseCredits = parseFloat(sizeSelect.value) || 1;
  const maxClusters = parseInt(clustersInput.value) || 1;
  const activeHours = parseFloat(hoursInput.value) || 8;
  const creditRate = parseFloat(rateInput.value) || 3.0;

  // Credits per hour range
  const minCreditsHr = baseCredits;
  const maxCreditsHr = baseCredits * maxClusters;

  // Monthly calculation (30 days)
  const monthlyMinCredits = minCreditsHr * activeHours * 30;
  const monthlyMaxCredits = maxCreditsHr * activeHours * 30;
  const monthlyMinCost = monthlyMinCredits * creditRate;
  const monthlyMaxCost = monthlyMaxCredits * creditRate;

  // Concurrency limit per cluster (8 queries per server)
  const concurrency = maxClusters * (baseCredits * 8);

  document.getElementById('sf-credits-hr').innerText = maxClusters > 1 ? `${minCreditsHr}-${maxCreditsHr} Cr` : `${minCreditsHr} Cr`;
  document.getElementById('sf-monthly-credits').innerText = `${monthlyMinCredits.toLocaleString()}-${monthlyMaxCredits.toLocaleString()} Cr`;
  document.getElementById('sf-monthly-cost').innerText = `$${monthlyMinCost.toLocaleString(undefined, {maximumFractionDigits:0})} - $${monthlyMaxCost.toLocaleString(undefined, {maximumFractionDigits:0})}`;
  document.getElementById('sf-concurrency').innerText = `${concurrency} Queries`;
  
  const clusterValEl = document.getElementById('sf-clusters-val');
  if (clusterValEl) clusterValEl.innerText = `${maxClusters} Cluster${maxClusters > 1 ? 's' : ''}`;
  const hoursValEl = document.getElementById('sf-hours-val');
  if (hoursValEl) hoursValEl.innerText = `${activeHours} hrs/day`;
}

function scrubTimeline(daysAgo) {
  const days = parseInt(daysAgo);
  const now = new Date();
  const targetDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  const isoStr = targetDate.toISOString().replace('T', ' ').substring(0, 19);

  const sqlEl = document.getElementById('sf-tt-sql');
  const statusEl = document.getElementById('sf-tt-status');
  const nodeA = document.getElementById('sf-node-a');
  const nodeB = document.getElementById('sf-node-b');
  const cloneEl = document.getElementById('sf-tt-clone');

  if (sqlEl) {
    sqlEl.innerText = `SELECT * FROM sales_fact AT(TIMESTAMP => '${isoStr}'::timestamp_tz);`;
  }

  if (statusEl && nodeA && nodeB) {
    if (days === 0) {
      statusEl.innerText = `State: CURRENT (Live production view with active writes)`;
      nodeA.className = 'sf-pointer-node active';
      nodeB.className = 'sf-pointer-node active';
      if (cloneEl) cloneEl.innerText = `CREATE TABLE sales_clone CLONE sales_fact; -- Instant zero-copy metadata pointer!`;
    } else if (days <= 7) {
      statusEl.innerText = `State: TIME TRAVEL ACTIVE (${days} day(s) ago) - Queryable without restoring!`;
      nodeA.className = 'sf-pointer-node active';
      nodeB.className = 'sf-pointer-node';
      if (cloneEl) cloneEl.innerText = `CREATE TABLE sales_past CLONE sales_fact AT(TIMESTAMP => '${isoStr}'::timestamp_tz);`;
    } else {
      statusEl.innerText = `State: FAIL-SAFE STORAGE (${days} days ago) - Historical storage active, non-queryable directly (Contact Snowflake Support)`;
      nodeA.className = 'sf-pointer-node';
      nodeB.className = 'sf-pointer-node';
      if (cloneEl) cloneEl.innerText = `-- Beyond Time Travel window. Recoverable via Fail-Safe request.`;
    }
  }
}

function updateCopyPreview() {
  const fmt = document.getElementById('sf-copy-fmt')?.value || 'CSV';
  const onError = document.getElementById('sf-copy-error')?.value || 'CONTINUE';
  const purge = document.getElementById('sf-copy-purge')?.checked ? 'TRUE' : 'FALSE';
  const force = document.getElementById('sf-copy-force')?.checked ? 'TRUE' : 'FALSE';

  const previewEl = document.getElementById('sf-copy-code');
  if (previewEl) {
    previewEl.innerText = `COPY INTO analytics.raw_events
FROM @my_s3_stage/incoming/2026/
FILE_FORMAT = (TYPE = '${fmt}' ${fmt === 'CSV' ? "FIELD_DELIMITER = ',' SKIP_HEADER = 1" : "STRIP_OUTER_ARRAY = TRUE"})
ON_ERROR = '${onError}'
PURGE = ${purge}
FORCE = ${force};`;
  }
}

// ============================================
// Real-Time UPI & Banking AI Simulator Handlers
// ============================================

function updateUpiSimulator() {
  const amount = parseFloat(document.getElementById('upi-amount')?.value || 5000);
  const velocity = parseInt(document.getElementById('upi-velocity')?.value || 2);
  const isRooted = document.getElementById('upi-rooted')?.checked;
  const isLocationAnomaly = document.getElementById('upi-location')?.checked;
  const isNewReceiver = document.getElementById('upi-receiver')?.checked;

  let riskScore = 5; // Base score

  // Calculate weighted risk components
  let shapAmount = 0;
  if (amount > 100000) shapAmount = 35;
  else if (amount > 25000) shapAmount = 20;
  else if (amount > 10000) shapAmount = 10;

  let shapVelocity = velocity > 10 ? 30 : (velocity > 5 ? 18 : (velocity > 3 ? 8 : 2));
  let shapRooted = isRooted ? 25 : 0;
  let shapLoc = isLocationAnomaly ? 20 : 0;
  let shapReceiver = isNewReceiver ? 15 : 0;

  riskScore += shapAmount + shapVelocity + shapRooted + shapLoc + shapReceiver;
  if (riskScore > 100) riskScore = 99;

  // Determine Decision Action
  let actionText = '';
  let badgeClass = '';
  if (riskScore <= 20) {
    actionText = 'Approve (Low Risk)';
    badgeClass = 'approve';
  } else if (riskScore <= 50) {
    actionText = 'Approve with Monitoring';
    badgeClass = 'monitor';
  } else if (riskScore <= 70) {
    actionText = 'Require OTP / Biometric Verification';
    badgeClass = 'otp';
  } else if (riskScore <= 90) {
    actionText = 'Hold for Analyst Review';
    badgeClass = 'hold';
  } else {
    actionText = 'Block Transaction & Create Fraud Case';
    badgeClass = 'block';
  }

  // Latency calculation (<50ms SLA)
  const baseLatency = 18;
  const simulatedLatency = (baseLatency + Math.floor(Math.random() * 8)).toFixed(1);

  // Update UI Elements
  const scoreEl = document.getElementById('upi-risk-score');
  if (scoreEl) scoreEl.innerText = `${riskScore} / 100`;

  const actionEl = document.getElementById('upi-action-badge');
  if (actionEl) {
    actionEl.className = `status-badge ${badgeClass}`;
    actionEl.innerText = actionText;
  }

  const latencyEl = document.getElementById('upi-latency');
  if (latencyEl) latencyEl.innerText = `${simulatedLatency} ms`;

  // Update SHAP Bars
  updateShapBar('shap-amount-bar', 'shap-amount-val', shapAmount, 40);
  updateShapBar('shap-velocity-bar', 'shap-velocity-val', shapVelocity, 35);
  updateShapBar('shap-rooted-bar', 'shap-rooted-val', shapRooted, 30);
  updateShapBar('shap-location-bar', 'shap-location-val', shapLoc, 25);
}

function updateShapBar(barId, valId, val, maxVal) {
  const bar = document.getElementById(barId);
  const valEl = document.getElementById(valId);

  if (valEl) valEl.innerText = `+${val}`;

  if (bar) {
    const pct = Math.min(100, Math.round((val / maxVal) * 100));
    bar.style.width = `${pct}%`;

    if (val >= 20) bar.className = 'shap-bar-fill high';
    else if (val >= 10) bar.className = 'shap-bar-fill medium';
    else bar.className = 'shap-bar-fill low';
  }
}

function calculateBankingRoi() {
  const annualVolMillions = parseFloat(document.getElementById('roi-vol')?.value || 500); // 500M transactions
  const avgValue = parseFloat(document.getElementById('roi-avg-val')?.value || 1500); // ₹1,500
  const baselineFraudPct = parseFloat(document.getElementById('roi-fraud-rate')?.value || 0.08); // 0.08%
  const fraudPreventionPct = parseFloat(document.getElementById('roi-prevention-pct')?.value || 92); // 92%
  const fpReductionPct = parseFloat(document.getElementById('roi-fp-reduction')?.value || 65); // 65%

  // Total Gross Volume
  const totalVolume = annualVolMillions * 1000000;
  const totalGrossValue = totalVolume * avgValue;

  // Baseline Fraud Loss (without AI Engine)
  const baselineFraudLoss = (totalGrossValue * (baselineFraudPct / 100));

  // Annual Fraud Saved by AI Engine
  const annualFraudSaved = baselineFraudLoss * (fraudPreventionPct / 100);

  // False Positive Investigation Savings (Baseline 0.5% flagged @ ₹150 cost per manual review)
  const baselineFpCount = totalVolume * 0.005;
  const fpSaved = baselineFpCount * (fpReductionPct / 100) * 150;

  // Operational Cost of Platform (Infrastructure, Cloud GPU, Licenses, MLOps Maintenance)
  const platformCost = 18000000; // ₹1.8 Crore (~$215K)

  // Total Net Savings & ROI
  const totalSavings = annualFraudSaved + fpSaved;
  const netSavings = totalSavings - platformCost;
  const roiPct = Math.round((netSavings / platformCost) * 100);

  // Update UI Elements
  document.getElementById('roi-fraud-saved').innerText = `₹${(annualFraudSaved / 10000000).toFixed(2)} Cr`;
  document.getElementById('roi-fp-saved').innerText = `₹${(fpSaved / 10000000).toFixed(2)} Cr`;
  document.getElementById('roi-net-savings').innerText = `₹${(netSavings / 10000000).toFixed(2)} Cr`;
  document.getElementById('roi-pct-val').innerText = `${roiPct}% ROI`;
}


