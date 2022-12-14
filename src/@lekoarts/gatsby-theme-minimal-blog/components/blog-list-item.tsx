/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"

type BlogListItemProps = {
  post: {
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
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={2}>
      <Link
          to={post.slug}
          style={{ textDecoration: 'none',fontWeight: 'bold'}}
          sx={{
              color: 'inherit',
              fontSize: [1, 2, 2],
              textDecoration: 'none',
              ':hover,:focus': {
                  color: '#fd999a',
              },
          }}
          /* sx={(t) => ({ ...t.styles?.a, fontSize: [1, 2, 2], color: `text` })}*/
      >
          {post.title}
      </Link>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 1] }}>
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default BlogListItem
