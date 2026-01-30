import * as yup from "yup";
import type { CreateCourseDto } from "./courses.types";

export const courseSchema: yup.ObjectSchema<CreateCourseDto> =
  yup.object({
    name: yup.string().required("Course name is required"),
    description: yup.string().required("Description is required"),
    categoryIds: yup
      .array()
      .of(yup.number().required())
      .min(1, "Select at least one category")
      .required(),
    imgUrl: yup
      .mixed<File>()
      .nullable()
      .required("Image is required"),
  });
