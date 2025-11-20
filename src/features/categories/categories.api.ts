import { axiosClient } from "../../utils/axiosClient";
import { API_ENDPOINTS } from "../endpoints";
import type { Category, CreateCategoryDto, DeleteResponse, UpdateCategoryDto } from "./categories.types";
const { categories } = API_ENDPOINTS;

// Lấy toàn bộ categories
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosClient.get<Category[]>(categories);
  return response.data;
};

// Lấy category theo id
export const fetchCategoryById = async (id: number): Promise<Category> => {
  const response = await axiosClient.get<Category>(`${categories}/${id}`);
  return response.data;
};

// Tạo category mới
export const createCategory = async (
  data: CreateCategoryDto
): Promise<Category> => {
  const response = await axiosClient.post<Category>(categories, data);
  return response.data;
};

// Cập nhật category
export const updateCategory = async (
  id: number,
  data: UpdateCategoryDto
): Promise<Category> => {
  const response = await axiosClient.put<Category>(`${categories}/${id}`, data);
  return response.data;
};

// Xoá category
export const deleteCategory = async (id: number): Promise<DeleteResponse> => {
  const response = await axiosClient.delete<DeleteResponse>(`${categories}/${id}`);
  return response.data;
};
