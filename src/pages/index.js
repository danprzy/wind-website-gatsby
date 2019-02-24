import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";

import BackgroundHeader from "../components/Globals/BackgroundHeader";

import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import Clients from "../components/Home/Clients";
import News from "../components/Home/News";
import Team from "../components/Home/Team";
import Facts from "../components/Home/Facts";
import Contact from "../components/Home/Contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundHeader
      img={data.img.childImageSharp.fluid}
      title="coffe shop"
      styleClass="default-background"
    />
    <Services />
    <Testimonials />
    <Clients />
    <News />
    <Team />
    <Facts />
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
