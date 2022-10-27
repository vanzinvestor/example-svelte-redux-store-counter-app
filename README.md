# Svelte TypeScript Template

## Feature Support

- [x] TypeScript
- [x] SCSS/SASS
- [x] VS Code

## Use

### Create New App

This is a project template for [Svelte](https://svelte.dev/) apps. Base on [sveltejs/template](https://github.com/sveltejs/template). It lives at <https://github.com/sveltejs/template>.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit vanzinvestor/svelte-typescript-template svelte-typescript-app
```

_Note that you will need to have [Node.js](https://nodejs.org/en/) installed._

## Get started

Install the dependencies...

```bash
cd svelte-typescript-app
npm install
```

...then start [Rollup](https://rollupjs.org/guide/en/):

```bash
npm run dev
```

Navigate to <http://localhost:8080>. You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

After install extension. adjust your VS Code settings

```json
"[svelte]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

\*_If see any error. Please close VS Code and reopen_

## Reference and special thanks

[sveltejs/template](https://github.com/sveltejs/template)
[Svelte <3 TypeScript](https://svelte.dev/blog/svelte-and-typescript)
[VS Code format svelte](https://github.com/sveltejs/language-tools/issues/225#issuecomment-673271334)
[SCSS/Less Support](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/scss-less.md)
[Add SASS to Svelte JS with svelte-preprocess](https://linguinecode.com/post/add-sass-svelte-js)
