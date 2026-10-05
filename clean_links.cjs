const fs = require('fs');

const filesToClean = [
  'src/pages/Alumni.jsx',
  'src/pages/Teams.jsx',
  'src/pages/TeamCanvas.jsx'
];

filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove github anchor tags entirely
    content = content.replace(/<a[^>]*href="https:\/\/github\.com[^>]*>[\s\S]*?<\/a>/g, '');
    fs.writeFileSync(file, content);
    console.log(`Cleaned github links in ${file}`);
  }
});

const projectPath = 'src/pages/Project.jsx';
if (fs.existsSync(projectPath)) {
  let content = fs.readFileSync(projectPath, 'utf8');
  
  // Remove LiquidMetalButton blocks that open hardcoded github links
  // The block starts with <LiquidMetalButton and ends with />
  content = content.replace(/<LiquidMetalButton[\s\S]*?onClick=\{\(\)\s*=>\s*window\.open\(\s*"https:\/\/github\.com[\s\S]*?\}\s*\/>/g, '');
  
  // Remove LiquidMetalButton for dynamic projects that uses project.url
  content = content.replace(/<LiquidMetalButton[\s\S]*?onClick=\{\(\)\s*=>\s*window\.open\(project\.url,\s*"_blank",\s*"noopener,noreferrer"\)\s*\}/g, '');
  // Because the dynamic one doesn't end neatly if we match up to /> we might eat other things.
  // Actually, let's just match the dynamic LiquidMetalButton:
  content = content.replace(/<LiquidMetalButton[^<]*label="View Repo"[\s\S]*?\/>/g, '');
  
  fs.writeFileSync(projectPath, content);
  console.log(`Cleaned github buttons in ${projectPath}`);
}

const homePath = 'src/pages/Home.jsx';
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  // Just in case Facebook and Github are used in Home.jsx, we can remove the img nodes
  // But they aren't rendered currently. We'll remove any img pointing to Facebook or Github.
  content = content.replace(/<img[^>]*src=\{imgFacebook\}[^>]*\/>/g, '');
  content = content.replace(/<img[^>]*src=\{imgGithub\}[^>]*\/>/g, '');
  // Also remove the social links array elements if they exist
  fs.writeFileSync(homePath, content);
  console.log(`Cleaned Home.jsx`);
}
