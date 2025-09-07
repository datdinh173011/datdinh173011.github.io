const fs = require('fs');
const path = require('path');

// Read all component files
const header = fs.readFileSync('components/header.html', 'utf8');
const navigation = fs.readFileSync('components/navigation.html', 'utf8');
const about = fs.readFileSync('components/about.html', 'utf8');
const footer = fs.readFileSync('components/footer.html', 'utf8');

// Read the current index.html to extract other sections
const currentIndex = fs.readFileSync('index.html', 'utf8');

// Extract sections that weren't moved to components yet
const skillsMatch = currentIndex.match(/<!-- Skills Section -->([\s\S]*?)<!-- Experience Section -->/);
const experienceMatch = currentIndex.match(/<!-- Experience Section -->([\s\S]*?)<!-- Projects Section -->/);
const projectsMatch = currentIndex.match(/<!-- Projects Section -->([\s\S]*?)<!-- Education Section -->/);
const educationMatch = currentIndex.match(/<!-- Education Section -->([\s\S]*?)<!-- Contact Section -->/);
const contactMatch = currentIndex.match(/<!-- Contact Section -->([\s\S]*?)<!-- Footer -->/);

const skills = skillsMatch ? skillsMatch[1].trim() : '';
const experience = experienceMatch ? experienceMatch[1].trim() : '';
const projects = projectsMatch ? projectsMatch[1].trim() : '';
const education = educationMatch ? educationMatch[1].trim() : '';
const contact = contactMatch ? contactMatch[1].trim() : '';

// Create the new index.html
const newIndex = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nguyen Dinh Dat's Portfolio</title>
    
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

${skills}

${experience}

${projects}

${education}

${contact}

${footer}

<!-- Custom JavaScript -->
<script src="js/script.js"></script>
</body>
</html>`;

// Write the new index.html
fs.writeFileSync('index.html', newIndex);
console.log('✅ Built index.html successfully!');