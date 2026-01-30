import React, { useEffect, useMemo } from "react";
import {
  TextField,
  MenuItem,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalForm } from "../../components/ModalForm";
import type { CreateCourseDto } from "../../../features/courses/courses.types";
import { courseSchema } from "../../../features/courses/course.schema";
import { useAppSelector } from "../../../store/hooks";

const defaultValues: CreateCourseDto = {
  name: "",
  description: "",
  categoryIds: [],
  imgUrl: null,
};

interface ModalAddCourseProps {
  open: boolean;
  onClose: () => void;
  initialData?: CreateCourseDto | null;
  loading?: boolean;
  onSubmit: (data: CreateCourseDto) => void | Promise<void>;
}

const CourseFormModal: React.FC<ModalAddCourseProps> = ({
  open,
  onClose,
  initialData,
  loading,
  onSubmit,
}) => {
  const { items: categories } = useAppSelector(
    (state) => state.categories
  );

  const form = useForm<CreateCourseDto>({
    resolver: yupResolver(courseSchema),
    defaultValues,
  });

  const imgFile = form.watch("imgUrl");

  const previewUrl = useMemo(() => {
    if (!imgFile) return null;
    return URL.createObjectURL(imgFile);
  }, [imgFile]);

  return (
    <ModalForm<CreateCourseDto>
      open={open}
      title={initialData ? "Edit Course" : "Add Course"}
      onClose={onClose}
      onSubmit={onSubmit}
      form={form}
      loading={loading}
      defaultValues={defaultValues}
    >
      {/* Name */}
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Course Name"
            fullWidth
            margin="dense"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      {/* Description */}
      <Controller
        name="description"
        control={form.control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Description"
            fullWidth
            margin="dense"
            multiline
            rows={3}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      {/* Image */}
      <Controller
        name="imgUrl"
        control={form.control}
        render={({ field, fieldState }) => (
          <Box mt={2}>
            <Button variant="outlined" component="label">
              Choose Image
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) =>
                  field.onChange(e.target.files?.[0] ?? null)
                }
              />
            </Button>

            {fieldState.error && (
              <Typography color="error" fontSize={12} mt={1}>
                {fieldState.error.message}
              </Typography>
            )}

            {previewUrl && (
              <Box mt={2}>
                <img
                  src={previewUrl}
                  alt="preview"
                  style={{
                    width: "100%",
                    maxHeight: 200,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
              </Box>
            )}
          </Box>
        )}
      />

      {/* Categories */}
      <Controller
        name="categoryIds"
        control={form.control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            select
            fullWidth
            margin="dense"
            label="Categories"
            SelectProps={{ multiple: true }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </ModalForm>
  );
};

export default CourseFormModal;
