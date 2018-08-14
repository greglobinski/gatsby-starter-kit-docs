import React from 'react';
import { graphql } from 'gatsby';

import Branding from 'react-website-themes/dist/classy-docs/components/Branding';
import Footer from 'react-website-themes/dist/classy-docs/components/Footer';
import Header from 'react-website-themes/dist/classy-docs/components/Header';
import Hero from 'react-website-themes/dist/classy-docs/components/Hero';
import Layout from 'react-website-themes/dist/classy-docs/components/Layout';
import Menu from 'react-website-themes/dist/classy-docs/components/Menu';
import Seo from 'react-website-themes/dist/classy-docs/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      hero: { html: heroHTML },
      copyright: { html: copyrightHTML }
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
        
        <svg style={{ maxWidth: '500px', width: '90%', height: 'auto', margin: '0 auto 10px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 176" width="590" height="176"><path fillRule="evenodd" fill="#666" d="M26.6 129.7v7.6h8V149c-2.3 1-5.2 1.4-8.8 1.4-3 0-5.4-.9-7.4-2.5a15 15 0 0 1-4.5-7 30.6 30.6 0 0 1 .4-19.2 13.6 13.6 0 0 1 13.1-8.2 28 28 0 0 1 14.5 3l.4-9.2c-1-.1-2-.4-3.2-.7l-5.3-1c-1.6-.2-3.8-.3-6.4-.3a31 31 0 0 0-13.6 2.9c-4 1.9-7.1 4.8-9.4 8.8-2.3 4-3.4 9-3.4 14.9 0 5.3 1 9.9 3 13.8 2 3.9 4.8 7 8.6 9 3.8 2.2 8.3 3.3 13.6 3.3a44 44 0 0 0 15.3-2.5l2.2-.6a6 6 0 0 1 1.5-.2v-24.9H26.6zM66.1 151.6c-1.6 0-3-.4-4-1.4-1-1-1.4-2.3-1.4-4.2 0-1.3.3-2.2 1-3 .5-.6 1.4-1.1 2.4-1.5a27.2 27.2 0 0 1 8.2-1.4v9.4c-.4.5-1.3 1-2.5 1.5-1.3.4-2.5.6-3.7.6zm1-32a47.8 47.8 0 0 0-16 3.8l2.4 6.5a34.3 34.3 0 0 1 11-2.8c2.2 0 4 .2 5 .4 1 .3 1.8.7 2.2 1.4.4.7.6 1.8.6 3.2v2.5c-7.2 0-12.5.7-16 2.2-2.1 1-3.8 2.3-5 4a9.5 9.5 0 0 0-1.8 5.8c0 2.4.5 4.6 1.6 6.5 1 2 2.6 3.4 4.5 4.5 2 1.1 4.3 1.6 6.8 1.6 2.1 0 4.1-.4 5.9-1.1 1.7-.8 3.2-1.7 4.4-2.9v.3c0 1.1.2 2 .5 2.5s.7.9 1.2 1c.5.2 1.3.2 2.4.2H83v-25.6c0-3.7-.6-6.5-1.7-8.5a9.1 9.1 0 0 0-5.1-4.3c-2.4-.8-5.4-1.3-9.3-1.3zM92.1 145.7c0 3 .4 5.3 1.1 7 .7 1.9 1.9 3.2 3.5 4 1.6.8 3.7 1.2 6.4 1.2a22 22 0 0 0 7-1.1c2.1-.7 3.7-1.5 4.8-2.4l-1.3-5.8a13.2 13.2 0 0 1-6.2 1.6c-1.2 0-2.1 0-2.7-.4-.6-.4-1-1.1-1.3-2.3s-.4-3.2-.4-5.8v-16h10.7v-7.5H103v-9h-6.6a248 248 0 0 1-2.7 7c-.3.7-.7 1.3-1.2 1.7-.5.4-1.1.7-1.8 1l-3.3 1v5.9H92v20zM117.8 148.5l-1.1 7.9a34.8 34.8 0 0 0 13.8 2.9c4.9 0 8.7-1 11.4-3 2.7-2 4.1-5 4.1-9 0-1.9-.3-3.5-1-5-.8-1.3-2-2.6-3.6-3.6-1.6-1.1-3.8-2.1-6.5-3l-4.7-1.8a7 7 0 0 1-2.3-1.6 3 3 0 0 1-.7-2c0-1.1.5-2 1.6-2.4a16.1 16.1 0 0 1 10.2.2c1.7.5 3 1.2 3.8 2l1.2-8.3a29.4 29.4 0 0 0-19.4-1c-2.5 1-4.4 2.2-5.7 3.9a9.4 9.4 0 0 0-2 6.1c0 2.9.7 5.3 2.3 7.2 1.5 2 4 3.5 7.6 4.7 3 1 5.1 1.8 6.5 2.7 1.4 1 2 1.9 2 3 0 1.2-.4 2-1.4 2.5a19.8 19.8 0 0 1-9.4.2 25.8 25.8 0 0 1-6.7-2.6zM178 138.1a20 20 0 0 1-1.2 7.3c-.8 2-1.9 3.6-3.3 4.7-1.3 1-2.9 1.5-4.6 1.5-3.3 0-5.3-.4-6.2-1.2v-20.7a12.4 12.4 0 0 1 7.5-2.6c2.5 0 4.4.9 5.8 2.5 1.3 1.7 2 4.5 2 8.5zm-4.5-18.6c-2.6 0-4.8.4-6.5 1.2a17 17 0 0 0-4.5 2.8l.2-6.6v-15.1H152v54.4a53.6 53.6 0 0 0 16.7 3c4 0 7.7-.8 10.8-2.6 3.1-1.8 5.6-4.3 7.3-7.6 1.7-3.2 2.6-7 2.6-11.1 0-4-.7-7.4-2.1-10.2a14.8 14.8 0 0 0-13.7-8.2zM217.7 119.5l-4.8 21.3-2.7 11.5-2.8-11.5-6-21.3h-11.8l13.5 39.7h4.6c-.7 3-1.6 5.1-2.8 6.5a7.6 7.6 0 0 1-3.5 2.6 14.3 14.3 0 0 1-8.2-.2v8.3a38.1 38.1 0 0 0 5.3.6 28 28 0 0 0 5.3-.7c2.8-.9 5.4-2.6 7.7-5.2s4.2-6.2 5.5-10.7l12.4-40.9h-11.7zM251.5 155a43.5 43.5 0 0 0 15.9 3c3.6-.1 6.7-.7 9.5-1.8 2.7-1.2 4.8-2.8 6.4-5 1.5-2.2 2.2-4.8 2.2-7.9 0-2.6-.6-5-1.8-6.8-1.2-2-2.8-3.6-4.7-5-2-1.4-4.7-3-8-4.7a70.9 70.9 0 0 1-5.5-3 9.4 9.4 0 0 1-2.7-2.6c-.6-.8-1-1.9-1-3 0-1.8.7-3 2-4 1.2-1 3.2-1.4 6-1.4 2.4 0 4.5.3 6.3 1a25 25 0 0 1 5.2 2.6l1.8-8.3c-1.1-.7-3-1.4-5.4-2a35 35 0 0 0-17.6.5c-2.8 1-5 2.5-6.6 4.5a12.7 12.7 0 0 0-2.5 8c0 3.9 1.2 7 3.7 9.6a33 33 0 0 0 9.5 6.6c2.9 1.4 5 2.5 6.4 3.4a10 10 0 0 1 3 2.6c.5.8.8 1.9.8 3 0 1.9-.6 3.2-1.7 4-1.2 1-3.2 1.4-6 1.4a29 29 0 0 1-13.7-3.4l-1.5 8.6zM292.4 145.7c0 3 .3 5.3 1 7 .8 1.9 2 3.2 3.5 4 1.6.8 3.8 1.2 6.4 1.2a22 22 0 0 0 7-1.1c2.2-.7 3.8-1.5 5-2.4l-1.4-5.8a13.2 13.2 0 0 1-6.2 1.6c-1.2 0-2.2 0-2.8-.4-.5-.4-1-1.1-1.3-2.3-.3-1.2-.4-3.2-.4-5.8v-16H314v-7.5h-10.7v-9h-6.6l-2.6 7a4 4 0 0 1-1.3 1.7c-.5.4-1 .7-1.8 1l-3.3 1v5.9h4.8v20zM333.1 151.6c-1.6 0-3-.4-4-1.4-1-1-1.4-2.3-1.4-4.2 0-1.3.3-2.2 1-3 .5-.6 1.4-1.1 2.4-1.5a27.2 27.2 0 0 1 8.2-1.4v9.4c-.4.5-1.3 1-2.5 1.5-1.3.4-2.5.6-3.7.6zm1-32a47.7 47.7 0 0 0-16 3.8l2.4 6.5a34.3 34.3 0 0 1 11-2.8c2.3 0 4 .2 5 .4 1 .3 1.8.7 2.2 1.4.4.7.6 1.8.6 3.2v2.5c-7.2 0-12.5.7-15.9 2.2-2.2 1-4 2.3-5.1 4a9.5 9.5 0 0 0-1.8 5.8c0 2.4.5 4.6 1.6 6.5 1 2 2.6 3.4 4.6 4.5 2 1.1 4.2 1.6 6.7 1.6 2.1 0 4.1-.4 5.9-1.1 1.7-.8 3.2-1.7 4.4-2.9v.3c0 1.1.2 2 .5 2.5s.7.9 1.2 1c.6.2 1.4.2 2.4.2h6.3v-25.6c0-3.7-.6-6.5-1.7-8.5a9.1 9.1 0 0 0-5.1-4.3c-2.3-.8-5.4-1.3-9.3-1.3zM378.6 119.5a15.9 15.9 0 0 0-8.7 3c-1 .8-2 1.7-2.5 2.7l-.5-5.7h-9.6v39.7h10.8v-26.4a12.3 12.3 0 0 1 11.8-3.4c.7.2 1.3.5 1.8.8v-10.7h-3zM388.4 145.7c0 3 .4 5.3 1.1 7 .7 1.9 1.9 3.2 3.5 4 1.5.8 3.7 1.2 6.3 1.2a22 22 0 0 0 7-1.1c2.2-.7 3.8-1.5 5-2.4l-1.4-5.8a13.2 13.2 0 0 1-6.2 1.6c-1.2 0-2.1 0-2.7-.4-.6-.4-1-1.1-1.3-2.3-.3-1.2-.5-3.2-.5-5.8v-16H410v-7.5h-10.8v-9h-6.6l-2.6 7c-.3.7-.7 1.3-1.2 1.7a6 6 0 0 1-1.8 1l-3.4 1v5.9h4.8v20zM436.9 136h-13.6c.4-3.2 1.2-5.5 2.5-6.8 1.2-1.4 3-2 5-2 2.2 0 3.7.6 4.7 1.8a9 9 0 0 1 1.4 5.5v1.5zm10-1.7a16 16 0 0 0-2.1-8.5 12.2 12.2 0 0 0-5.6-4.7c-2.3-1-5-1.6-7.8-1.6-4 0-7.4 1-10.3 2.6-2.9 1.7-5 4-6.6 7-1.5 3-2.2 6.4-2.2 10.2 0 4.2.7 7.7 2.1 10.7 1.5 3 3.6 5.3 6.4 6.9 2.8 1.5 6.2 2.3 10.2 2.3 3 0 5.8-.3 8.5-1 2.7-.8 4.8-1.6 6.2-2.7l-1.8-6a28.5 28.5 0 0 1-10.2 2.2c-3.2 0-5.6-.9-7.5-2.6-1.8-1.6-2.8-4.2-3-7.7h23.4c.2-1.5.3-3.8.3-7zM473.3 119.5a15.9 15.9 0 0 0-8.7 3c-1.1.8-2 1.7-2.5 2.7l-.5-5.7H452v39.7h10.8v-26.4a12.3 12.3 0 0 1 11.7-3.4l1.9.8v-10.7h-3.1zM542.2 155.5a1038 1038 0 0 0-16.3-26l17.8-22.3h-12.1L513 130.6v-23.4h-11v52h11v-15.8l5.5-6a199.5 199.5 0 0 1 12.2 19.3l.4.8 1 1.7h12.3l-2.2-3.7zM547.1 108.2a5.7 5.7 0 0 0 3.1 5.1 6.8 6.8 0 0 0 6.6-.1c1-.6 1.9-1.4 2.5-2.4.7-1 1-2 1-3.2 0-1.7-.6-3.1-1.7-4.2a6.3 6.3 0 0 0-4.6-1.6 7 7 0 0 0-3.3.8c-1.1.6-2 1.4-2.6 2.4-.7 1-1 2-1 3.2zm1.4 11.3v39.7h10.9v-39.7h-10.9zM569.5 145.7c0 3 .4 5.3 1.1 7 .7 1.9 1.9 3.2 3.5 4 1.6.8 3.7 1.2 6.4 1.2a22 22 0 0 0 7-1.1c2.1-.7 3.7-1.5 4.8-2.4l-1.3-5.8a13.2 13.2 0 0 1-6.2 1.6c-1.2 0-2.1 0-2.7-.4-.6-.4-1-1.1-1.3-2.3-.3-1.2-.4-3.2-.4-5.8v-16H591v-7.5h-10.7v-9h-6.6l-2.7 7a4 4 0 0 1-1.2 1.7l-1.8 1-3.3 1v5.9h4.7v20z"/><path fillRule="evenodd" fill="#CCC" d="M110.9 1v69.1h68.7V1H111zm6.8 7h55v55.2h-55V8z"/><path fillRule="evenodd" fill="#AAA" d="M218 46h55v17.2h-55V46zm-6.8-7v31.1h68.7v-31h-68.7zM218 8h55v17.2h-55V7.9zm-7-7v31.1H280V1h-68.7z"/><path fillRule="evenodd" fill="#888" d="M318.9 46H336v17.2H319V46zm-7-7v31.1h31v-31h-31zm44.8 7h17.2v17.2h-17.2V46zm-7-7v31.1h31v-31h-31zM319 8H336v17.2H319V7.9zm-7-7v31.1h31V1h-31zm44.8 7h17.2v17.2h-17.2V7.9zm-7-7v31.1h31V1h-31z"/><g fillRule="evenodd"><path fill="#666" d="M451.1 1H482v31.1h-30.9z"/><path fill="#9CF" d="M458 7.9h17.2v17.3H458z"/><path fill="#666" d="M413.3 1h30.9v31.1h-30.9z"/><path fill="#FC6" d="M420.2 7.9h17.2v17.3h-17.2z"/><path fill="#666" d="M451.1 39H482v31.1h-30.9z"/><path fill="#6C0" d="M458 45.9h17.2v17.3H458z"/><path fill="#666" d="M413.3 39h30.9v31.1h-30.9z"/><path fill="#F9C" d="M420.2 45.9h17.2v17.3h-17.2z"/></g></svg>
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
