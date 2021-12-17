import { createStitches } from '@stitches/react';

export const MAIN_ACCENT = "#712CE2"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      accent: MAIN_ACCENT
    },
  },
  utils: {
    accentBorder: () => ({
      border: '2px solid #000000',
      borderRadius: "1.5rem",
    }),
    accentShadow: () => ({
      boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.3)",
      transition: "box-shadow 100ms",
      "&:focus": {
        boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.4)",
      }
    })
  }
});
