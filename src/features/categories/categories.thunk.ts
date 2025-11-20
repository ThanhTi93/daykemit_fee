import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./categories.api";
import type { Category, CreateCategoryDto, UpdateCategoryDto, DeleteResponse } from "./categories.types";

// GET all
export const getCategoriesThunk = createAsyncThunk<Category[]>(
  "categories/fetchAll",
  async () => {
    return await fetchCategories();
  }
);

// GET by id
export const getCategoryByIdThunk = createAsyncThunk<Category, number>(
  "categories/fetchById",
  async (id) => {
    return await fetchCategoryById(id);
  }
);

// CREATE
export const createCategoryThunk = createAsyncThunk<Category, CreateCategoryDto>(
  "categories/create",
  async (data) => {
    return await createCategory(data);
  }
);

// UPDATE
export const updateCategoryThunk = createAsyncThunk<
  Category,
  { id: number; data: UpdateCategoryDto }
>("categories/update", async ({ id, data }) => {
  return await updateCategory(id, data);
});

// DELETE
export const deleteCategoryThunk = createAsyncThunk<
  DeleteResponse,
  number
>("categories/delete", async (id) => {
  return await deleteCategory(id);
});
