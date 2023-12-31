import { FC } from "react";
import { MainNav } from "./App";
import { NavLink } from "react-router-dom";

interface navigationProps {
  routes: MainNav[];
}

const Navigation: FC<navigationProps> = ({ routes }) => {
  return (
    <div>
      {routes.map((nav, k) => {
        return (
          <div key={k} className="w-[300px] min-h-full">
            <p className="font-semibold px-4 py-2">{nav.name}</p>
            <div className="flex flex-col">
              {nav.routes.map((rou, r) => (
                <NavLink
                  className={({ isActive }) =>
                    `rounded-l-lg min-h-[40px] px-6 py-2 ${
                      isActive && "active-nav-bg"
                    }`
                  }
                  to={rou.name === "drawShift" ? "" : rou.name.toLowerCase()}
                  key={r}
                >
                  {rou.name
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, rou.name[0].toUpperCase())}
                </NavLink>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
