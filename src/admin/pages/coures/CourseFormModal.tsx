import React, { useEffect, useMemo } from "react";
import {
  TextField,
  MenuItem,
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { FaTrash } from "react-icons/fa";
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
  images: [],
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

  const imgFiles = form.watch("images");

  const previewUrls = useMemo(() => {
    if (!imgFiles || imgFiles.length === 0) return [];

    return imgFiles.map((file) => {
      // nếu là ảnh cũ (string url)
      if (typeof file === "string") {
        return file;
      }

      // nếu là file mới upload
      return URL.createObjectURL(file);
    });
  }, [imgFiles]);

  useEffect(() => {
    if (initialData) {
      form.reset(initialData);
    } else {
      form.reset(defaultValues);
    }
  }, [initialData, form]);

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

      {/* Multiple Images */}
      <Controller
        name="images"
        control={form.control}
        render={({ field, fieldState }) => (
          <Box mt={2}>
            <Button variant="outlined" component="label">
              Choose Images
              <input
                hidden
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);

                  field.onChange([
                    ...(field.value || []),
                    ...files,
                  ]);
                }}      
              />
            </Button>

            {fieldState.error && (
              <Typography color="error" fontSize={12} mt={1}>
                {fieldState.error.message}
              </Typography>
            )}

            {/* Preview Images */}
            {previewUrls.length > 0 && (
              <Stack
                direction="row"
                spacing={2}
                mt={2}
                flexWrap="wrap"
              >
                {previewUrls.map((url, index) => (
                  <Box
                    key={index}
                    position="relative"
                    width={120}
                    height={120}
                  >
                    <img
                      src={url}
                      alt={`preview-${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 8,
                        border: "1px solid #ddd",
                      }}
                    />

                    {/* Remove */}
                    <IconButton
                      size="small"
                      onClick={() => {
                        const newFiles = [...imgFiles];
                        newFiles.splice(index, 1);

                        field.onChange(newFiles);
                      }}
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        backgroundColor: "#fff",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      <FaTrash
                        size={12}
                        color="red"
                      />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
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