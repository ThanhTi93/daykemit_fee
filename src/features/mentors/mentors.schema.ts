import * as yup from "yup";

export const mentorSchema = yup.object({
  description: yup
    .string()
    .required("Vui lòng nhập mô tả")
    .min(10, "Mô tả ít nhất 10 ký tự"),

  experienceYears: yup
    .number()
    .typeError("Số năm kinh nghiệm phải là số")
    .required("Vui lòng nhập số năm kinh nghiệm")
    .min(0, "Số năm kinh nghiệm không được âm"),

  socialLinks: yup
    .string()
    .default("")
    .defined(),

  accountId: yup
    .number()
    .typeError("Vui lòng chọn tài khoản")
    .required("Vui lòng chọn tài khoản"),

  categoryIds: yup
    .array()
    .of(yup.number().required())
    .min(1, "Vui lòng chọn ít nhất 1 danh mục")
    .required("Vui lòng chọn danh mục"),

cv: yup
  .mixed<File>()
  .required("Vui lòng chọn file CV"),
});

export type MentorFormValues = yup.InferType<typeof mentorSchema>;