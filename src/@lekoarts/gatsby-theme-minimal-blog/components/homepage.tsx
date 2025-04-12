/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "./seo"
import Hero from "../texts/hero.mdx"
import Bottom from "../texts/bottom.mdx"
import Tree from "../../../custom/tree";
import * as React from "react";

export type MBHomepageProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section style={{marginBottom:20}} sx={{ mb: [5, 6, 7], p: { fontSize: [1, 1, 1], mt: 2 }, variant: `section_hero` }}>
        <Tree/>
      </section>

      <Title text={<h5>최근글</h5>} sx={{ fontSize: [1, 2, 3],fontWeight:500 }} >
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
