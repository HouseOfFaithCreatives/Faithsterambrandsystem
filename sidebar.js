document.write(`
<aside class="bs-sidebar">
  <div class="bs-logo">
    <div class="bs-logo-mark">✦</div>
    FAITHSTREAM
  </div>
  <div class="bs-subtitle">Brand System — v1.0</div>

  <div class="bs-nav-group">
    <div class="bs-nav-item" data-page="index" onclick="location.href='index.html'">
      <span class="bs-nav-num">00</span>Overview
    </div>
  </div>

  <div class="bs-nav-group">
    <div class="bs-nav-label">Strategy</div>
    <div class="bs-nav-item" data-page="foundations" onclick="location.href='foundations.html'">
      <span class="bs-nav-num">01</span>Foundations
    </div>
  </div>

  <div class="bs-nav-group">
    <div class="bs-nav-label">Visual Identity</div>
    <div class="bs-nav-item" data-page="identity" onclick="location.href='identity.html'">
      <span class="bs-nav-num">02</span>Logo, Color & Type
    </div>
    <div class="bs-nav-item" data-page="patterns" onclick="location.href='patterns.html'">
      <span class="bs-nav-num">03</span>Motifs & Imagery
    </div>
  </div>

  <div class="bs-nav-group">
    <div class="bs-nav-label">Product</div>
    <div class="bs-nav-item" data-page="components" onclick="location.href='components.html'">
      <span class="bs-nav-num">04</span>Components
    </div>
    <div class="bs-nav-item" data-page="web-ui" onclick="location.href='web-ui.html'">
      <span class="bs-nav-num">05</span>Web & UI System
    </div>
  </div>

  <div class="bs-nav-group">
    <div class="bs-nav-label">Operating</div>
    <div class="bs-nav-item" data-page="governance" onclick="location.href='governance.html'">
      <span class="bs-nav-num">06</span>Governance
    </div>
  </div>
</aside>
`);

document.addEventListener('DOMContentLoaded', () => {
  const current = document.body.dataset.page;
  document.querySelectorAll('.bs-nav-item').forEach(item => {
    if (item.dataset.page === current) item.classList.add('active');
  });
});
