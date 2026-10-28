const fs = require('fs');

fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('app.js', 'dist/app.js');
fs.writeFileSync(
    'dist/build-info.txt',
    `Built at ${new Date().toISOString()}\nCommit: ${process.env.GITHUB_SHA || 'local'}\n`
);
console.log('Build complete: dist/ created');