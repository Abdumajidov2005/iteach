import { BiSolidDashboard } from "react-icons/bi";
import { MdLeaderboard } from "react-icons/md";
import { ROLES } from "./data";
import { LuFolderCode } from "react-icons/lu";
import { FaLayerGroup } from "react-icons/fa6";

export const renderData = (role) => {
  switch (role) {
    case ROLES.admin:
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
    case ROLES.teacher:
      return [
        {
          title: "Leaderboard",
          path: "/leaderboard",
          icon: MdLeaderboard,
        },
      ];
    case ROLES.student:
      return [
        {
          title: "Dashboard",
          path: "/",
          icon: BiSolidDashboard,
        },
        {
          title: "Courses",
          path: "/courses",
          icon: LuFolderCode,
        },
        {
          title: "Groups",
          path: "/groups",
          icon: FaLayerGroup,
        },
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
