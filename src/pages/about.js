import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { FaGulp } from "react-icons/fa";
import BackgroundHeader from "../components/Globals/BackgroundHeader";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundHeader
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />

    <FaGulp />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
