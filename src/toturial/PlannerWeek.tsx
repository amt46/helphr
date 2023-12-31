import { FC } from "react";
import HeaderText from "../Header";
import Video from "../Video";

interface PlannerWeekProps {}

const PlannerWeek: FC<PlannerWeekProps> = ({}) => {
  return (
    <div className="px-4">
      <HeaderText>Understanding Planner</HeaderText>
      <p className="font-bold my-4">
        This page will you to understand how to draw shift in planner page.
      </p>
      <div className="w-[90%]">
        <Video />
      </div>
    </div>
  );
};

export default PlannerWeek;
