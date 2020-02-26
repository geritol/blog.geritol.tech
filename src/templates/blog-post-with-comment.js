import React from "react"
import { graphql } from "gatsby"
import BlogPostTemplate from "../components/blog-post"

const BlogPostWithComment = props => <BlogPostTemplate {...props} />

export default BlogPostWithComment

export const pageQuery = graphql`
  query BlogPostWithComment($slug: String!, $issueId: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
