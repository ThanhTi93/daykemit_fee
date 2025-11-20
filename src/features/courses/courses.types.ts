export interface Course {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  categoryIds : number[];
  created_at: string;
  updated_at: string;
}

export interface CreateCourseDto {
  name: string;
  description: string;
  imgUrl: string;
  categoryIds : number[];
}

export interface UpdateCourseDto {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  categoryIds : number[];
}

export interface DeleteResponse {
  success: boolean;
  message: string;
}
