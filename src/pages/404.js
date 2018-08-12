import React from 'react';
import { graphql } from 'gatsby';

import Article from '../../../../mynpms/react-website-themes/src/docs/components/Article';
import Bodytext from '../../../../mynpms/react-website-themes/src/docs/components/Bodytext';
import Branding from '../../../../mynpms/react-website-themes/src/docs/components/Branding';
import Footer from '../../../../mynpms/react-website-themes/src/docs/components/Footer';
import Header from '../../../../mynpms/react-website-themes/src/docs/components/Header';
import Heading from '../../../../mynpms/react-website-themes/src/docs/components/Heading';
import Layout from '../../../../mynpms/react-website-themes/src/docs/components/Layout';
import Menu from '../../../../mynpms/react-website-themes/src/docs/components/Menu';
import Seo from '../../../../mynpms/react-website-themes/src/docs/components/Seo';

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
