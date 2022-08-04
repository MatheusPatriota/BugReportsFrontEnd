// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  styles: {
    global: {
      //global styles
      "*": {
        fontFamily: "Ubuntu, sans-serif",
      },
      // styles for the `body`
      'body, html, #__next': {
        height: '100vh',
      },
      // styles for the `a`
    },
  },
  colors: {
    bugreportsdark: {
      100: "#201a30",
      200: "#35b5ad",
      300: "#645c64",
      400: "#7a69b0",
    },
  },
});
