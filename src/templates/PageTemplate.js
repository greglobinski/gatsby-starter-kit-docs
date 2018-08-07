import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Page,
  Seo,
  layout,
  page,
} from 'gatsby-starter-kit-themes/dist/default';

import { themed } from 'gatsby-starter-kit-themes/dist/';

const LayoutThemed = themed({ themeStyle: layout })(Layout);
const PageThemed = themed({ themeStyle: page })(Page);

const PageTemplate = props => {
  const {
    data: {
      page,
      page: {
        frontmatter: { title },
        fields: { slug },
      },
      footerLinks: { html: footerLinksHTML },
      copyrightNote: { html: copyrightNoteHTML },
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
      <PageThemed page={page} />
      <Seo config={config} />
    </LayoutThemed>
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
      }
      frontmatter {
        title
        categories
      }
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
