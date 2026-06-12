import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  Box,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import { registerSchema } from "../../../features/accounts/accounts.schema";
import type { CreateAccountDto } from "../../../features/accounts/accounts.types";

import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

// ================== DEFAULT ==================
const defaultValues: CreateAccountDto = {
  username: "",
  email: "",
  password: "",
};

// ================== PROPS ==================
interface RegisterDialogProps {
  open: boolean;
  onClose: () => void;
  loading?: boolean;
  initialData?: CreateAccountDto | null;
  onSubmit: (data: CreateAccountDto) => void | Promise<void>;
  onSwitchToLogin?: () => void;
  onGoogleRegister?: () => void;
}

// ================== COMPONENT ==================
const RegisterDialog: React.FC<RegisterDialogProps> = ({
  open,
  onClose,
  loading,
  initialData,
  onSubmit,
  onSwitchToLogin,
  onGoogleRegister,
}) => {
  const { control, handleSubmit, reset } = useForm<CreateAccountDto>({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });

  useEffect(() => {
    if (open) {
      reset(initialData || defaultValues);
    }
  }, [open, initialData, reset]);

  const handleFormSubmit = async (data: CreateAccountDto) => {
    await onSubmit(data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      {/* ================= Title ================= */}
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 600,
          pb: 1,
        }}
      >
        Đăng ký
      </DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
        {/* ================= Username ================= */}
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              margin="normal"
              autoFocus
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ mb: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiUser size={18} />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        {/* ================= Email ================= */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ mb: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiMail size={18} />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        {/* ================= Password ================= */}
        {!initialData && (
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiLock size={18} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        )}

        {/* ================= Submit ================= */}
        <Button
          variant="contained"
          onClick={handleSubmit(handleFormSubmit)}
          disabled={loading}
          fullWidth
          sx={{
            py: 1.2,
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          {loading ? "Đang xử lý..." : "Đăng ký"}
        </Button>

        {/* ================= Divider ================= */}
        {!initialData && (
          <Box sx={{ my: 2 }}>
            <Divider>Hoặc</Divider>
          </Box>
        )}

        {/* ================= Google ================= */}
        {!initialData && (
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FcGoogle size={20} />}
            onClick={onGoogleRegister}
            disabled={loading}
            sx={{
              textTransform: "none",
              py: 1.2,
              borderRadius: 2,
              fontWeight: 500,
              transition: "0.2s",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Đăng ký với Google
          </Button>
        )}

        {/* ================= Switch ================= */}
        {!initialData && (
          <Box textAlign="center" mt={2}>
            <Typography variant="body2">
              Bạn đã có tài khoản?{" "}
              <Box
                component="span"
                onClick={onSwitchToLogin}
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": {
                    textDecoration: "underline",
                    opacity: 0.8,
                  },
                }}
              >
                Đăng nhập
              </Box>
            </Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;