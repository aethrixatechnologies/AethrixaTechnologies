const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'pages')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace light class followed by dark class e.g., bg-white dark:bg-slate-900 -> bg-slate-900
  // Handle bg, text, border, from, via, to, shadow
  const prefixes = ['bg', 'text', 'border', 'from', 'via', 'to', 'shadow', 'ring', 'fill', 'stroke'];
  
  prefixes.forEach(prefix => {
    // Regex explanation:
    // Match the prefix, a hyphen, then the class value (letters, numbers, hyphens, slashes, brackets)
    // Then optionally some whitespace
    // Then dark: prefix and the dark class value
    // This assumes they are next to each other, like bg-white dark:bg-slate-900
    const regex = new RegExp(`\\b${prefix}-[a-zA-Z0-9/\\[\\]#-]+(?:/[0-9]+)?\\s+dark:(${prefix}-[a-zA-Z0-9/\\[\\]#-]+(?:/[0-9]+)?)\\b`, 'g');
    content = content.replace(regex, '$1');
    
    // Also the reverse: dark:bg-slate-900 bg-white -> bg-slate-900
    const regexReverse = new RegExp(`dark:(${prefix}-[a-zA-Z0-9/\\[\\]#-]+(?:/[0-9]+)?)\\s+${prefix}-[a-zA-Z0-9/\\[\\]#-]+(?:/[0-9]+)?\\b`, 'g');
    content = content.replace(regexReverse, '$1');
  });

  // Now, what if there are lingering dark: classes without a light counterpart?
  // Just remove the dark: prefix!
  content = content.replace(/dark:([a-zA-Z0-9/\\[\\]#-]+)/g, '$1');

  // And some lingering light classes that didn't have a dark counterpart but should be dark
  // E.g., text-slate-800 -> text-slate-200, bg-white -> bg-[#1A1E29] or transparent
  // We'll replace standalone light classes that are typical.
  // We will do this carefully. 
  // Let's replace common standalone light text colors:
  content = content.replace(/\btext-slate-900\b/g, 'text-white');
  content = content.replace(/\btext-slate-800\b/g, 'text-slate-100');
  content = content.replace(/\btext-slate-700\b/g, 'text-slate-200');
  content = content.replace(/\bbg-white\b/g, 'bg-transparent');
  content = content.replace(/\bbg-slate-50\b/g, 'bg-transparent');
  content = content.replace(/\bbg-slate-100\b/g, 'bg-slate-800/30');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir);
  }
});

console.log('Theme conversion complete.');
