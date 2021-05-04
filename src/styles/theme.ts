import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "500": "#999999",
      "50": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08",
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
  styles: {
    global: {
      ":root": {
        "--swiper-theme-color": "var(--chakra-colors-yellow-500)",
        "--swiper-navigation-size": "1.875rem",
      },
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
      ".swiper-button-next": {
        right: "8",
      },
      ".swiper-button-prev": {
        left: "8",
      },
      ".swiper-pagination-bullet:not(.swiper-pagination-bullet-active)": {
        opacity: 1,
        background: "gray.600",
      },
    },
  },
});
