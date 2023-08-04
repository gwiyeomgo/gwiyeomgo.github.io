/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle";
import Navigation from "./navigation";
import HeaderTitle from "./header-title";
import HeaderExternalLinks from "./header-external-links";

const Header = () => {
    const { navigation: nav } = useMinimalBlogConfig();
    return (
        <header style={{marginBottom:0}} sx={{ mb: [5, 6]}}>
            <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
                <HeaderTitle />
                <ColorModeToggle />
            </Flex>
            <div
                sx={{
                    boxSizing: `border-box`,
                    display: `flex`,
                    variant: `dividers.bottom`,
                    alignItems: `center`,
                    justifyContent: `space-between`,
                    mt: 3,
                    color: `secondary`,
                    a: { color: `secondary`, ":hover": { color: `heading` } },
                    flexFlow: `wrap`,
                }}
            >
                <Navigation nav={nav} />
                <HeaderExternalLinks />
            </div>
        </header>
    );
};

export default Header;
