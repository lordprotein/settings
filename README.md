# Olco (Olimp Config)

We use yarn v3+

Currently, we have several configuration packages:
- astrabet-web-desktop (used for the web desktop version)
- astrabet-web-mobile (used for the web mobile version)
- conf-web (a general configuration package inherited by astrabet-web-desktop and astrabet-web-mobile)

### Package structure:
- bin - for bin scripts
- devDependencies.json - contains all devDependencies that are automatically installed in the root package.json of the project being used
- other configurations

### To change the version or add a new dependency in dependencies/devDependencies:
1. Find the configuration package used by your project. For example, for astrabet web desktop, it's astrabet-web-desktop.
2. Check if the configuration package inherits from others. If it does, and your changes should be visible to other configuration packages, such as updating the React version, it's recommended to update the version in the shared (inherited) configuration.
3. Modify or add devDependencies - open the devDependencies.json file and make the necessary changes.
4. Modify or add dependencies - open the package.json file and make the necessary changes.

### To add a new configuration file to the project's configuration folder:
1. Add the required file to the specific configuration package folder.
2. Add the file to the "files" array in the package.json file.

### TODO

What needs to be done:
- Add the ability to reuse devDependencies in a similar way to dependencies.
- Understand workspaces and local dependencies (currently, in some places of the monorepo, if you add new files and refer to them from another package in the repository, you will encounter an error. This can be bypassed by pushing your changes to the repository and running `yarn install` in the project's root folder).
