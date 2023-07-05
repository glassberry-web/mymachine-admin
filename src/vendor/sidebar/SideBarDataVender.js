import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";

 export const SideBarDataVender = [
  {
    idx: 1,
    title: "Dashboard",
    datakey: "t-dashboards",
    href: "sidebarDashboards",
    icon: <DashboardOutlinedIcon />,
  },
  {
    idx: 2,
    id: "sidebarApps",
    title: "Product List",
    href: "Companylist",
    datakey: "t-sellers",
  },
  // {
  //   idx: 3,
  //   id: "sidebarform",
  //   title: "Edit Company",
  //   href: "edit-vendor-form",
  //   datakey: "t-sellform",
  //   submenu: [
  //     {
  //       idx: 1,
  //       id: "sidebarslider",
  //       title: "Edit Company",
  //       href: "edit-vendor-form",
  //       datakey: "t-sellform",
  //     },
  //   ]
  // },
];
