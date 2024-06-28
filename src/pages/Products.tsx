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
  "data:image/png;base64,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";
const img2 =
  "data:image/png;base64,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";
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
