import React from 'react';
import { graphql } from 'gatsby';

import Article from '../../../../mynpms/react-website-themes/src/docs/components/Article';
import Branding from '../../../../mynpms/react-website-themes/src/docs/components/Branding';
import Footer from '../../../../mynpms/react-website-themes/src/docs/components/Footer';
import Header from '../../../../mynpms/react-website-themes/src/docs/components/Header';
import Heading from '../../../../mynpms/react-website-themes/src/docs/components/Heading';
import Layout from '../../../../mynpms/react-website-themes/src/docs/components/Layout';
import List from '../../../../mynpms/react-website-themes/src/docs/components/List';
import Menu from '../../../../mynpms/react-website-themes/src/docs/components/Menu';
import Seo from '../../../../mynpms/react-website-themes/src/docs/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const MenuPage = props => {
  const {
    data: {
      pages: { edges: rawItems },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;
  const items = rawItems.map(item => item.node);

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title="Table of content" />
        <List items={items} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo config={config} />
    </Layout>
  );
};

export default MenuPage;

export const query = graphql`
  query {
    pages: allMarkdownRemark(
      filter: { frontmatter: { categories: { in: ["docs"] } } }
      sort: { fields: [fields___prefix] }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
          }
        }
      }
    }
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
