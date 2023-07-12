// copyDevDependencies.js
const fs = require('fs');
const path = require('path');

// Path to the package.json file in project
const projectPackageJsonPath = path.join(__dirname, 'package.json');

// Path to the devDependencies.json file in the library
const libraryDevDepsJsonPath = path.join(__dirname, 'node_modules', '@olco', 'conf-web', 'devDependencies.json');

// Load devDependencies from the library
const libraryDevDeps = JSON.parse(fs.readFileSync(libraryDevDepsJsonPath, 'utf8'));

// Load package.json from project
const projectPackageJson = JSON.parse(fs.readFileSync(projectPackageJsonPath, 'utf8'));

// Merge devDependencies
// This operation will overwrite existing dependencies in the project
// with the versions found in the library
projectPackageJson.devDependencies = {...projectPackageJson.devDependencies, ...libraryDevDeps};

// Write the updated package.json back to project
fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, 2), 'utf8');
