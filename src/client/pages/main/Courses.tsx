import React from "react";
import { Button, Card, CardContent, CardActions, Grid, CardHeader, Chip, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";

function Courses() {
    const courses = [
        {
            title: "Full-Stack Web: Node.js + React",
            level: "Beginner → Job-ready",
            desc: "Từ JS căn bản đến API, Auth, CI/CD, deploy thực tế.",
            tags: ["JavaScript", "Express", "MySQL", "Vercel"],
        },
        {
            title: "Frontend Pro với React & Next.js",
            level: "Frontend chuyên sâu",
            desc: "SSR/SSG, performance, state management, testing, SEO.",
            tags: ["Next.js", "Redux Toolkit", "SWR", "MUI"],
        },
        {
            title: "Backend chuẩn với NestJS",
            level: "Microservices",
            desc: "Clean Architecture, Validation, Queue, Cache, Scale.",
            tags: ["NestJS", "PostgreSQL", "Redis", "Docker"],
        },
        {
            title: "Mobile App với React Native",
            level: "iOS/Android",
            desc: "Từ layout đến API, push notification, publish store.",
            tags: ["RN", "Expo", "TypeScript", "Firebase"],
        },
    ];

    return (
        <section id="courses" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
                    <div>
                        <Typography variant="h4" className="font-bold text-slate-900">
                            Khoá học nổi bật
                        </Typography>
                        <Typography variant="body1" className="text-slate-600 mt-2">
                            Học theo lộ trình – làm dự án – phỏng vấn.
                        </Typography>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<FaChevronRight />}
                        href="#contact"
                        className="mt-4 sm:mt-0"
                    >
                        Tư vấn lộ trình
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {courses.map((c) => (
                        <div key={c.title} className="flex flex-col h-full">
                            <div className="h-full flex flex-col justify-between rounded-2xl shadow-md hover:shadow-lg transition p-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="text-lg font-semibold">{c.title}</h2>
                                        <span className="px-2 py-1 text-xs font-medium text-white bg-purple-500 rounded">
                                            {c.level}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 min-h-[48px]">{c.desc}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {c.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2 py-1 rounded bg-slate-100 text-gray-700"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <a
                                        href="#contact"
                                        className="w-full block text-center border border-gray-300 text-gray-700 rounded-lg py-2 hover:bg-gray-100 transition"
                                    >
                                        Nhận syllabus
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

export default Courses;
