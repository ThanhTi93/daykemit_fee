import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect, type ReactNode } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

interface ModalFormProps<T extends FieldValues> {
  open: boolean;
  title: string;
  onClose: () => void;
  onSubmit: (data: T) => void | Promise<void>;
  form: UseFormReturn<T>;
  defaultValues: T;
  initialData?: T | null;
  loading?: boolean;
  children: ReactNode;
}

export function ModalForm<T extends FieldValues>({
  open,
  title,
  onClose,
  onSubmit,
  form,
  defaultValues,
  initialData,
  loading = false,
  children,
}: ModalFormProps<T>) {
  const { handleSubmit, reset, formState } = form;

  useEffect(() => {
    if (!open) return;
    reset(initialData ?? defaultValues);
  }, [open, initialData, reset, defaultValues]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading || formState.isSubmitting}
            startIcon={
              loading || formState.isSubmitting ? (
                <CircularProgress size={18} />
              ) : null
            }
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
