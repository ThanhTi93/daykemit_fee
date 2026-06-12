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
import * as yup from "yup";

import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

// ================== SCHEMA ==================
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(6, "Ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

// ================== TYPE ==================
interface LoginDto {
  email: string;
  password: string;
}

// ================== PROPS ==================
interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  loading?: boolean;
  onSubmit: (data: LoginDto) => void | Promise<void>;
  onSwitchToRegister?: () => void;
  onGoogleLogin?: () => void;
}

// ================== COMPONENT ==================
const LoginDialog: React.FC<LoginDialogProps> = ({
  open,
  onClose,
  loading,
  onSubmit,
  onSwitchToRegister,
  onGoogleLogin,
}) => {
  const { control, handleSubmit, reset } = useForm<LoginDto>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [open, reset]);

  const handleFormSubmit = async (data: LoginDto) => {
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
        Đăng nhập
      </DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
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
              autoFocus
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
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Mật khẩu"
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

        {/* ================= Submit ================= */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit(handleFormSubmit)}
          disabled={loading}
          sx={{
            py: 1.2,
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>

        {/* ================= Divider ================= */}
        <Box sx={{ my: 2 }}>
          <Divider>Hoặc</Divider>
        </Box>

        {/* ================= Google ================= */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FcGoogle size={20} />}
          onClick={onGoogleLogin}
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
          Đăng nhập với Google
        </Button>

        {/* ================= Switch ================= */}
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Chưa có tài khoản?{" "}
            <Box
              component="span"
              onClick={onSwitchToRegister}
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
              Đăng ký
            </Box>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;