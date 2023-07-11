module.exports = {
  "compilerOptions": {
    "allowJs": true,
    "allowUnreachableCode": false,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "downlevelIteration": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react",
    "lib": ["es6", "es2015", "es2017", "ES2019", "es2022", "dom"],
    "module": "commonjs",
    "moduleResolution": "Node",
    "noImplicitAny": false,
    "noImplicitReturns": false,
    "noImplicitThis": true,
    "noUnusedLocals": false,
    "sourceMap": true,
    "resolveJsonModule": true,
    "strictNullChecks": true,
    "strict": false,
    "pretty": true,
    "suppressImplicitAnyIndexErrors": true,
    "target": "esnext",
    "baseUrl": "src",
    "paths": {
      "typings/*": ["../typings/*"]
    }
  },
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "razzle.config.js",
    "typings/react-table-config.d.ts",
    "cdk8s"
  ],
  "types": ["typePatches", "node", "webpack-env"]
}
