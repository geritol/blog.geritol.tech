import React from "react"
import { graphql } from "gatsby"
import BlogPostTemplate from "../components/blog-post"

const BlogPostWithComment = props => <BlogPostTemplate {...props} />

export default BlogPostWithComment

export const pageQuery = graphql`
  query BlogPostWithComment(
    $id: String!
    $issueId: Int!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    github {
      repository(name: "blog.geritol.tech", owner: "geritol") {
        issue(number: $issueId) {
          id
          comments(first: 30) {
            nodes {
              id
              author {
                login
                url
                avatarUrl
              }
              bodyHTML
              createdAt
              reactionGroups {
                content
              }
            }
          }
        }
      }
    }
  }
`
