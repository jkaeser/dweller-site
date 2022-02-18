import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <h1 className="visually-hidden">About</h1>
    <p>
      Dweller started in 2015 as a lo-fi side project between Cody Bluett and Luke Harsel as they shared a house near Temple University. After a few years of recording EPs and playing a handful of two-piece shows, they added John Evin Groome on bass and John Kaeser on drums in 2017.
    </p>
    <p>
      In 2018 the four piece finished recording and mixing their full length self-titled album from the basement of their house in Fishtown, Philadelphia.
    </p>
    <p>
      Dan Goldin of the blog <a href="http://post-trash.com/news/2018/12/2/dweller-bugs-video-post-trash-premiere">Post-Trash</a> called the self-titled record "A jangly batch of indie rock that feels good. Good for the spirit, good for listening… just an overall goodness."
    </p>
    <p>
      Dweller released their self-titled record digitally and on cassettes through Minneapolis-based tape label <a href="http://www.forgedartifacts.com/">Forged Artifacts</a> in October 2018.
    </p>
    <p>
      Their follow up record, Aquarium, was also released through Forged Artifacts on cassette tape and digital platforms in September 2020.
    </p>
  </Layout>
)

export default AboutPage;
