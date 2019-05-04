import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a.social": {
      backgroundColor: "rgba(251, 251, 123, 0.58)",
      transitionDuration: ".5s",
    },
    "a.social:hover": {
      textDecoration: `underline`,
      backgroundColor: "rgba(251, 251, 123, 0.88)",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
