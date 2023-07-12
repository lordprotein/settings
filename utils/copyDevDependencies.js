const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Path to the package.json file in your project
const projectRootPath = path.resolve(__dirname, '..', '..', '..');
const projectPackageJsonPath = path.join(projectRootPath, 'package.json');

// Path to the devDependencies.json file in the library
const libraryDevDepsJsonPath = path.join(__dirname, '..', 'conf-web', 'devDependencies.json');

// Load devDependencies from the library
const libraryDevDeps = JSON.parse(fs.readFileSync(libraryDevDepsJsonPath, 'utf8'));

// Load package.json from your project
const projectPackageJson = JSON.parse(fs.readFileSync(projectPackageJsonPath, 'utf8'));

// Merge devDependencies
// This operation will overwrite existing dependencies in the project
// with the versions found in the library
projectPackageJson.devDependencies = {...projectPackageJson.devDependencies, ...libraryDevDeps.devDependencies};

// Write the updated package.json back to your project
fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, 2), 'utf8');

// Execute yarn install
exec('yarn install', { cwd: projectRootPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during yarn install: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`yarn install stderr: ${stderr}`);
    return;
  }

  console.log(`yarn install stdout: ${stdout}`);
});
