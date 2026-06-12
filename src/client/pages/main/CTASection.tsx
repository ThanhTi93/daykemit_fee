import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export default function CTASection() {
  return (
    <Box
      sx={{
        width: "100%",
        background:
          "linear-gradient(90deg, #0f7df4 0%, #2563eb 45%, #4f2bd9 100%)",
        py: 3,
        px: { xs: 2, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight={800}
            color="white"
            sx={{ mb: 0.5 }}
          >
            Sẵn sàng bắt đầu hành trình trở thành Developer?
          </Typography>

          <Typography color="white" sx={{ opacity: 0.95 }}>
            Đăng ký tư vấn miễn phí ngay hôm nay. Chúng tôi sẽ liên hệ với bạn
            trong 24h!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: 420 },
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 1.5,
            overflow: "hidden",
            bgcolor: "white",
          }}
        >
          <TextField
            placeholder="Nhập email của bạn"
            size="small"
            fullWidth
            sx={{
              "& fieldset": { border: "none" },
            }}
          />

          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 3,
              whiteSpace: "nowrap",
              fontWeight: 700,
              bgcolor: "#1d4ed8",
            }}
          >
            Đăng ký tư vấn
          </Button>
        </Box>
      </Box>
    </Box>
  );
}