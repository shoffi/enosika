# Enosika
Enosika web html for quick demo. This is a non-functioinal app as it is stil html only. Consider to add more stacks (ex. php, javascript) to improve the functionality.

### Stacks used
* Vue via CDN
* Tailwind CSS

### Installation
```javascript
npm run
```

### Tailwind CSS usage
In development process, you may need to use full classes to build html. Therefore, set purge `enabled: false;`
Once ready for production, set purge `enabled: true;` to compile only used classes from your html.

Run npm to purge/compile  
```javascript
npm run purgecss
```  
See `package.json` for the scripts.

See **tailwind.config.js** for the config, or [visit Tailwind documentation](https://tailwindcss.com/docs/controlling-file-size#setting-up-purge-css-manually).
