import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: DataType[] = [
  {
    photo: <img src={img} alt="" />,
    action: <Link to="/admin/product/adsfdgsgsdsdcsvsfd">manage</Link>,
    name: "puma",
    price: 600,
    stock: 5,
  },
  {
    photo: <img src={img2} alt="" />,
    action: <Link to="/admin/product/adsfdgsgvsfd">manage</Link>,
    name: "Adidas",
    price: 800,
    stock: 4,
  },
  {
    photo: <img src={img} alt="" />,
    action: <Link to="/admin/product/adsfdgsgsdsdcsvsfd">manage</Link>,
    name: "puma",
    price: 600,
    stock: 5,
  },
  {
    photo: <img src={img2} alt="" />,
    action: <Link to="/admin/product/adsfdgsgvsfd">manage</Link>,
    name: "Adidas",
    price: 800,
    stock: 4,
  },
  {
    photo: <img src={img} alt="" />,
    action: <Link to="/admin/product/adsfdgsgsdsdcsvsfd">manage</Link>,
    name: "puma",
    price: 600,
    stock: 5,
  },
  {
    photo: <img src={img2} alt="" />,
    action: <Link to="/admin/product/adsfdgsgvsfd">manage</Link>,
    name: "Adidas",
    price: 800,
    stock: 4,
  },
  {
    photo: <img src={img} alt="" />,
    action: <Link to="/admin/product/adsfdgsgsdsdcsvsfd">manage</Link>,
    name: "puma",
    price: 600,
    stock: 5,
  },
  {
    photo: <img src={img2} alt="" />,
    action: <Link to="/admin/product/adsfdgsgvsfd">manage</Link>,
    name: "Adidas",
    price: 800,
    stock: 4,
  },
  {
    photo: <img src={img} alt="" />,
    action: <Link to="/admin/product/adsfdgsgsdsdcsvsfd">manage</Link>,
    name: "puma",
    price: 600,
    stock: 5,
  },
  {
    photo: <img src={img2} alt="" />,
    action: <Link to="/admin/product/adsfdgsgvsfd">manage</Link>,
    name: "Adidas",
    price: 800,
    stock: 4,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Products",true),
    []
  );

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-aproduct-button">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
