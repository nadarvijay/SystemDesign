# Cart App using React + Webpack

- npm init -y : To initialize project with default settings
- install react : npm init react react-dom
- npm install --save-dev 
    webpack - The core bundler that takes your code, transforms it, and bundles it into files for the browser.
    webpack-cli -  The command line interface for Webpack – lets you run commands like webpack or webpack serve.
    webpack-dev-server - HMR Runs a local dev server with hot-reloading – automatically refreshes your browser when code changes.
    html-webpack-plugin - Generates an index.html file with the right script tags injected automatically.
    babel-loader - A Webpack loader that tells Webpack how to transform JavaScript using Babel.
    @babel/core - The core Babel compiler – actually does the code transformation (e.g., ES6 → ES5)
    @babel/preset-env - Transpiles modern JavaScript (ES6+) to be compatible with older browsers.
    @babel/preset-react - Specifically adds support for JSX syntax used in React components.

- Created File Structure
/cart-app
├── /src
│   ├── index.js
|   ├── bootstrap.js
│   └── Cart.jsx
├── /public
│   └── index.html
├── webpack.config.js
├── .babelrc

- Added presets in babelrc
- Configured webpack.config.js
- Added ModuleFederationPlugin for Cart and exposed the cart as remoteEntry.js
- Solved eager loading issue by renamin index.js => bootstrap.js
    and creating new index.js and importing bootstrap.js in it to delay the loading

    # This solution will allow webpack to load the dependencies before loading bootstrap.js