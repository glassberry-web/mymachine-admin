import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import {MdOutlineArticle, MdProductionQuantityLimits, MdDashboard, MdOutlineSpaceDashboard} from "react-icons/md"
import  {TfiLayoutSlider, TfiLayoutSliderAlt} from "react-icons/tfi"
import {GiTrade, GiVendingMachine} from "react-icons/gi"
import {ImOffice} from "react-icons/im"


const SidebarData = [
  {
    idx: 1,
    title: "Dashboard",
    datakey: "t-dashboards",
    href: "sidebarDashboards",
    icon: <MdDashboard  fontSize='2rem'/>,
  },
  {
    idx: 2,
    title: "Companies",
    href: "sidebarApps",
    datakey: "t-apps",
    icon: <ImOffice fontSize='2rem' />,
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
    title: "Trade Account Enquiry",
    href: "sidebarLayouts",
    datakey: "t-layouts",
    icon: <GiTrade fontSize='2rem' />,
    submenu: [
      {
        idx: 1,
        id: "sidebarLayouts",
        title: "Enquiry List",
        href: "Enquirylist",
        datakey: "t-datatables",
      },
      // {
      //   idx: 2,
      //   id: "sidebarLayouts",
      //   title: "Approved List",
      //   href: "Approvedlist",
      //   datakey: "t-datatables",
      // },
    ],
  },
  {
    idx: 4,
    title: "Products",
    href: "sidebarLockScreen",
    datakey: "t-layouts",
    icon: <GiVendingMachine fontSize='2rem'/>,
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
    title: "Products Enquiry",
    href: "sidebarAuth",
    datakey: "t-layouts",
    icon: <MdProductionQuantityLimits fontSize='2rem' />,
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
  {
    idx: 6,
    title: "Blogs",
    href: "sidebarui",
    datakey: "t-app",
    icon: <MdOutlineArticle fontSize='2rem' />,
    submenu: [     
      {
        idx: 1,
        id: "sidebarui",
        title: "Blog List",
        href: "blog-list",
        datakey: "t-seller",
      },    
      
    ],
  },
  {
    idx: 7,    
    title: "Applications",
    href: "add-application",
    datakey: "t-appli",
    icon: <MdOutlineSpaceDashboard fontSize='2rem' />,
    submenu: [
      {
        idx: 1,
        id: "sidebarappli",
        title: "Application List",
        href: "application-list",
        datakey: "t-slider",
      },
      {
        idx: 2,
        id: "sidebarappli",
        title: " Add Application",
        href: "add-application",
        datakey: "t-slider",
      },
    ]
  },
  {
    idx: 8,    
    title: "Slider",
    href: "sidebarslider",
    datakey: "t-sliderr",
    icon: <TfiLayoutSliderAlt fontSize='2rem' />,
    submenu: [
      {
        idx: 1,
        id: "sidebarslider",
        title: "Slider List",
        href: "slider-list",
        datakey: "t-slider",
      },
    ]
  },
];

export default SidebarData;
