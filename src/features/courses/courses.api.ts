import { axiosClient } from "../../utils/axiosClient";
import { API_ENDPOINTS } from "../endpoints";
import type { Course, CreateCourseDto, UpdateCourseDto, DeleteResponse } from "./courses.types";

const { courses } = API_ENDPOINTS;

// Lấy toàn bộ courses
export const fetchCourses = async (): Promise<Course[]> => {
  const response = await axiosClient.get<Course[]>(courses);
  return response.data;
};

// Lấy course theo id
export const fetchCourseById = async (id: number): Promise<Course> => {
  const response = await axiosClient.get<Course>(`${courses}/${id}`);
  return response.data;
};

// Tạo course mới
export const createCourse = async (data: CreateCourseDto): Promise<Course> => {
  const response = await axiosClient.post<Course>(courses, data);
  return response.data;
};

// Cập nhật course
export const updateCourse = async (
  id: number,
  data: CreateCourseDto
): Promise<Course> => {
  const response = await axiosClient.put<Course>(`${courses}/${id}`, data);
  return response.data;
};

// Xoá course
export const deleteCourse = async (id: number): Promise<DeleteResponse> => {
  const response = await axiosClient.delete<DeleteResponse>(`${courses}/${id}`);
  return response.data;
};
