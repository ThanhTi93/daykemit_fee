import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/pages/dashboard/Dashboard";
import CategoryPage from "../admin/pages/categories/CategoryPage";
import CouresPage from "../admin/pages/coures/CouresPage";

export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "categories", element: <CategoryPage /> },
      { path: "courses", element: <CouresPage /> },
    ],
  },
  {
    
  }
]);
