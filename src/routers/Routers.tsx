import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/pages/dashboard/Dashboard";
import CategoryPage from "../admin/pages/categories/CategoryPage";
import CouresPage from "../admin/pages/coures/CouresPage";
import ClientLayout from "../client/ClientLayout";
import Home from "../client/pages/main/Home";
import AccountPage from "../admin/pages/accounts/AccountPage";

export const router = createBrowserRouter([
  
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "categories", element: <CategoryPage /> },
      { path: "courses", element: <CouresPage /> },
      { path: "accounts", element: <AccountPage /> },
    ],
  },
  {
    path: "/",
    element: <ClientLayout />,
     children: [
      { index: true, element: <Home />},
    ],
  }
]);
