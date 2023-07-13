#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ncp = require('ncp').ncp;

const tempDir = process.argv[2] || './'; // Путь к временной директории. Если аргумент не передан, используется './'

const buildDir = path.join(process.cwd(), 'build'); // Директория для нового package.json и скопированных файлов

// Удаление существующей директории build, если она существует
if (fs.existsSync(buildDir)) {
  fs.rmdirSync(buildDir, { recursive: true });
}

// Создание директории build
fs.mkdirSync(buildDir);

const packageJsonPath = path.join(tempDir, 'package.json');
const newPackageJsonPath = path.join(buildDir, 'package.json');

// Чтение package.json
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading package.json: ${err.message}`);
    return;
  }

  try {
    const packageJson = JSON.parse(data);

    // Обновление зависимостей с "workspace:"
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    const updateDependencies = (depObject) => {
      Object.entries(depObject).forEach(([packageName, packageValue]) => {
        if (packageValue.startsWith('workspace:')) {
          depObject[packageName] = `git@github.com:lordprotein/settings.git#workspace=${packageName}`;
        }
      });
    };

    updateDependencies(dependencies);
    updateDependencies(devDependencies);

    // Создание нового package.json с обновленными зависимостями
    const newPackageJson = {
      ...packageJson,
      dependencies,
      devDependencies,
    };

    // Запись нового package.json
    fs.writeFile(newPackageJsonPath, JSON.stringify(newPackageJson, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error(`Error writing new-package.json: ${writeErr.message}`);
        return;
      }
      console.log(`Created new-package.json successfully in '${buildDir}'.`);
    });

    // Копирование файлов из files
    const files = packageJson.files || [];
    files.forEach((filePath) => {
      const sourcePath = path.join(tempDir, filePath);
      const targetPath = path.join(buildDir, filePath);

      fs.copyFile(sourcePath, targetPath, (copyErr) => {
        if (copyErr) {
          console.error(`Error copying file '${sourcePath}': ${copyErr.message}`);
        } else {
          console.log(`Copied file '${sourcePath}' to '${targetPath}'`);
        }
      });
    });

    const binDir = path.join(tempDir, 'bin');
    const targetBinDir = path.join(buildDir, 'bin');

    if (fs.existsSync(binDir)) {
      ncp(binDir, targetBinDir, (copyErr) => {
        if (copyErr) {
          console.error(`Error copying directory 'bin': ${copyErr.message}`);
        } else {
          console.log(`Copied directory 'bin' to '${targetBinDir}'`);
        }
      });
    }

  } catch (parseErr) {
    console.error(`Error parsing package.json: ${parseErr.message}`);
  }
});
