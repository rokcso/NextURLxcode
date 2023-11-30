# NextURLxcode

使用 [Next.js](https://nextjs.org/) 构建的 [URLxcode](https://www.urlxcode.com/) Version 2.0，一个在线 URL 工具。

## 多语言适配

需要调整的文件包括：

```
|-- componnents
   |-- layout.js
|-- lib
   |-- getPostsData.js
   |-- useI18n.js
|-- pages
   # 新增对应的语言文件夹
      |-- [id].js # 需要引用对应的语言文件
      |-- index.js
|-- public
   |-- posts
      # 新增对应的语言文件
   |-- i18n.json # 增加对应的语言内容
   |-- sitemap.xml # 更新站点地图
```