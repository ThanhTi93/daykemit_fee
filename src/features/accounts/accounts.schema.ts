import * as yup from "yup";

import type { CreateAccountDto } from "./accounts.types";

export const registerSchema: yup.ObjectSchema<CreateAccountDto> =
  yup.object({
    username: yup
      .string()
      .required("Username is required")
      .min(
        3,
        "At least 3 characters"
      ),

    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email"),

    password: yup
      .string()
      .required("Password is required")
      .min(
        8,
        "Minimum 8 characters"
      ),
  });