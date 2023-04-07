import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

const SidebarData = [
  {
    idx: 1,
    title: "Dashboard",
    datakey: "t-dashboards",
    href: "sidebarDashboards",
    icon: <DashboardOutlinedIcon />,
  },
  {
    idx: 2,
    title: "Companies",
    href: "sidebarApps",
    datakey: "t-apps",
    icon: <CategoryRoundedIcon />,
    submenu: [
      {
        idx: 1,
        id: "sidebarApps",
        title: "Vendors",
        href: "Companylist",
        datakey: "t-sellers",
      },
      {
        idx: 2,
        id: "sidebarApps",
        title: "Add Company",
        href: "AddCompany",
        datakey: "t-sellers",
      },
    ],
  },
  {
    idx: 3,
    title: "TradeAccountEnquiry",
    href: "sidebarLayouts",
    datakey: "t-layouts",
    icon: <CategoryRoundedIcon />,
    submenu: [
      {
        idx: 1,
        id: "sidebarLayouts",
        title: "Enquiry List",
        href: "Enquirylist",
        datakey: "t-datatables",
      },
      {
        idx: 2,
        id: "sidebarLayouts",
        title: "Approved List",
        href: "Approvedlist",
        datakey: "t-datatables",
      },
    ],
  },
  {
    idx: 4,
    title: "Products",
    href: "sidebarLockScreen",
    datakey: "t-layouts",
    icon: <CategoryRoundedIcon />,
    submenu: [
      {
        idx: 1,
        id: "sidebarLockScreen",
        title: "Product List",
        href: "Productlist",
        datakey: "t-datatables",
      },
    ],
  },
  {
    idx: 5,
    title: "ProductsEnquiry",
    href: "sidebarAuth",
    datakey: "t-layouts",
    icon: <CategoryRoundedIcon />,
    submenu: [
      {
        idx: 1,
        id: "sidebarAuth",
        title: "Product Enquiry List",
        href: "Productenquirylist",
        datakey: "t-datatables",
      },
    ],
  },
];

export default SidebarData;
