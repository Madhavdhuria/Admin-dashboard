import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import logo from "../assets/logo.png";
import data from "../assets/data.json";
import { Barchart, DoughnutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";
import DashBoardTable from "../components/DashBoardTable";
const Dashboard = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data users docs" />
          <FaRegBell />
          <img src={logo} alt="" />
        </div>

        <section className="widgetContainer">
          <WidgetItem
            heading="Revenue"
            percent={40}
            amount={true}
            value={3400}
            color="rgba(0,115,255)"
          />
          <WidgetItem
            heading="Users"
            percent={-14}
            value={400}
            color="rgba(0,198,202)"
          />
          <WidgetItem
            heading="Transactions"
            percent={80}
            value={23000}
            color="rgba(255,196,0)"
          />
          <WidgetItem
            heading="Products"
            percent={30}
            value={1000}
            color="rgba(76,0,255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transactions</h2>
            <Barchart
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventories</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="TransactionContainer">
          <div className="GenderContainer">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          <DashBoardTable data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => {
  console.log(percent);
  const deg = Math.abs(percent / 100) * 360;
  console.log(deg);

  return (
    <article className="widget">
      <div className="WidgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> + {percent}%
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%
          </span>
        )}
      </div>

      <div
        className="widget-circle"
        style={{
          background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
        }}
      >
        <span
          style={{
            color,
          }}
        >
          {percent}%
        </span>
      </div>
    </article>
  );
};
interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="CategoryItem">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
