import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import Article from '../../../../mynpms/react-website-themes/src/docs/components/Article';
import Branding from '../../../../mynpms/react-website-themes/src/docs/components/Branding';
import Bodytext from '../../../../mynpms/react-website-themes/src/docs/components/Bodytext';
import Footer from '../../../../mynpms/react-website-themes/src/docs/components/Footer';
import Header from '../../../../mynpms/react-website-themes/src/docs/components/Header';
import Heading from '../../../../mynpms/react-website-themes/src/docs/components/Heading';
import Layout from '../../../../mynpms/react-website-themes/src/docs/components/Layout';
import Menu from '../../../../mynpms/react-website-themes/src/docs/components/Menu';
import Seo from '../../../../mynpms/react-website-themes/src/docs/components/Seo';
import Sidebar from '../../../../mynpms/react-website-themes/src/docs/components/Sidebar';
import layoutSidebar from '../../../../mynpms/react-website-themes/src/docs/styles/layoutSidebar';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import categoryList from 'content/meta/categories';

const PageTemplate = props => {
  const {
    location: { pathname },
    data: {
      page: {
        html: pageHTML,
        frontmatter: { title, categories },
        fields: { slug, source },
      },
      pages: { edges: nodePages },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;
  const pages = nodePages.map(item => item.node);
  const layoutStyle = source === 'docs' ? layoutSidebar : undefined;

  return (
    <React.Fragment>
      {layoutStyle && (
        <Sidebar
          title="Table of content"
          pages={pages}
          categoryList={categoryList}
          pathname={pathname}
        />
      )}

      <Layout themeStyle={layoutStyle}>
        <Header>
          <Branding title={headerTitle} subTitle={headerSubTitle} />
          <Menu items={menuItems} />
        </Header>
        <Article>
          <Heading title={title} />
          <Bodytext html={pageHTML} />
        </Article>
        <Footer links={footerLinksHTML} copyright={copyrightHTML} />
        <Seo config={config} />
      </Layout>
    </React.Fragment>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      fields {
        slug
        prefix
        source
      }
      frontmatter {
        title
        shortTitle
        categories
      }
    }
    pages: allMarkdownRemark(
      filter: { fields: { source: { eq: "docs" } } }
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
            shortTitle
            categories
          }
          headings {
            value
            depth
          }
          tableOfContents
        }
      }
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

//filter: { frontmatter: { categories: { in: ["docs"] } } }//
