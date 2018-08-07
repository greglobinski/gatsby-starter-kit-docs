import React from 'react';
import { graphql } from 'gatsby';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Hero,
  Seo,
  layout,
  hero,
} from 'gatsby-starter-kit-themes/dist/default';

import { themed } from 'gatsby-starter-kit-themes/dist/';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

const LayoutThemed = themed({ themeStyle: layout })(Layout);
const HeroThemed = themed({ themeStyle: hero })(Hero);

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      copyrightNote: { html: copyrightNoteHTML },
      hero: { html: heroHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <LayoutThemed
      footerLinks={footerLinksHTML}
      copyrightNote={copyrightNoteHTML}
      headerTitle={headerTitle}
      headerSubTitle={headerSubTitle}
      menu={menu}
    >
      <HeroThemed html={heroHTML} />
      <Seo config={config} />
    </LayoutThemed>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyrightNote: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyrightNote/" }
    ) {
      html
    }
  }
`;
