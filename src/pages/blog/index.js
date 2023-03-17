import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={"My Blog Posts"}>
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <Link to={'/blog/' + node.frontmatter.slug}>
                            <h2>{node.frontmatter.title}</h2>
                        </Link>
                        <p>Posted: {node.frontmatter.date}</p>
                        {/* <p>{node.excerpt}</p> */}
                    </article>
                ))
            }
        </Layout>      
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter:{date: DESC}}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title={"My Blog Posts"} />

export default BlogPage