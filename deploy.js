const { execSync } = require('child_process');
const fs = require('fs');

// Ensure .nojekyll file exists in out directory
const nojekyllPath = 'out/.nojekyll';
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file');
} else {
  console.log('.nojekyll file already exists');
}

// Deploy using gh-pages
console.log('Deploying to GitHub Pages...');
try {
  execSync('npx gh-pages -d out -b gh-pages --dotfiles', { stdio: 'inherit' });
  console.log('Deployment complete!');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}

