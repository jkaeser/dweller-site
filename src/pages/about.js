import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <p>
      Starting as the experimental and alternative side project of Cody Bluett and Luke Harsel while playing in the band Family Vacation in their late college years, Dweller has grown into a full-blown four-piece band that has taken hold of its roots in folk, alternative, and 90's rock to explore new sonic territory. Joined by John Evin Groome on bass and John Kaeser on drums, Dweller has transformed itself to the sound it has always meant to be.
    </p>
    <p>
      Beginning in January of 2017, the four best friends and musicians have pieced together their self-titled record little by little, recording and mixing the entire album in their very own home in Fishtown, Philadelphia. The songs on the album reflect a youthful progress, reshaping and recomposing older songs and lyrics to fit with fresh and exciting new material, all while introducing brand new synergy between members respective instruments to create a developed and cohesive record.
    </p>
  </Layout>
)

export default AboutPage;
