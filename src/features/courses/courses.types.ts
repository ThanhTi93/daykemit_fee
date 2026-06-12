import type { Category } from "../categories/categories.types";

// Entity trả về từ backend
export interface Course {
  id: number;
  name: string;
  description: string;
  images: Images [];
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}

export interface Images {
  id: number,
  imgUrl: string,
  publicId: string,
  createdAt: string
            
}
// Form dùng cho react-hook-form
export interface CreateCourseDto {
  name: string;
  description: string;
  categoryIds: number[];
  images: (File | string)[];
}

export interface DeleteResponse {
  success: boolean;
  message: string;
}
