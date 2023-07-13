const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

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
projectPackageJson.devDependencies = libraryDevDeps.devDependencies;

// Write the updated package.json back to your project
fs.writeFileSync(projectPackageJsonPath, JSON.stringify(projectPackageJson, null, 2), 'utf8');

// Execute yarn install
const install = spawn('yarn', ['install'], { cwd: projectRootPath });

install.stdout.on('data', (data) => {
  const message = data.toString();

  // Check if the message contains "core-js" information
  if (message.includes('YN0007: │ core-js')) {
    install.kill('SIGHUP')
    fs.unlink(libraryDevDepsJsonPath, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err}`);
        return;
      }

      console.log('File deleted successfully.');
    })
  }

  process.stdout.write(data);
});

install.stderr.on('data', (data) => {
  process.stderr.write(data);
});

install.on('error', (error) => {
  console.error(`Error during yarn install: ${error.message}`);
});

install.on('close', (code) => {
  fs.unlink(libraryDevDepsJsonPath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err}`);
      return;
    }

    console.log('File deleted successfully.');
  })

  console.log(`yarn install process exited with code ${code}`);
});
