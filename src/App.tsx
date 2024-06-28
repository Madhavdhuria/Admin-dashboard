import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const NewProduct = lazy(() => import("./pages/Management/NewProduct"));
const Productmanagement = lazy(() => import("./pages/Management/ProductManagement"));
const TransactionMangement = lazy(() => import("./pages/Management/TransactionMangement"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transactions />} />

          {/* {charts} */}

          {/* {apps} */}

          {/* {Management} */}

          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<Productmanagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionMangement />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
