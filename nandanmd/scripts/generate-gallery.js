#!/usr/bin/env node
/**
 * Build script: reads content/gallery/*.md (from Decap CMS) and writes gallery.json
 * for the site to load and display. Run during Netlify build.
 */
const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content', 'gallery');
const outFile = path.join(__dirname, '..', 'gallery.json');

let items = [];
try {
  if (!fs.existsSync(contentDir)) {
    fs.writeFileSync(outFile, JSON.stringify([], null, 2));
    console.log('No content/gallery folder, wrote empty gallery.json');
    process.exit(0);
  }
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) continue;
    const front = match[1];
    const get = (key) => {
      const m = front.match(new RegExp('^' + key + ':\\s*(.+)$', 'm'));
      return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : '';
    };
    const procedure = get('procedure');
    let image = get('image');
    if (image && !image.startsWith('/') && !image.startsWith('http')) image = '/images/gallery/' + image;
    if (image && image.startsWith('/') && !image.startsWith('/images/')) image = '/images/gallery/' + path.basename(image);
    items.push({ procedure, image, caption: get('caption') || '' });
  }
  items.sort((a, b) => (a.procedure || '').localeCompare(b.procedure || ''));
} catch (e) {
  console.error('generate-gallery error:', e.message);
}

fs.writeFileSync(outFile, JSON.stringify(items, null, 2));
console.log('Wrote gallery.json with', items.length, 'items');
