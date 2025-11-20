// src/components/AppInitializer.tsx
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getCategoriesThunk } from "./features/categories/categories.thunk";
import { getCoursesThunk } from "./features/courses/courses.thunk";

const AppInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // preload các dữ liệu quan trọng ngay khi app khởi chạy
    dispatch(getCategoriesThunk());
    dispatch(getCoursesThunk())
  }, [dispatch]);

  return null; // component chỉ để khởi tạo, không render gì
};

export default AppInitializer;
