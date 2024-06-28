import { Link, Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBagFill,RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import { FaChartBar,FaChartPie,FaChartLine,FaStopwatch,FaGamepad } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
  return <aside>
    <DivOne location={location}/>
    <DivTwo location={location}/>
    <DivThree location={location}/>
  </aside>;
};

const DivOne = ({ location }: { location: Location }) => {
  return (
    <div>
      <h2>Logo</h2>
      <h5>Dashboard</h5>
      <ul>
        <Li
          url="/admin/dashboard"
          text="dashboard"
          Icon={RiDashboardFill}
          location={location}
        />
        <Li
          url="/admin/product"
          text="products"
          Icon={RiShoppingBagFill}
          location={location}
        />
        <Li
          url="/admin/customer"
          text="Customers"
          Icon={IoIosPeople}
          location={location}
        />
        <Li
          url="/admin/transaction"
          text="Transaction"
          Icon={AiFillFileText}
          location={location}
        />
      </ul>
    </div>
  );
};

const DivTwo = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        <Li
          url="/admin/chart/bar"
          text="Bar"
          Icon={FaChartBar}
          location={location}
        />
        <Li
          url="/admin/chart/pie"
          text="Pie"
          Icon={FaChartPie}
          location={location}
        />
        <Li
          url="/admin/chart/line"
          text="Line"
          Icon={FaChartLine}
          location={location}
        />
      </ul>
    </div>
  );
};
const DivThree = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Apps</h5>
      <ul>
        <Li
          url="/admin/app/stopwatch"
          text="stopwatch"
          Icon={FaStopwatch}
          location={location}
        />
        <Li
          url="/admin/app/coupon"
          text="coupon"
          Icon={RiCoupon3Fill}
          location={location}
        />
        <Li
          url="/admin/app/toss"
          text="toss"
          Icon={FaGamepad}
          location={location}
        />
      </ul>
    </div>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgb(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
