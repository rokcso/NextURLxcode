# NextURLxcode

使用 [Next.js](https://nextjs.org/) 构建的 [URLxcode](https://www.urlxcode.com/) Version 2.0，一个在线 URL 工具。

## 代码结构

```
|-- components
   |-- layout.js
   |-- layout.module.css
   |-- URLConvertor.js
   |-- URLConvertot.module.css
|-- lib
   |-- useI18n.js
|-- pages
   |-- index.js
   |-- _app.js
   |-- 404.js
   |-- zh
      |-- index.js
   |-- kr
      |-- index.js
   |-- jp
      |-- index.js
   |-- post
      |-- [id].js
|-- public
   |-- i18n.json
   |-- robots.txt
   |-- sitemap.xml
   |-- posts
      |-- en.json
      |-- zh.json
   |-- favicon
      |-- icon16x16.png
      |-- icon32x32.png
      |-- icon48x48.png
      |-- icon64x64.png
      |-- icon128x128.png
|-- syules
   |-- globals.css
|-- node_modules
|-- package-lock.json
|-- package.json
|-- README.md
```