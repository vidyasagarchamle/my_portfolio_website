#!/usr/bin/env node

// This script generates favicon files in multiple sizes
// To run: node favicon-generator.js
// Requires: npm install sharp

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp package...');
  execSync('npm install sharp');
}

const sharp = require('sharp');

// Create different sizes of favicon
const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];
const svgPath = path.join(__dirname, 'favicon-square.svg');

// Ensure the file exists
if (!fs.existsSync(svgPath)) {
  console.error('SVG file not found:', svgPath);
  process.exit(1);
}

// Create favicon.ico (includes 16, 32, 48 sizes)
console.log('Generating favicon.ico...');

// Generate PNG files for each size
const pngPromises = sizes.map(size => {
  const outputPath = path.join(__dirname, `favicon-${size}.png`);
  console.log(`Generating ${outputPath}...`);
  
  return sharp(svgPath)
    .resize(size, size)
    .png()
    .toFile(outputPath)
    .then(() => outputPath)
    .catch(err => {
      console.error(`Error generating ${size}px favicon:`, err);
      return null;
    });
});

Promise.all(pngPromises)
  .then(outputPaths => {
    console.log('All favicons generated successfully!');
    
    // Clean up temp files if needed
    // outputPaths.forEach(path => path && fs.unlinkSync(path));
  })
  .catch(err => {
    console.error('Error generating favicons:', err);
  }); 