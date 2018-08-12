---
title: Default usage
categories: ['general']
---

**Default usage** is a quick and easy way to install any of the Kit's starter. You install the starter as any other Gatsby starter, using the `gatsby new` command.

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-kit.git
```

The command is equivalent to

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-kit.git#blog-with-content
```

Note the `#blog-with-content` flag at the end of the repository `url`. The note informs **Gatsby CLI** that the installation should be based on the `blog-with-content` branch of the repository.

If you omit the flag, like in the first example, **Gatsby CLI** will use the `master` branch to built your site.

The `master` branch of the **Gatsby Starter Kit** repo contains code of the `blog-with-content` branch plus some irrelevant from this point of view stuff like e.g README.md.

Do you want to install different starter? Use different tag.

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-kit.git#website-with-content
```

## With or without content?

For every Kit's starter, there are three **git** branches. Let's take a closer look at the **Website** starter. There are [three](https://github.com/greglobinski/gatsby-starter-kit/branches/all?utf8=%E2%9C%93&query=website) branches in the repo.

- website
- website-with-content
- content-for-website

With **default usage** always install chosen **[starter]-with-content** branch. Like below.

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-kit.git#website-with-content
```

Website installed with command

```
gatsby new [NEW_DIRECTORY_FOR_YOUR_SITE] https://github.com/greglobinski/gatsby-starter-kit.git#website
```

will throw errors when you will try to start dev server. So remember, always choose **...-with-content** branch.

You may ask, for what are all these other branches? And that's the subject of [Advanced usage](../advanced-usage) :)
