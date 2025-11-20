import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "2.5 triệu / tháng",
      points: [
        "Lộ trình nền tảng JS",
        "Thực hành 2 dự án",
        "Mentor định kỳ (2 buổi/tháng)",
      ],
      cta: "Đăng ký học thử",
      highlight: false,
    },
    {
      name: "Pro",
      price: "4.9 triệu / tháng",
      points: [
        "Lộ trình Full-Stack",
        "4 dự án thực chiến + review CV",
        "Mentor 1–1 hàng tuần",
      ],
      cta: "Bắt đầu ngay",
      highlight: true,
    },
    {
      name: "Career",
      price: "7.9 triệu / tháng",
      points: [
        "Portfolio hoàn chỉnh",
        "Mock interview + kết nối DN",
        "Bảo hành hỗ trợ 3 tháng",
      ],
      cta: "Tư vấn lộ trình",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Học phí & gói hỗ trợ
          </h2>
          <p className="text-slate-600 mt-2">
            Chọn gói phù hợp với mục tiêu của bạn.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`rounded-2xl shadow-md ${
                p.highlight ? "border-2 border-indigo-500" : ""
              }`}
            >
              <CardHeader
                title={
                  <div className="flex justify-between items-center">
                    <Typography variant="h6" className="font-semibold">
                      {p.name}
                    </Typography>
                    {p.highlight && <Chip label="Phổ biến" color="primary" />}
                  </div>
                }
                subheader={
                  <Typography
                    variant="h5"
                    className="mt-2 font-bold text-gray-900"
                  >
                    {p.price}
                  </Typography>
                }
              />
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start space-x-2 leading-relaxed"
                    >
                      <FaCheckCircle className="text-green-500 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions className="px-4 pb-4">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="rounded-xl"
                  href="#contact"
                >
                  {p.cta}
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
