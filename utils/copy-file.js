// Node.js File System module is required to work with file operations
const fs = require('fs');

// Retrieve source file path and destination directory path from command line arguments
const [source, destination] = process.argv.slice(2);

// Check if both source and destination paths are provided
if (!source || !destination) {
  console.error('Both source file path and destination directory path are required');
  process.exit(1);
}

// Copy the file from source path to destination directory
fs.copyFile(source, destination, (err) => {
  // If there's an error during the copy operation, print the error message and exit with a failure status
  if (err) {
    console.error('An error occurred while copying the file:', err);
    process.exit(1);
  }

  // If there's no error, print a success message
  console.log(`File successfully copied from ${source} to ${destination}`);
});
