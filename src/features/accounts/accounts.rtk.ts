import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { API_ENDPOINTS } from "../endpoints";

import type {
  Account,
  CreateAccountDto,
  UpdateAccountDto,
  DeleteResponse,
} from "./accounts.types";

const { accounts } = API_ENDPOINTS;

export const accountsApi = createApi({
  reducerPath: "accountsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
  }),

  tagTypes: ["Accounts"],

  endpoints: (builder) => ({
    // =====================
    // GET ALL
    // =====================
    getAccounts: builder.query<
      Account[],
      void
    >({
      query: () => accounts,

      providesTags: ["Accounts"],
    }),

    // =====================
    // GET BY ID
    // =====================
    getAccountById: builder.query<
      Account,
      number
    >({
      query: (id) =>
        `${accounts}/${id}`,
    }),

    // =====================
    // CREATE
    // =====================
    createAccount:
      builder.mutation<
        Account,
        CreateAccountDto
      >({
        query: (body) => ({
          url: accounts,
          method: "POST",
          body,
        }),

        invalidatesTags: ["Accounts"],
      }),

    // =====================
    // UPDATE
    // =====================
    updateAccount:
      builder.mutation<
        Account,
        {
          id: number;
          data: UpdateAccountDto;
        }
      >({
        query: ({ id, data }) => ({
          url: `${accounts}/${id}`,
          method: "PUT",
          body: data,
        }),

        invalidatesTags: ["Accounts"],
      }),

    // =====================
    // DELETE
    // =====================
    deleteAccount:
      builder.mutation<
        DeleteResponse,
        number
      >({
        query: (id) => ({
          url: `${accounts}/${id}`,
          method: "DELETE",
        }),

        invalidatesTags: ["Accounts"],
      }),
  }),
});

export const {
  useGetAccountsQuery,
  useGetAccountByIdQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} = accountsApi;
