import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { FaUserTie, FaMagic, FaCode, FaShieldAlt } from 'react-icons/fa';

export default function FeatureGrid() {
  const features = [
    {
      icon: <FaUserTie className="w-6 h-6 text-indigo-600" />,
      title: "Mentor 1–1",
      desc: "Kèm cặp trực tiếp theo năng lực và mục tiêu nghề nghiệp của bạn.",
    },
    {
      icon: <FaMagic className="w-6 h-6 text-indigo-600" />,
      title: "Lộ trình cá nhân hoá",
      desc: "Thiết kế lộ trình học phù hợp từ nền tảng đến thực chiến.",
    },
    {
      icon: <FaCode className="w-6 h-6 text-indigo-600" />,
      title: "Dự án thực chiến",
      desc: "Xây dự án chuẩn production: Node.js, React, Database, DevOps.",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-indigo-600" />,
      title: "Cam kết đầu ra",
      desc: "Portfolio + phỏng vấn thử + kết nối doanh nghiệp công nghệ.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Vì sao chọn DaykemIT?</h2>
          <p className="mt-2 text-slate-600">
            Chúng tôi tập trung vào hiệu quả học tập và giá trị nghề nghiệp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card
              key={f.title}
              className="h-full shadow-md rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader
                avatar={
                  <div className="p-2 rounded-xl bg-indigo-50">
                    {f.icon}
                  </div>
                }
                title={<h3 className="font-semibold">{f.title}</h3>}
              />
              <CardContent>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
