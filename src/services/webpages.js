import { BiSolidDashboard } from "react-icons/bi";
import { MdLeaderboard } from "react-icons/md";
import { ROLES } from "./data";

export const renderData = (role) => {
  switch (role) {
    case ROLES.ADMIN:
      return [
        {
          title: "Dashboard",
          path: "/",
          icon: BiSolidDashboard,
        },
        {
          title: "Leaderboard",
          path: "/leaderboard",
          icon: MdLeaderboard,
        },
      ];
    case ROLES.TEACHER:
      return [
        {
          title: "Leaderboard",
          path: "/leaderboard",
          icon: MdLeaderboard,
        },
      ];
    default:
      return [];
  }
};
