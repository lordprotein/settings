const fs = require('fs');
const path = require('path');

// Get command-line arguments
const [, , filePath, targetDir] = process.argv;

function pasteFile(filePath, targetDir) {
  // Check if both file path and target directory are provided
  if (!filePath || !targetDir) {
    console.error('Please provide both file path and target directory');
    return;
  }

  // Resolve the source file path
  const sourceFilePath = path.resolve(filePath);

  // Resolve the target directory path
  const targetFolderPath = path.resolve(targetDir);

  // Generate the target file path
  const targetFilePath = path.join(targetFolderPath, path.basename(sourceFilePath));

  // Check if the target directory exists
  if (!fs.existsSync(targetFolderPath)) {
    // Create the target directory if it doesn't exist
    fs.mkdirSync(targetFolderPath, { recursive: true });
  }

  // Read the file content
  const fileContent = fs.readFileSync(sourceFilePath, 'utf8');

  // Paste the file into the target directory
  fs.writeFileSync(targetFilePath, fileContent);

  console.log(`File ${path.basename(sourceFilePath)} has been pasted into ${targetDir}`);
}

// Call the function with the command-line arguments
pasteFile(filePath, targetDir);
