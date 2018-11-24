# gatsby-plugin-typescript-checker

`gatsby-plugin-typescript` adds TypeScript transpilation but not type checking. This plug adds `fork-ts-checker-webpack-plugin` to Gatsby to display type errors in the browser and the command line.

![Example](./example.png)

## Install

```bash
yarn add 
gatsby-plugin-typescript gatsby-plugin-typescript-checker
```

`gatsby-config.js`

```js
module.exports = {
  plugins: [
      'gatsby-plugin-typescript',
      'gatsby-plugin-typescript-checker'
  ],
}
```
