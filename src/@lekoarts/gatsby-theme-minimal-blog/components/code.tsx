import * as React from "react"
import { useColorMode } from "theme-ui"
import { Highlight } from "prism-react-renderer"
import { calculateLinesToHighlight, getLanguage, GetLanguageInput } from "@lekoarts/themes-utils"
import Copy from "@lekoarts/gatsby-theme-minimal-blog/src/components/copy"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import { lightTheme, darkTheme } from "@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-themes"

type CodeProps = {
  codeString: string
  withLineNumbers?: boolean
  highlight?: string
  title?: string
  className: GetLanguageInput
}

const Code = ({
                codeString,
                withLineNumbers = false,
                title = ``,
                className: blockClassName,
                highlight = ``,
              }: CodeProps) => {
  const { showLineNumbers, showCopyButton } = useMinimalBlogConfig()
  const [colorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  const language = getLanguage(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(highlight)
  const shouldShowLineNumbers = withLineNumbers || showLineNumbers

  return (
      <Highlight
          code={codeString}
          // @ts-ignore
          language={language}
          theme={isDark ? darkTheme : lightTheme}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
            <React.Fragment>
              <div className="gatsby-highlight" data-language={language}>
                {title && (
                    <div className="code-title">
                      <div>{title}</div>
                    </div>
                )}
                <pre className={className} data-linenumber={shouldShowLineNumbers}>
             {/* {showCopyButton && <Copy content={codeString} fileName={title} />}*/}
                  <code  style={{color: `black`,backgroundColor:`#FFB59D`}} className={`code-content language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i })

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`
                    lineProps.style = {
                      ...lineProps.style,
                      backgroundColor: `var(--theme-ui-colors-highlightLineBg)`,
                    }
                  }

                  return (
                      <div {...lineProps}>
                        {shouldShowLineNumbers && <span className="line-number-style">{i + 1}</span>}
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                  )
                })}
              </code>
            </pre>
              </div>
            </React.Fragment>
        )}
      </Highlight>
  )
}

export default Code
