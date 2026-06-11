const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const filesToProcess = [];
walkDir(__dirname, function(filePath) {
  if (filePath.endsWith('.tsx')) {
    filesToProcess.push(filePath);
  }
});

filesToProcess.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // General substitutions to add dark mode variants
    
    // Background colors
    content = content.replace(/\bbg-white\b(?! \w+:\bbg-)/g, 'bg-white dark:bg-slate-900');
    content = content.replace(/\bbg-slate-50\b(?! \w+:\bbg-)/g, 'bg-slate-50 dark:bg-slate-900/50');
    content = content.replace(/\bbg-slate-100\b(?! \w+:\bbg-)/g, 'bg-slate-100 dark:bg-slate-800');
    content = content.replace(/\bbg-slate-100\/50\b(?! \w+:\bbg-)/g, 'bg-slate-100/50 dark:bg-slate-800/50');
    content = content.replace(/\bbg-slate-200\b(?! \w+:\bbg-)/g, 'bg-slate-200 dark:bg-slate-700');
    
    // Text colors
    content = content.replace(/\btext-slate-900\b(?! \w+:\btext-)/g, 'text-slate-900 dark:text-slate-50');
    content = content.replace(/\btext-slate-800\b(?! \w+:\btext-)/g, 'text-slate-800 dark:text-slate-100');
    content = content.replace(/\btext-slate-700\b(?! \w+:\btext-)/g, 'text-slate-700 dark:text-slate-200');
    content = content.replace(/\btext-slate-600\b(?! \w+:\btext-)/g, 'text-slate-600 dark:text-slate-300');
    content = content.replace(/\btext-slate-500\b(?! \w+:\btext-)/g, 'text-slate-500 dark:text-slate-400');
    
    // Border colors
    content = content.replace(/\bborder-slate-100\b(?! \w+:\bborder-)/g, 'border-slate-100 dark:border-slate-800');
    content = content.replace(/\bborder-slate-200\b(?! \w+:\bborder-)/g, 'border-slate-200 dark:border-slate-700');
    content = content.replace(/\bborder-slate-300\b(?! \w+:\bborder-)/g, 'border-slate-300 dark:border-slate-600');
    content = content.replace(/\bborder-slate-100\/50\b(?! \w+:\bborder-)/g, 'border-slate-100/50 dark:border-slate-800/50');
    content = content.replace(/\bborder-white\/60\b(?! \w+:\bborder-)/g, 'border-white/60 dark:border-slate-700/60');
    
    // Shadow colors
    content = content.replace(/\bshadow-slate-900\/5\b(?! \w+:\bshadow-)/g, 'shadow-slate-900/5 dark:shadow-black/20');
    content = content.replace(/\bshadow-slate-900\/10\b(?! \w+:\bshadow-)/g, 'shadow-slate-900/10 dark:shadow-black/30');

    // Hover background colors
    content = content.replace(/\bhover:bg-slate-50\b(?! \w+:\bhover:bg-)/g, 'hover:bg-slate-50 dark:hover:bg-slate-800');
    content = content.replace(/\bhover:bg-slate-100\b(?! \w+:\bhover:bg-)/g, 'hover:bg-slate-100 dark:hover:bg-slate-800');

    // Hover text colors
    content = content.replace(/\bhover:text-slate-900\b(?! \w+:\bhover:text-)/g, 'hover:text-slate-900 dark:hover:text-slate-100');
    content = content.replace(/\bhover:text-slate-800\b(?! \w+:\bhover:text-)/g, 'hover:text-slate-800 dark:hover:text-slate-200');

    // Gradients (for App.tsx mostly)
    content = content.replace(/\bfrom-slate-50\b(?! \w+:\bfrom-)/g, 'from-slate-50 dark:from-slate-950');
    content = content.replace(/\bvia-indigo-50\/30\b(?! \w+:\bvia-)/g, 'via-indigo-50/30 dark:via-indigo-950/30');
    content = content.replace(/\bto-blue-50\/40\b(?! \w+:\bto-)/g, 'to-blue-50/40 dark:to-blue-950/40');
    content = content.replace(/\btext-slate-800\b(?! \w+:\btext-)/g, 'text-slate-800 dark:text-slate-200');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${path.basename(filePath)}`);
  }
});
