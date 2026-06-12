import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronRight,
  FaUser,
  FaSignOutAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";

import RegisterDialog from "../pages/auth/RegisterDialog";
import LoginDialog from "../pages/auth/LoginDialog";

import { useCreateAccountMutation } from "../../features/accounts/accounts.rtk";
import type { CreateAccountDto } from "../../features/accounts/accounts.types";
import type { AppDispatch } from "../../store/store";
import { loginUser, logoutUser } from "../../features/auth/authThunk";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";

import LOGO from "../../assets/logo.png";

import CreateMentorDialog from "../pages/mentor/CreateMentorDialog";

function NavBar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [openCreate, setOpenCreate] = useState(false);
  const { user , token } = useAppSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl);

  const [createAccount, { isLoading }] = useCreateAccountMutation();
  const dispatch = useDispatch<AppDispatch>();

  const navItems = [
    { label: "Khoá học", href: "#courses" },
    { label: "Ưu điểm", href: "#features" },
    { label: "Học viên", href: "#testimonials" },
    { label: "Học phí", href: "#pricing" },
    { label: "Liên hệ", href: "#contact" },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleRegister = async (data: CreateAccountDto) => {
    try {
      await createAccount(data).unwrap();
      setIsRegisterOpen(false);
      console.log("Register success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (data: any) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      setIsLoginOpen(false);
      setOpenMobileMenu(false);
      console.log("Login success");
    } catch (err) {
      console.log("Login fail", err);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    handleCloseUserMenu();
    setOpenMobileMenu(false);
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setOpenMobileMenu(false);
  };

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
    setOpenMobileMenu(false);
  };

  const handleClickNavItem = () => {
    setOpenMobileMenu(false);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-white/80 shadow-sm shadow-blue-100/50 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo chỉ viết 1 lần */}
          <a href="/" className="group flex items-center gap-3">
            <img
              src={LOGO}
              alt="DaykemIT"
              className="h-10 w-40"
            />
          </a>

          {/* Button mobile */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-md md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <span className="transition duration-300">
              {openMobileMenu ? <FaTimes /> : <FaBars />}
            </span>
          </button>

          {/* Menu dùng chung desktop + mobile */}
          <div
            className={`
            absolute left-4 right-4 top-24 rounded-3xl border border-blue-100 bg-white/95 p-5 shadow-2xl shadow-blue-100/70 backdrop-blur-xl
            transition-all duration-300 ease-out
            md:static md:flex md:w-auto md:items-center md:gap-8 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none
            ${openMobileMenu
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
              }
          `}
          >
            <nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClickNavItem}
                  className="
                  group relative rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition duration-300
                  hover:bg-blue-50 hover:text-blue-600
                  md:rounded-xl md:px-3 md:py-2
                "
                >
                  {item.label}

                  <span
                    className="
                    absolute bottom-1 left-1/2 hidden h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600
                    transition-all duration-300 group-hover:w-8 md:block
                  "
                  />
                </a>
              ))}
            </nav>

            <div className="mt-5 flex flex-col gap-3 border-t border-blue-50 pt-5 md:mt-0 md:flex-row md:items-center md:border-0 md:pt-0">
              {token ? (
                <>
                  <button
                    type="button"
                    onClick={handleOpenUserMenu}
                    className="
                    group flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-left
                    transition duration-300 hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-md hover:shadow-blue-100
                    md:border-0 md:bg-transparent md:px-2 md:py-1 md:hover:bg-blue-50
                  "
                  >
                    <Avatar
                      src={user?.avatar || ""}
                      sx={{
                        width: 42,
                        height: 42,
                        border: "2px solid #bfdbfe",
                        boxShadow: "0 8px 20px rgba(37, 99, 235, 0.18)",
                      }}
                    >
                      {user?.name?.charAt(0) || "U"}
                    </Avatar>

                    <div className="md:hidden">
                      <p className="text-sm font-extrabold text-slate-950">
                        {user?.name || "User"}
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Tài khoản học viên
                      </p>
                    </div>
                  </button>

                  <Menu
                    anchorEl={anchorEl}
                    open={openUserMenu}
                    onClose={handleCloseUserMenu}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    PaperProps={{
                      sx: {
                        mt: 1.5,
                        borderRadius: "18px",
                        minWidth: 220,
                        border: "1px solid #e0f2fe",
                        boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
                        overflow: "hidden",
                      },
                    }}
                  >
                    <MenuItem disabled>
                      <Box>
                        <Typography fontWeight="bold" color="text.primary">
                          {user?.name || "User"}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          DaykemIT Account
                        </Typography>
                      </Box>
                    </MenuItem>

                    <Divider />
                    <MenuItem onClick={() => setOpenCreate(true)}>
                      <Button
                        variant="contained"
                        startIcon={<FaChalkboardTeacher />}
                        
                        sx={{
                          textTransform: "none",
                          fontWeight: 800,
                          borderRadius: "14px",
                          px: 2.8,
                          py: 1.2,
                          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                          color: "#fff",
                          boxShadow: "0 14px 30px rgba(245, 158, 11, 0.28)",
                          transition: "0.3s",
                          "&:hover": {
                            background: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 18px 40px rgba(245, 158, 11, 0.36)",
                          },
                        }}
                      >
                        Đăng ký làm Mentor
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <ListItemIcon>
                        <FaUser size={16} className="text-blue-600" />
                      </ListItemIcon>
                      Thông tin cá nhân
                    </MenuItem>

                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <FaSignOutAlt size={16} className="text-red-500" />
                      </ListItemIcon>
                      Đăng xuất
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    onClick={handleOpenLogin}
                    sx={{
                      textTransform: "none",
                      fontWeight: 800,
                      borderRadius: "14px",
                      px: 2.5,
                      py: 1.2,
                      color: "#2563eb",
                      borderColor: "#bfdbfe",
                      backgroundColor: "rgba(239, 246, 255, 0.6)",
                      transition: "0.3s",
                      "&:hover": {
                        borderColor: "#2563eb",
                        backgroundColor: "#eff6ff",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(37, 99, 235, 0.16)",
                      },
                    }}
                  >
                    Đăng nhập
                  </Button>

                  <Button
                    variant="contained"
                    endIcon={<FaChevronRight />}
                    onClick={handleOpenRegister}
                    sx={{
                      textTransform: "none",
                      fontWeight: 800,
                      borderRadius: "14px",
                      px: 2.8,
                      py: 1.2,
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                      boxShadow: "0 14px 30px rgba(37, 99, 235, 0.28)",
                      transition: "0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 18px 40px rgba(37, 99, 235, 0.36)",
                      },
                    }}
                  >
                    Đăng ký
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <RegisterDialog
        open={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSubmit={handleRegister}
        loading={isLoading}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
        onGoogleRegister={() => console.log("Google Register")}
      />

      <LoginDialog
        open={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSubmit={handleLogin}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        onGoogleLogin={() => console.log("Google Login")}
      />
      <CreateMentorDialog 
        open={openCreate}
        onClose={() => setOpenCreate(false)}
      />
    </>
  );
}

export default NavBar;