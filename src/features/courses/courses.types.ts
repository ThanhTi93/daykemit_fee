// Entity trả về từ backend
export interface Course {
  id: number;
  name: string;
  description: string;
  categoryIds: number[];
  created_at: string;
  updated_at: string;
}

// Form dùng cho react-hook-form
export interface CreateCourseDto {
  name: string;
  description: string;
  categoryIds: number[];
  imgUrl?: File | null;
}


// Payload update
export interface UpdateCoursePayload {
  id: number;
  data: FormData;
}

export interface DeleteResponse {
  success: boolean;
  message: string;
}
