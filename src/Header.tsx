import { FC } from "react";
import stylex from "@stylexjs/stylex";

interface HeaderProps {}

import inject from "@stylexjs/dev-runtime";
import { colors } from "./header.stylex";

if (import.meta.env.NODE_ENV !== "production") {
  inject({
    classNamePrefix: "x-",
    dev: true,
    test: false,
    useRemForFontSize: false,
    styleResolution: "application-order",
  });
}

const styles = stylex.create({
  root: {
    width: "100%",
    color: colors.primaryTextColor,
    fontWeight: "1000",
    fontSize: 40,
    padding: "10px 20px",
  },
  highlighted: {},
});

const HeaderText: FC<HeaderProps> = ({ ...prop }) => {
  return <p {...stylex.props(styles.root, styles.highlighted)} {...prop} />;
};

export default HeaderText;
