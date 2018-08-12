---
title: Blog starter
shortTitle: Blog
categories: ['starter']
---

The **Blog** starter is the most advanced **default** starter in the **Kit**. It's the [Website](../website-starter) starter + **blog** functionality based on **markdown** files.

## Features

- A bunch of ready to use **themeable** React components.
- Default **theme** applied to all components.
- Posts pages automatically created from markdown **posts** files.
- Automaticaly created **Category** pages for blog posts.
- Web pages automatically created from markdown **pages** files.
- **Categories** for markdown **posts** and **pages**.
- Markdown **parts** files let you edit content inside React components without touching the code.
- Central **config** object.
- Easy editable **menu**.
- Feather **icons**.
- **Seo** component for managing meta tags.
- Google **Analytics** support.
- Auto generated **sitemap**.

## Gatsby plugins

- gatsby-plugin-catch-links
- gatsby-plugin-emotion
- gatsby-plugin-google-analytics
- gatsby-plugin-sharp
- gatsby-plugin-sitemap
- gatsby-plugin-react-helmet
- gatsby-plugin-resolve-src
- gatsby-remark-copy-linked-file
- gatsby-remark-emojis
- gatsby-remark-images
- gatsby-remark-prismjs
- gatsby-remark-responsive-iframe
- gatsby-remark-smartypants
- gatsby-transformer-remark
- gatsby-source-filesystem

## Add-ons

- emotion
- emotion-server
- facepaint
- react-custom-share
- react-emotion
- react-facebook
- react-feather
- react-helmet
- react-website-themes

## Folder structure

```
root
  └── src
      ├── content
      │   ├── meta
      │   │   ├── config.js
      │   │   └── menu.js
      │   ├── pages
      │   │   ├── catalog
      │   │   │   └── index.md
      │   │   └── about
      │   │       └── index.md
      │   └── parts
      │       ├── author.md
      │       ├── copyright.md
      │       ├── footerLinks.md
      │       ├── hero.md
      │       ├── notFound.md
      │       └── welcome.md
      ├── pages
      │   ├── 404.js
      │   ├── blog.js
      │   └── index.js
      └── templates
          ├── CategoryTemplate.js
          ├── PageTemplate.js
          └── PostTemplate.js
```

## Installation

**Default usage**

```shell
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-kit.git#blog-with-content
...
cd [NEW_DIRECTORY_FOR_YOUR_SITE]
...
gatsby develop
```

**Advanced usage**

Fork the [repository](https://github.com/greglobinski/gatsby-starter-kit).

```shell
git clone https://github.com/[your-github-name]/gatsby-starter-kit.git [NEW_DIRECTORY_FOR_YOUR_SITE]
...
git checkout --track origin/blog-with-content
...
git checkout -b my-blog
...
yarn install
...
gatsby develop
```
