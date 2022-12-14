/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`], ".active": { color: `heading` } }}>
          {nav.map((item) => (
            <Link
              activeClassName="active"
              key={item.slug}
              sx={(t) => ({ ...t.styles?.a })}
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              <img src={item.title}/>
            </Link>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
/* options: {
     navigation: [
       {
         title: "https://img.shields.io/badge/DESIGN_PATTERN-0DBD8B?style=for-the-badge",
         slug: `/tags/design-pattern`,
       },
       {
         title: "https://img.shields.io/badge/GIT-%2300843e.svg?style=for-the-badge&logo=github&logoColor=white",
         slug: `/tags/git`,
       },
       {
         title: "https://img.shields.io/badge/GOLANG-00ADD8?style=for-the-badge&logo=go&logoColor=white",
         slug: `/tags/golang`,
       },
       {
         title: "https://img.shields.io/badge/MYSQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white",
         slug: `/tags/mysql`,
       },
       {
         title: "https://img.shields.io/badge/SQLITE-07405E?style=for-the-badge&logo=SQLITE&logoColor=white",
         slug: `/tags/sqlite`,
       },
       {
         title: "https://img.shields.io/badge/REST-9cf?style=for-the-badge",
         slug: `/tags/rest`,
       },
       {
         title: "https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
         slug: `/tags/javascript`,
       },
       {
         title: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
         slug: `/tags/react`,
       },
       {
         title: "https://img.shields.io/badge/TESTCASE-7D4698?style=for-the-badge",
         slug: `/tags/testcase`,
       },
       {
         title: "https://img.shields.io/badge/LOGIN-ff69b4?style=for-the-badge",
         slug: `/tags/login`,
       },
       {
         title: "https://img.shields.io/badge/PROTOCOL-E4405F?style=for-the-badge",
         slug: `/tags/protocol`,
       },
       {
         title: "https://img.shields.io/badge/INFRA-626CD9?style=for-the-badge",
         slug: `/tags/infra`,
       },
       {
         title: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
         slug: `/tags/aws`,
       },
       {
         title: "https://img.shields.io/badge/ETC-35434F?style=for-the-badge",
         slug: `/tags/etc`,
       },
     ],
     externalLinks: [
       {
         name: `About GwiyeomGo`,
         url: `/about`,
       },
     ],
   },*/