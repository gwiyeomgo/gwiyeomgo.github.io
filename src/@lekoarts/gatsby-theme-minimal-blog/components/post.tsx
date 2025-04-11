/** @jsx jsx */
import type {HeadFC, PageProps} from "gatsby"
import * as React from "react"
import {jsx, Heading} from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import Seo from "./seo"
import PostFooter from "@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer"
import { DiscussionEmbed } from 'disqus-react';

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

const Post = ({
                  data: { post },
                  children,
              }: React.PropsWithChildren<PageProps<MBPostProps>>) =>  (
    <Layout>
        <Heading as="h3" variant="styles.h3">
            {post.title}
        </Heading>
        <p sx={{color: `secondary`, mt: 2, a: {color: `secondary`}, fontSize: [1, 1, 2]}}>
            <time>{post.date}</time>
            {post.tags && (
                <React.Fragment>
                    {` — `}
                    <ItemTags tags={post.tags}/>
                </React.Fragment>
            )}
            {post.timeToRead && ` — `}
            {post.timeToRead && <span>{post.timeToRead} min read</span>}
        </p>
        <section
            style={{margin:0}}
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
            <div
                //TODO 마우스 동작
          /*      onMouseMove={(e) => {
                    e.preventDefault()
                }}
                onCopy={(e) => {
                    e.preventDefault()
                }}
                onContextMenu={(e) => {
                    e.preventDefault();
                }}*/
            >
                {children}
            </div>
        </section>
        <DiscussionEmbed
            config={{}}
            shortname='developmentRecords'
        />
        <PostFooter post={post}/>
    </Layout>
)

export default Post

export const Head: HeadFC<MBPostProps> = ({data: {post}}) => (
    <Seo
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={post.banner ? post.banner?.childImageSharp?.resize?.src : undefined}
        pathname={post.slug}
        canonicalUrl={post.canonicalUrl}
    />
)
