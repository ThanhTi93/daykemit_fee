import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { CreateCategoryDto } from "../../../features/categories/categories.types";
import { ModalForm } from "../../components/ModalForm"; // chỉnh path cho đúng

const defaultValues: CreateCategoryDto = {
  name: "",
  description: "",
};

interface CategoryFormModalProps {
  open: boolean;
  onClose: () => void;
  initialData?: CreateCategoryDto | null;
  loading?: boolean;
  onSubmit: (data: CreateCategoryDto) => void | Promise<void>;
}

/* ✅ Schema */
const schema = yup.object({
  name: yup.string().required("Name is required").min(3, "At least 3 characters"),
  description: yup.string().required("Description is required"),
});

const CategoryFormModal: React.FC<CategoryFormModalProps> = ({
  open,
  onClose,
  initialData,
  loading,
  onSubmit,
}) => {
  const form = useForm<CreateCategoryDto>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <ModalForm<CreateCategoryDto>
      open={open}
      title={initialData ? "Edit Category" : "Add Category"}
      onClose={onClose}
      onSubmit={onSubmit}
      form={form}
      defaultValues={defaultValues}
      initialData={initialData}
      loading={loading}
    >
      {/* Category Name */}
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Category Name"
            fullWidth
            margin="dense"
            autoFocus
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
            multiline
            rows={3}
            margin="dense"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
    </ModalForm>
  );
};

export default CategoryFormModal;
