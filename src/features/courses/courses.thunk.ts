import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCourses,
  fetchCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "./courses.api";
import type { Course, CreateCourseDto, UpdateCourseDto, DeleteResponse } from "./courses.types";

// GET all
export const getCoursesThunk = createAsyncThunk<Course[]>(
  "courses/fetchAll",
  async () => {
    return await fetchCourses();
  }
);

// GET by id
export const getCourseByIdThunk = createAsyncThunk<Course, number>(
  "courses/fetchById",
  async (id) => {
    return await fetchCourseById(id);
  }
);

// CREATE
export const createCourseThunk = createAsyncThunk<Course, CreateCourseDto>(
  "courses/create",
  async (data) => {
    return await createCourse(data);
  }
);

// UPDATE
export const updateCourseThunk = createAsyncThunk<
  Course,
  { id: number; data: CreateCourseDto }
>("courses/update", async ({ id, data }) => {
  return await updateCourse(id, data);
});

// DELETE
export const deleteCourseThunk = createAsyncThunk<DeleteResponse, number>(
  "courses/delete",
  async (id) => {
    return await deleteCourse(id);
  }
);
