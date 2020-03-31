import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";
import PressLinks from "components/PressLinks";

const links = [
  {
    date: '03-19-2020',
    url: 'https://thekey.xpn.org/2020/03/19/dweller-blue-van-black-sky/'
  },
  {
    date: '12-02-2018',
    url: 'http://post-trash.com/news/2018/12/2/dweller-bugs-video-post-trash-premiere'
  },
  {
    date: '11-20-2018',
    url: 'https://reflectivesurfacemag.com/dweller-dweller/'
  },
  {
    date: '10-02-2018',
    url: 'https://varioussmallflames.co.uk/2018/10/02/dweller-s-t/'
  },
  {
    date: '09-20-2018',
    url: 'http://www.mindies.es/2018/09/dweller-running/'
  },
  {
    date: '09-12-2018',
    url: 'http://post-trash.com/news/2018/9/12/dweller-running-post-trash-premiere'
  },
  {
    date: '09-12-2016',
    url: 'https://www.tristateindie.com/debut-dweller-lp-available-for-streaming-download/'
  },
  {
    date: '07-16-2016',
    url: 'https://thekey.xpn.org/2016/07/15/reflections-desert-dweller/'
  }
]

const PressPage = () => (
  <Layout>
    <SEO
      title="Press"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <h1>Press</h1>
    <PressLinks links={ links } />
  </Layout>
)

export default PressPage;
