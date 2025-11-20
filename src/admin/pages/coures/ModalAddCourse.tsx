import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppSelector } from "../../../store/hooks";
import type { Course } from "../../../features/courses/courses.types";

interface ModalAddCourseProps {
  open: boolean;
  handleClose: () => void;
  initialData?: (Course & { categoryIds?: number[] }) | null;
  onSubmit: (data: {
    name: string;
    description: string;
    imgUrl: string;
    categoryIds: number[];
  }) => void;
}

// Yup schema
const schema = yup.object({
  name: yup.string().required("Name is required").min(3, "At least 3 characters"),
  description: yup.string().required("Description is required"),
  imgUrl: yup.string().url("Must be a valid URL").required("Image URL is required"),
  categoryIds: yup.array().of(yup.number()).min(1, "At least one category"),
});

const ModalAddCourse: React.FC<ModalAddCourseProps> = ({
  open,
  handleClose,
  initialData,
  onSubmit,
}) => {
  const { items: categories } = useAppSelector((state) => state.categories);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      imgUrl: "",
      categoryIds: []
    }
  });

  useEffect(() => {
    if (open) {
     reset(
  initialData
    ? {
        name: initialData.name,
        description: initialData.description,
        imgUrl: initialData.imgUrl || "",
        categoryIds: initialData.categoryIds || [],
      }
    : {
        name: "",
        description: "",
        imgUrl: "",
        categoryIds: [],
      }
);

    }
  }, [initialData, open, reset]);

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    reset({ name: "", description: "", imgUrl: "", categoryIds: [] });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{initialData ? "Edit Course" : "Add New Course"}</DialogTitle>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent dividers>
          {/* Title */}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Course Name"
                fullWidth
                autoFocus
                error={!!errors.name}
                helperText={errors.name?.message as string}
              />
            )}
          />

          {/* Description */}
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Description"
                fullWidth
                multiline
                rows={3}
                error={!!errors.description}
                helperText={errors.description?.message as string}
              />
            )}
          />

          {/* ImgUrl */}
          <Controller
            name="imgUrl"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Image URL"
                type="text"
                fullWidth
                error={!!errors.imgUrl}
                helperText={errors.imgUrl?.message as string}
              />
            )}
          />

          {/* Categories MultiSelect */}
          <Controller
            name="categoryIds"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Categories"
                select
                fullWidth
                SelectProps={{ multiple: true }}
                error={!!errors.categoryIds}
                helperText={errors.categoryIds?.message as string}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            {initialData ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalAddCourse;
