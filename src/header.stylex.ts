import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  primaryBackColor: {
    default: "#ffffff",
    [DARK]: "#242526",
  },
  primaryTextColor: {
    default: "rgb(5,5,5,1)",
    [DARK]: "red",
  },
  hoverColor: {
    default: "#",
    [DARK]: "#F2F2F2",
  },
  hoverDarkColor: {
    default: "#F2F2F2",
    [DARK]: "#3a3b3c",
  },
});

export const spacing = stylex.defineVars({
  borderRadius: ".2em",
});

export const rootStyles = stylex.create({
  nav: {
    backgroundColor: {
      ":hover": colors.hoverDarkColor,
      ":active": "red",
    },
    padding: "8px 10px",
  },
  active: {
    backgroundColor: "blue",
  },
  dynamic: (value) => ({ opacity: value }),
});
