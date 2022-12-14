require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
    siteTitle: `GwiyeomGo Tech Blog`,
    siteTitleAlt: `GwiyeomGo Tech Blog`,
    siteHeadline: `GwiyeomGo Tech Blog`,
    siteUrl: `https://gwiyeomgo.github.io`,
    siteDescription: `gwiyeomgo-blog`,
    siteImage: `/banner.jpg`,
    author: `GwiyeomGo`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
            {
                title: "https://img.shields.io/badge/DESIGN_PATTERN-fd999a?style=flat-square&color=fec8c9",
                slug: `/tags/design-pattern`,
            },
            {
                title: "https://img.shields.io/badge/GIT-fd999a?style=flat-square&logo=github&logoColor=fd999a&color=3e4149",
                slug: `/tags/git`,
            },
            {
                title: "https://img.shields.io/badge/GOLANG-fd999a?style=flat-square&logo=go&logoColor=fd999a&color=3e4149",
                slug: `/tags/golang`,
            },
            {
                title: "https://img.shields.io/badge/MYSQL-fd999a?style=flat-square&logo=MySQL&logoColor=fd999a&color=3e4149",
                slug: `/tags/mysql`,
            },
            {
                title: "https://img.shields.io/badge/SQLITE-fd999a?style=flat-square&logo=SQLITE&logoColor=fd999a&color=3e4149",
                slug: `/tags/sqlite`,
            },
            {
                title: "https://img.shields.io/badge/REST-fd999a?style=flat-square&color=fd999a",
                slug: `/tags/rest`,
            },
            {
                title: "https://img.shields.io/badge/JAVASCRIPT-fd999a?style=flat-square&logo=javascript&logoColor=fd999a&color=3e4149",
                slug: `/tags/javascript`,
            },
            {
                title: "https://img.shields.io/badge/React-fd999a?style=flat-square&logo=react&logoColor=fd999a&color=3e4149",
                slug: `/tags/react`,
            },
            {
                title: "https://img.shields.io/badge/TESTCASE-fd999a?style=flat-square&color=fd999a",
                slug: `/tags/testcase`,
            },
            {
                title: "https://img.shields.io/badge/LOGIN-fd999a?style=flat-square&color=fd999a",
                slug: `/tags/login`,
            },
            {
                title: "https://img.shields.io/badge/PROTOCOL-fd999a?style=flat-square&color=fd999a",
                slug: `/tags/protocol`,
            },
            {
                title: "https://img.shields.io/badge/INFRA-fd999a?style=flat-square&color=fec8c9",
                slug: `/tags/infra`,
            },
            {
                title: "https://img.shields.io/badge/Amazon_AWS-fd999a?style=flat-square&logo=amazon-aws&logoColor=fd999a&color=3e4149",
                slug: `/tags/aws`,
            },
            {
                title: "https://img.shields.io/badge/ETC-fd999a?style=flat-square&color=fec8c9",
                slug: `/tags/etc`,
            },
        ],
        externalLinks: [
          {
            name: `About GwiyeomGo`,
            url: `/about`,
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gwiyeomgo-blog`,
        short_name: `gwiyeomgo-blog`,
        description: `gwiyeomgo-blog`,
        start_url: `/`,
        background_color: `#fec8c9`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3e4149`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `gwiyeom-blog`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `developmentRecords`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-P3DYW3SB5H", // GA4
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
