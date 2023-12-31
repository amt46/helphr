import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import PlannerWeek from "./toturial/PlannerWeek";
import Navigation from "./Navigation";
import { ReactNode } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { stylex } from "@stylexjs/stylex";
import { colors } from "./header.stylex";

export type NavType = {
  name: string;
  icon: IconType;
  element: ReactNode;
  subRoutes?: NavType[];
};

export type MainNav = {
  name: string;
  icon?: IconType;
  routes: NavType[];
};

const styles = stylex.create({
  root: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: colors.primaryBackColor,
    color: colors.primaryTextColor,
  },
});

const routes: MainNav[] = [
  {
    name: "Planner",
    icon: AiOutlineHome,
    routes: [
      {
        name: "drawShift",
        icon: FaBuilding,
        element: <PlannerWeek />,
      },
      {
        name: "drawShift2",
        icon: FaBuilding,
        element: <div>Draw Shift</div>,
      },
      {
        name: "drawShift3",
        icon: FaBuilding,
        element: <div>Draw Shift</div>,
      },
      {
        name: "drawShift4",
        icon: FaBuilding,
        element: <div>Draw Shift</div>,
      },
      {
        name: "drawShift5",
        icon: FaBuilding,
        element: <div>Draw Shift</div>,
      },
      {
        name: "drawShift6",
        icon: FaBuilding,
        element: <div>Draw Shift</div>,
      },
    ],
  },
  {
    name: "Notification",
    routes: [
      {
        name: "payroll",
        icon: FaBuilding,
        element: <div>Draw Shift</div>,
      },
    ],
  },
];

function App() {
  return (
    <Router>
      <div {...stylex.props(styles.root)}>
        <Navigation routes={routes} />
        <Routes>
          {routes.map((i) => {
            return i.routes.map((rou, r) => {
              const routendame =
                rou.name === "drawShift" ? "" : rou.name.toLowerCase();
              console.log(routendame);
              return (
                <Route key={r} path={`${routendame}`} element={rou.element} />
              );
            });
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
