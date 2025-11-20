import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaRocket, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Khoá học", href: "#courses" },
    { label: "Ưu điểm", href: "#features" },
    { label: "Học viên", href: "#testimonials" },
    { label: "Học phí", href: "#pricing" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <FaRocket size={24} />
            <Typography variant="h6" fontWeight="bold">
              DaykemIT
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item.href} href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="#contact"
              endIcon={<FaChevronRight />}
              sx={{ textTransform: "none" }}
            >
              Tư vấn miễn phí
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box width={250} role="presentation">
          <IconButton sx={{ float: "right", m: 1 }} onClick={() => setOpen(false)}>
            <FaTimes />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.href}
                component="a"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem>
              <Button
                variant="contained"
                fullWidth
                href="#contact"
                onClick={() => setOpen(false)}
                sx={{ mt: 2 }}
              >
                Tư vấn miễn phí
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
