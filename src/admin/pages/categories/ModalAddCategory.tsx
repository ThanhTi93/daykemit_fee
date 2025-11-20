import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { CreateCategoryDto } from "../../../features/categories/categories.types";

interface ModalAddCategoryProps {
  open: boolean;
  handleClose: () => void;
  initialData?: (CreateCategoryDto & { id?: number }) | null; // cho phép có id khi edit
  onSubmit: (data: CreateCategoryDto) => void;
}

// ✅ Yup schema
const schema = yup.object({
  name: yup.string().required("Name is required").min(3, "At least 3 characters"),
  description: yup.string().required("Description is required"),
});

const ModalAddCategory: React.FC<ModalAddCategoryProps> = ({
  open,
  handleClose,
  initialData,
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateCategoryDto>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", description: "" },
  });

  // ✅ Reset form khi modal mở hoặc dữ liệu thay đổi
useEffect(() => {
  if (open) {
    reset(
      initialData
        ? { name: initialData.name, description: initialData.description } // chỉ reset 2 field
        : { name: "", description: "" }
    );
  }
}, [initialData, open, reset]);

  const handleFormSubmit = (data: CreateCategoryDto) => {
    onSubmit(data);
    reset({ name: "", description: "" }); // reset lại form
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{initialData ? "Edit Category" : "Add New Category"}</DialogTitle>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent dividers>
          {/* Category Name */}
          <Controller<CreateCategoryDto>
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Category Name"
                fullWidth
                autoFocus
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          {/* Description */}
          <Controller<CreateCategoryDto>
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
                helperText={errors.description?.message}
              />
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

export default ModalAddCategory;
