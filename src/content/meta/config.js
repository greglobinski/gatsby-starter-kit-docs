const base = {
  name: 'Gatsby Starter Kit Docs',
  url: 'https://github.com/greglobinski/gatsby-starter-kit-docs',
  author: 'greg lobinski',
  nick: 'greglobinski',
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - documentation, instructions, tutorials...`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `This is Docs for gatsby-starter-kit, a series of starters for GatsbyJS.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'a series of starters for GatsbyJS',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',
};

module.exports = config;
