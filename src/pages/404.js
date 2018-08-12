import React from 'react';
import { graphql } from 'gatsby';

import Article from 'react-website-themes/dist/classy-docs/components/Article';
import Bodytext from 'react-website-themes/dist/classy-docs/components/Bodytext';
import Branding from 'react-website-themes/dist/classy-docs/components/Branding';
import Footer from 'react-website-themes/dist/classy-docs/components/Footer';
import Header from 'react-website-themes/dist/classy-docs/components/Header';
import Heading from 'react-website-themes/dist/classy-docs/components/Heading';
import Layout from 'react-website-themes/dist/classy-docs/components/Layout';
import Menu from 'react-website-themes/dist/classy-docs/components/Menu';
import Seo from 'react-website-themes/dist/classy-docs/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title="NOT FOUND" />
        <Bodytext html={notFoundHTML} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo config={config} />
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/notFound/" }
    ) {
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
