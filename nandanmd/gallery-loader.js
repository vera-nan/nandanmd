(function () {
  'use strict';
  var procedure = document.body.getAttribute('data-procedure');
  var container = document.getElementById('cms-gallery');
  if (!procedure || !container) return;
  fetch('gallery.json')
    .then(function (r) { return r.json(); })
    .then(function (items) {
      var list = Array.isArray(items) ? items.filter(function (i) { return i.procedure === procedure && i.image; }) : [];
      if (list.length === 0) return;
      var html = '<span class="section-label" style="display:block;margin-top:2rem;">From the practice</span><h2 class="section-title" style="margin-bottom:0.5rem;">More patient results</h2>';
      list.forEach(function (item) {
        html += '<article class="gallery-case"><div class="gallery-case-image"><img src="' + (item.image || '').replace(/"/g, '&quot;') + '" alt="" /></div>';
        html += '<div class="gallery-case-content"><h3>Patient result</h3><p>' + (item.caption || '').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p></div></article>';
      });
      container.innerHTML = html;
    })
    .catch(function () {});
})();
