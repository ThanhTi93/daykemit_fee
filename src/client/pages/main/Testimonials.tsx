import React from "react";
import { Card, CardContent } from "@mui/material";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Nguyễn Minh Quân",
      role: "Frontend Dev @ Fintech",
      quote:
        "Nhờ lộ trình cá nhân hoá và mentor 1–1, mình pass job sau 3 tháng với portfolio rất thực tế.",
    },
    {
      name: "Trần Thảo Nhi",
      role: "Full-Stack Dev @ Startup",
      quote:
        "Khoá Full-Stack của DaykemIT cực kỳ thực chiến: API, auth, cache, deploy đều học và làm.",
    },
    {
      name: "Phạm Đức Huy",
      role: "Backend Dev @ SaaS",
      quote:
        "Mentor chỉ chi tiết clean code + kiến trúc, giúp mình bứt tốc ở vòng phỏng vấn hệ thống.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Học viên nói gì?
          </h2>
          <p className="text-slate-600 mt-2">Câu chuyện thật – kết quả thật.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="shadow-md rounded-2xl hover:shadow-lg transition-all"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-slate-700 italic">“{t.quote}”</p>
                <div className="mt-4 text-sm font-medium">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
