import React from "react";
import { motion } from "framer-motion";
import { Button, Card, CardContent, CardHeader, Chip } from "@mui/material";
import { FaChevronRight, FaStar, FaAward, FaBookOpen, FaUsers } from "react-icons/fa";

function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #EEF2FF, white, white)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "7rem 1.5rem 5rem",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "center" }}>
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Chip
              label="Trung tâm dạy lập trình thực chiến"
              color="primary"
              sx={{ mb: 2 }}
            />
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#0f172a", lineHeight: 1.2 }}>
              DaykemIT — Học để làm{" "}
              <span style={{ background: "linear-gradient(to right, #4F46E5, #9333EA)", WebkitBackgroundClip: "text", color: "transparent" }}>
                Developer
              </span>
            </h1>
            <p style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#475569", maxWidth: "36rem" }}>
              Lộ trình cá nhân hoá, mentor 1–1, dự án thực chiến và hỗ trợ tìm việc.
              Xây dựng sự nghiệp công nghệ của bạn từ hôm nay.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                href="#contact"
                endIcon={<FaChevronRight />}
              >
                Đăng ký tư vấn
              </Button>
              <Button
                variant="outlined"
                href="#courses"
              >
                Xem khoá học
              </Button>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", fontSize: "0.875rem", color: "#64748b" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaStar style={{ marginRight: "0.25rem" }} /> 4.9/5 từ 1,200+ học viên
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaAward style={{ marginRight: "0.25rem" }} /> Cam kết đầu ra
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-1rem",
                  background: "linear-gradient(to right, #C7D2FE, #E9D5FF)",
                  filter: "blur(40px)",
                  opacity: 0.6,
                  borderRadius: "1.5rem",
                }}
              />
              <div style={{ position: "relative", borderRadius: "1.5rem", border: "1px solid #E2E8F0", background: "white", padding: "1.5rem", boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <Card sx={{ gridColumn: "1 / span 2" }}>
                    <CardHeader title="Full-Stack Roadmap" sx={{ pb: 0 }} />
                    <CardContent sx={{ fontSize: "0.875rem", color: "#475569" }}>
                      HTML/CSS → JS → Node.js → DB → React → DevOps
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader
                      title={
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaBookOpen style={{ marginRight: "0.5rem" }} /> 120+ giờ
                        </div>
                      }
                      sx={{ pb: 0 }}
                    />
                    <CardContent sx={{ fontSize: "0.875rem", color: "#475569" }}>
                      Bài giảng chọn lọc
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader
                      title={
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaUsers style={{ marginRight: "0.5rem" }} /> 1–1 Mentoring
                        </div>
                      }
                      sx={{ pb: 0 }}
                    />
                    <CardContent sx={{ fontSize: "0.875rem", color: "#475569" }}>
                      Theo sát tiến độ
                    </CardContent>
                  </Card>

                  <Card sx={{ gridColumn: "1 / span 2" }}>
                    <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontWeight: 600 }}>Tỉ lệ pass việc</div>
                        <div style={{ fontSize: "0.875rem", color: "#475569" }}>Trong 2–4 tháng</div>
                      </div>
                      <div style={{ fontSize: "1.875rem", fontWeight: "bold" }}>87%</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
