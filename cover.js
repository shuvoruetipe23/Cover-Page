// Bind inputs/textareas with IDs like `inCourseTitle` to preview elements `outCourseTitle`.
// Preserves textarea newlines by setting `innerText` (preview CSS should use `white-space: pre-line`).

function initPreviewBindings() {
  const selector = 'input[id^="in"], textarea[id^="in"]';
  const nodes = document.querySelectorAll(selector);

  function saveValue(el) {
    try {
      if (el.type && el.type.toLowerCase() === 'file') return; // don't store files
      localStorage.setItem(el.id, el.value);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  nodes.forEach(el => {
    // skip file inputs (logo) and radio/checkbox groups
    if (el.tagName.toLowerCase() === 'input') {
      const t = el.type && el.type.toLowerCase();
      if (t === 'file' || t === 'radio' || t === 'checkbox' || t === 'button' || t === 'submit') return;
    }

    const handler = () => {
      const id = el.id;
      if (!id || !id.startsWith('in')) return;
      const outId = id.replace(/^in/, 'out');
      const outEl = document.getElementById(outId);
      if (outEl) {
        // Use innerText so textarea newlines are preserved in preview
        outEl.innerText = el.value;
      }
      saveValue(el);
    };

    el.addEventListener('input', handler);
  });

  // Load saved values (if any)
  nodes.forEach(el => {
    if (el.tagName.toLowerCase() === 'input') {
      const t = el.type && el.type.toLowerCase();
      if (t === 'file' || t === 'radio' || t === 'checkbox' || t === 'button' || t === 'submit') return;
    }
    const saved = localStorage.getItem(el.id);
    if (saved !== null) {
      el.value = saved;
      const outId = el.id.replace(/^in/, 'out');
      const outEl = document.getElementById(outId);
      if (outEl) outEl.innerText = el.value;
    }
  });

  // Clear button handling (if present)
  const clearBtn = document.getElementById('clearBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      nodes.forEach(el => {
        if (el.tagName.toLowerCase() === 'input') {
          const t = el.type && el.type.toLowerCase();
          if (t === 'file' || t === 'radio' || t === 'checkbox' || t === 'button' || t === 'submit') return;
        }
        try { localStorage.removeItem(el.id); } catch(e){}
        el.value = '';
        const outId = el.id.replace(/^in/, 'out');
        const outEl = document.getElementById(outId);
        if (outEl) outEl.innerText = '';
      });
      // clear saved logo too
      try { localStorage.removeItem('ruet_logo_vfinal'); } catch(e){}
      const previewLogo = document.getElementById('preview-logo');
      if (previewLogo) previewLogo.src = '';
      // trigger scale adjustment
      if (typeof adjustPreviewScale === 'function') adjustPreviewScale();
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPreviewBindings);
} else {
  initPreviewBindings();
}

function initLogoHandling() {
  const logoInput = document.getElementById('logoInput');
  const previewLogo = document.getElementById('preview-logo');
  if (!logoInput || !previewLogo) return;

  // Load saved logo if present
  try {
    const saved = localStorage.getItem('ruet_logo_vfinal');
    if (saved) previewLogo.src = saved;
  } catch (e) {}

  logoInput.addEventListener('change', function() {
    const file = this.files && this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewLogo.src = e.target.result;
      try { localStorage.setItem('ruet_logo_vfinal', e.target.result); } catch (err) {}
      previewLogo.onload = () => { if (typeof adjustPreviewScale === 'function') adjustPreviewScale(); };
    };
    reader.readAsDataURL(file);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { initLogoHandling(); });
} else {
  initLogoHandling();
}

// Generate PDF using html2pdf.js with high-quality settings
function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9_.-]/gi, '_');
}

function generatePDF() {
  const element = document.getElementById('cover-page');
  if (!element) return;

  const typeInput = document.querySelector('input[name="reportType"]:checked');
  const typeName = typeInput ? typeInput.value : 'Report';
  const courseNo = (document.getElementById('inCourseNo') && document.getElementById('inCourseNo').value) || '';
  const baseName = `${typeName}${courseNo ? '_' + courseNo : ''}`;
  const filename = `${sanitizeFilename(baseName)}.pdf`;

  const opt = {
    margin: 0,
    filename: filename,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // ensure the preview is fully rendered and scaled before export
  if (typeof adjustPreviewScale === 'function') adjustPreviewScale();

  html2pdf().set(opt).from(element).save();
}

// expose globally for the inline onclick
window.generatePDF = generatePDF;

// Calculate width of .preview-area and scale #cover-page to fit without horizontal scrolling
function adjustPreviewScale() {
  const previewArea = document.querySelector('.preview-area');
  const cover = document.getElementById('cover-page');
  if (!previewArea || !cover) return;

  // available width inside preview area (use clientWidth)
  const availableWidth = Math.max(32, previewArea.clientWidth - 32);
  const coverRect = cover.getBoundingClientRect();
  const coverWidth = coverRect.width || cover.offsetWidth;
  const coverHeight = coverRect.height || cover.offsetHeight;

  if (!coverWidth || !coverHeight) return;

  // compute width-based scale
  const scaleWidth = Math.min(1, availableWidth / coverWidth);

  // compute height-based scale so the cover fits within the visible viewport height
  const previewTop = previewArea.getBoundingClientRect().top;
  const availableHeight = Math.max(64, window.innerHeight - previewTop - 20);
  const scaleHeight = Math.min(1, availableHeight / coverHeight);

  // choose the smaller scale so it fits both horizontally and vertically
  const scale = Math.min(scaleWidth, scaleHeight);

  // Apply transform and zoom for broader compatibility
  cover.style.transformOrigin = 'top center';
  cover.style.transform = `scale(${scale})`;
  cover.style.zoom = scale;

  // ensure the preview area doesn't show horizontal scroll
  previewArea.style.overflowX = 'hidden';

  return scale;
}

// expose globally so other scripts can call it
window.adjustPreviewScale = adjustPreviewScale;
