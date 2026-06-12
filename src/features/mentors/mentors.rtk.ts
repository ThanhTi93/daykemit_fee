import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_ENDPOINTS } from "../endpoints";

import type {
  Mentor,
  CreateMentorDto,
  UpdateMentorDto,
  DeleteResponse,
} from "./mentors.types";

const { mentors } = API_ENDPOINTS;

const createMentorFormData = (
  data: CreateMentorDto | UpdateMentorDto
): FormData => {
  const formData = new FormData();

  if (data.description !== undefined) {
    formData.append("description", data.description);
  }

  if (data.experienceYears !== undefined) {
    formData.append("experienceYears", String(data.experienceYears));
  }

  if (data.socialLinks !== undefined) {
    formData.append("socialLinks", data.socialLinks);
  }

  if (data.accountId !== undefined) {
    formData.append("accountId", String(data.accountId));
  }

  if (data.categoryIds !== undefined) {
    formData.append("categoryIds", data.categoryIds.join(","));
  }

  if (data.cv) {
    formData.append("cv", data.cv);
  }

  return formData;
};

export const mentorsApi = createApi({
  reducerPath: "mentorsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
  }),

  tagTypes: ["Mentors"],

  endpoints: (builder) => ({
    // GET ALL
    getMentors: builder.query<Mentor[], void>({
      query: () => mentors,
      providesTags: ["Mentors"],
    }),

    // GET BY ID
    getMentorById: builder.query<Mentor, number>({
      query: (id) => `${mentors}/${id}`,
      providesTags: (_result, _error, id) => [
        { type: "Mentors", id },
      ],
    }),

    // CREATE
    createMentor: builder.mutation<Mentor, CreateMentorDto>({
      query: (data) => ({
        url: mentors,
        method: "POST",
        body: createMentorFormData(data),
      }),
      invalidatesTags: ["Mentors"],
    }),

    // UPDATE
    updateMentor: builder.mutation<
      Mentor,
      {
        id: number;
        data: UpdateMentorDto;
      }
    >({
      query: ({ id, data }) => ({
        url: `${mentors}/${id}`,
        method: "PATCH",
        body: createMentorFormData(data),
      }),
      invalidatesTags: (_result, _error, { id }) => [
        "Mentors",
        { type: "Mentors", id },
      ],
    }),

    // DELETE
    deleteMentor: builder.mutation<DeleteResponse, number>({
      query: (id) => ({
        url: `${mentors}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Mentors"],
    }),
  }),
});

export const {
  useGetMentorsQuery,
  useGetMentorByIdQuery,
  useCreateMentorMutation,
  useUpdateMentorMutation,
  useDeleteMentorMutation,
} = mentorsApi;