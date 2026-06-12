export interface Mentor {
  id: number;
  description: string;
  experienceYears: number;
  socialLinks?: string;
  cv?: string;

  accountId: number;
  categoryIds: number[];

  createdAt?: string;
  updatedAt?: string;
}

export interface CreateMentorDto {
  description: string;
  experienceYears: number;
  socialLinks?: string;
  accountId: number;
  categoryIds: number[];
  cv?: File | null;
}

export interface UpdateMentorDto {
  description?: string;
  experienceYears?: number;
  socialLinks?: string;
  accountId?: number;
  categoryIds?: number[];
  cv?: File | null;
}

export interface DeleteResponse {
  message: string;
}