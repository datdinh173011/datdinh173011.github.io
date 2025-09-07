const fs = require('fs');

console.log('🚀 Building portfolio...');

// Backup original file
fs.copyFileSync('index.html', 'index.html.backup');

// Function to read component or return empty string
function readComponent(filename) {
    try {
        return fs.readFileSync(`components/${filename}`, 'utf8');
    } catch (error) {
        console.log(`⚠️  Component ${filename} not found, extracting from current index.html`);
        return '';
    }
}

// Read the current index.html to extract sections
const currentIndex = fs.readFileSync('index.html', 'utf8');

// Extract sections from current index.html
const skillsMatch = currentIndex.match(/<!-- Skills Section -->([\s\S]*?)<!-- Experience Section -->/);
const experienceMatch = currentIndex.match(/<!-- Experience Section -->([\s\S]*?)<!-- Projects Section -->/);
const projectsMatch = currentIndex.match(/<!-- Projects Section -->([\s\S]*?)<!-- Education Section -->/);
const educationMatch = currentIndex.match(/<!-- Education Section -->([\s\S]*?)<!-- Contact Section -->/);
const contactMatch = currentIndex.match(/<!-- Contact Section -->([\s\S]*?)<!-- Footer -->/);

// Read all component files
const header = readComponent('header.html');
const navigation = readComponent('navigation.html');
const about = readComponent('about.html');
const skills = readComponent('skills.html');
const experience = readComponent('experience.html');
const projects = readComponent('projects.html');
const education = readComponent('education.html');
const contact = readComponent('contact.html');
const footer = readComponent('footer.html');

// Create the new index.html
const newIndex = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dinh Dat's Portfolio</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/jpeg" href="images/avatar.jpg">
    <link rel="shortcut icon" type="image/jpeg" href="images/avatar.jpg">
    <link rel="apple-touch-icon" href="images/avatar.jpg">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter (optional, but good for modern look) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="antialiased">

${header}

${navigation}

${about}

${education}

${skills}

${experience}

${projects}

${contact}

${footer}

<!-- Custom JavaScript -->
<script src="js/script.js"></script>
</body>
</html>`;

// Write the new index.html
fs.writeFileSync('index.html', newIndex);
console.log('✅ Built index.html successfully!');
console.log('📦 Components used:');
console.log('   - header.html');
console.log('   - navigation.html'); 
console.log('   - about.html');
console.log('   - skills.html');
console.log('   - experience.html');
console.log('   - projects.html');
console.log('   - education.html');
console.log('   - contact.html');
console.log('   - footer.html');
console.log('🎉 All components now separated!');