/** @jsx jsx */
import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { jsx, Heading } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import Seo from "./seo"
import PostFooter from "@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer"
import { Disqus } from "gatsby-plugin-disqus";


export type MBPostProps = {
  post: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
    description?: string
    canonicalUrl?: string
    excerpt: string
    timeToRead?: number
    banner?: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }
}

const px = [`16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.1) 0px ${v} ${v} 0px`)

const ScriptHandler = (props) => {
    // if the script is a gist override it with our react component.
    if (props.src && props.src.includes('gist.github.com')) {
        console.log("--------",props.src)
        return <Gist id={props.src.split('/')[4].split('.')[0]}/>
    }
    return null
}

const Post: React.FC<React.PropsWithChildren<PageProps<MBPostProps>>> = ({ data: { post }, children }) => (
  <Layout>
    <Heading as="h1" variant="styles.h1">
      {post.title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": {
          my: [4, 4, 5],
          borderRadius: `4px`,
          boxShadow: shadow.join(`, `),
          ".gatsby-resp-image-image": {
            borderRadius: `4px`,
          },
        },
        variant: `layout.content`,
      }}
    >

        {children}


    </section>
    <Disqus />
    <PostFooter post={post} />
  </Layout>
)

export default Post

export const Head: HeadFC<MBPostProps> = ({ data: { post } }) => (
  <Seo
    title={post.title}
    description={post.description ? post.description : post.excerpt}
    image={post.banner ? post.banner?.childImageSharp?.resize?.src : undefined}
    pathname={post.slug}
    canonicalUrl={post.canonicalUrl}
  />
)
