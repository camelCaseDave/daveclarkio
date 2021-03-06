import "../styles/prism";

import styled from "@emotion/styled";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import DotSeparator from "../components/dot-separator";
import SEO from "../components/seo";
import Content from "../layouts/content";
import Layout from "../layouts/layout";
import { theme } from "../../config/theme";

const Wrapper = styled.div`
  max-width: 680px;
  margin: auto;
  margin-top: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const Description = styled.p`
  color: ${theme.colours.black.base};
  font-weight: 500;
  margin-top: 1em;
`;

const Meta = styled.div`
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Post = ({ data }) => {
  const { html, frontmatter, fields } = data.markdownRemark;
  const readingTime = fields.readingTime.text;
  const { date, title, path, description, seoImage } = frontmatter;

  return (
    <Layout>
      <Wrapper>
        <SEO
          title={title}
          pathname={path}
          article
          banner={seoImage}
          description={description}
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Meta>
          {date}
          <DotSeparator />
          {readingTime}
        </Meta>
        <div>
          <Content input={html} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMM Do YYYY")
        title
        description
        seoImage
        path
      }
    }
  }
`;
