import { merge } from "theme-ui";
import tailwind from "@theme-ui/preset-tailwind";

const theme = merge(tailwind, {
    config: {
        initialColorModeName: `light`,
        useColorSchemeMediaQuery: `system`,
    },
    colors: {
        primary: tailwind.colors.purple[7],
        secondary: tailwind.colors.gray[2],
        toggleIcon: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        divide: tailwind.colors.gray[4],
        muted: tailwind.colors.gray[2],
        modes: {
            dark: {
                text: `#FFB59D`,
                primary: `#FFB59D`,
                secondary: `#FFB59D`,
                toggleIcon: `#FFECE5`,
                background: `#352E2B`,
                heading: `#FF8C66`,
                divide: `#FF8C66`,
                muted: `#FFF0EA`,
            },
            light: {
                text: `#352E2B`,
                primary: `#FFB59D`,
                secondary: `#FFB59D`,
                toggleIcon: `#FF8C66`,
                background: `#FFECE5`,
                heading: `#352E2B`,
                divide: `#FF8C66`,
                muted: `#FFB59D`,
            },
        },
    },
    fonts: {
        body: `-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    },
    styles: {
        root: {
            color: `text`,
            backgroundColor: `background`,
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
        },
        p: {
            fontSize: [1, 1, 2],
            letterSpacing: `-0.003em`,
            lineHeight: `body`,
            "--baseline-multiplier": 0.179,
            "--x-height-multiplier": 0.35,
            wordBreak: `break-word`,
        },
        ul: {
            li: {
                fontSize: [1, 1, 2],
                letterSpacing: `-0.003em`,
                lineHeight: `body`,
                "--baseline-multiplier": 0.179,
                "--x-height-multiplier": 0.35,
            },
        },
        ol: {
            li: {
                fontSize: [1, 1, 2],
                letterSpacing: `-0.003em`,
                lineHeight: `body`,
                "--baseline-multiplier": 0.179,
                "--x-height-multiplier": 0.35,
            },
        },
        h1: {
            variant: `text.heading`,
            fontSize: [3, 3, 3, 3],
            mt: 4,
        },
        h2: {
            variant: `text.heading`,
            fontSize: [2, 2, 2, 2],
            mt: 4,
        },
        h3: {
            variant: `text.heading`,
            fontSize: [2, 3, 3, 4],
            mt: 4,
        },
        h4: {
            variant: `text.heading`,
            fontSize: [1, 2, 2, 3],
            mt: 3,
        },
        h5: {
            variant: `text.heading`,
            fontSize: [1, 2],
            mt: 3,
        },
        h6: {
            variant: `text.heading`,
            fontSize: 1,
            mb: 2,
        },
        blockquote: {
            borderLeftColor: `primary`,
            borderLeftStyle: `solid`,
            borderLeftWidth: `4px`,
            mx: 0,
            pl: 4,
            p: {
                fontStyle: `italic`,
            },
        },
        table: {
            width: `100%`,
            my: 4,
            borderCollapse: `separate`,
            borderSpacing: 0,
            [[`th`, `td`]]: {
                textAlign: `left`,
                py: `4px`,
                pr: `4px`,
                pl: 0,
                borderColor: `muted`,
                borderBottomStyle: `solid`,
            },
        },
        th: {
            verticalAlign: `bottom`,
            borderBottomWidth: `2px`,
            color: `heading`,
        },
        td: {
            verticalAlign: `top`,
            borderBottomWidth: `1px`,
        },
        hr: {
            mx: 0,
        },
        img: {
            borderRadius: `4px`,
            boxShadow: `lg`,
            maxWidth: `100%`,
        },
    },
    layout: {
        container: {
            padding: [3, 4],
            maxWidth: `1024px`,
        },
        content: {
            figure: {
                margin: 0,
                img: {
                    borderRadius: `4px`,
                    boxShadow: `lg`,
                    maxWidth: `100%`,
                },
            },
        },
    },
    text: {
        heading: {
            fontFamily: `heading`,
            fontWeight: `heading`,
            lineHeight: `heading`,
            color: `heading`,
        },
    },
    copyButton: {
        backgroundColor: `background`,
        border: `none`,
        color: `text`,
        cursor: `pointer`,
        fontSize: [`14px`, `14px`, `16px`],
        fontFamily: `body`,
        letterSpacing: `0.025rem`,
        transition: `all 0.3s ease-in-out`,
        "&[disabled]": {
            cursor: `not-allowed`,
        },
        ":not([disabled]):hover": {
            bg: `primary`,
            color: `white`,
        },
        position: `absolute`,
        right: 0,
        zIndex: 1,
        borderRadius: `0 0 0 0.25rem`,
        padding: `0.25rem 0.6rem`,
    },
    dividers: {
        bottom: {
            borderBottomStyle: `solid`,
            borderBottomWidth: `1px`,
            borderBottomColor: `divide`,
            pb: 3,
        },
        top: {
            borderTopStyle: `solid`,
            borderTopWidth: `1px`,
            borderTopColor: `divide`,
            pt: 3,
        },
    },
    links: {
        secondary: {
            color: `secondary`,
            textDecoration: `none`,
            ":hover": {
                color: `heading`,
                textDecoration: `underline`,
            },
            ":focus": {
                color: `heading`,
            },
        },
        listItem: {
            fontSize: [1, 2, 3],
            color: `text`,
        },
    },
});

export default theme;
