import { FC } from "react";

interface HeaderProps {}

const HeaderText: FC<HeaderProps> = ({ ...prop }) => {
  return <p className="text-[40px] font-extrabold p-4" {...prop} />;
};

export default HeaderText;
