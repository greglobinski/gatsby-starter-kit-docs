import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
 

import Branding from '../../../../mynpms/react-website-themes/src/docs/components/Branding';
import Footer from '../../../../mynpms/react-website-themes/src/docs/components/Footer';
import Header from '../../../../mynpms/react-website-themes/src/docs/components/Header';
import Hero from '../../../../mynpms/react-website-themes/src/docs/components/Hero';
import Layout from '../../../../mynpms/react-website-themes/src/docs/components/Layout';
import Menu from '../../../../mynpms/react-website-themes/src/docs/components/Menu';
import Seo from '../../../../mynpms/react-website-themes/src/docs/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      hero: { html: heroHTML },
      copyright: { html: copyrightHTML },
      logo: {
        childImageSharp: {
          fluid: logoFluid
        }
      }
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Hero>
        <Img fluid={logoFluid} className="image"/>    
        <div dangerouslySetInnerHTML={{ __html: heroHTML }} />
      </Hero>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo config={config} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    logo: file(relativePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
