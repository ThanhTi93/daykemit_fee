import { useEffect, useRef, useState } from "react";

import {
  FaDesktop,
  FaReact,
  FaDatabase,
  FaBriefcase,
  FaGamepad,
} from "react-icons/fa";

import { SiNodedotjs } from "react-icons/si";

const roadmap = [
  {
    step: 1,
    title: "HTML, CSS, Git",
    desc: "Nền tảng web vững chắc",
    icon: <FaDesktop className="text-orange-500" />,
  },
  {
    step: 2,
    title: "Frontend ReactJS",
    desc: "Xây dựng giao diện hiện đại",
    icon: <FaReact className="text-sky-500" />,
  },
  {
    step: 3,
    title: "NodeJS",
    desc: "Xây dựng API với NodeJS",
    icon: <SiNodedotjs className="text-green-600" />,
  },
  {
    step: 4,
    title: "Database SQL",
    desc: "Làm chủ cơ sở dữ liệu, Query tối ưu",
    icon: <FaDatabase className="text-indigo-600" />,
  },
  {
    step: 5,
    title: "Dự án thực tế",
    desc: "Thực hành với dự án thực tế",
    icon: <FaBriefcase className="text-amber-600" />,
  },
  {
    step: 6,
    title: "Kỹ năng mềm",
    desc: "CV, phỏng vấn, kỹ năng đi làm",
    icon: <FaGamepad className="text-pink-600" />,
  },
];

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div
          className={`
            text-center transition-all duration-700 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <h2 className="text-3xl font-extrabold text-slate-950">
            Lộ trình học Full-Stack Developer
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            6 bước bài bản giúp bạn từ người mới trở thành Developer chuyên nghiệp.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Line nền */}
          <div className="absolute left-0 right-0 top-5 hidden border-t-2 border-dashed border-blue-100 md:block" />

          {/* Line chạy hiệu ứng */}
          <div
            className={`
              absolute left-0 top-5 hidden h-[2px] origin-left 
              bg-gradient-to-r from-blue-500 via-sky-400 to-amber-400
              transition-all duration-[1800ms] ease-out md:block
              ${isVisible ? "w-full scale-x-100" : "w-full scale-x-0"}
            `}
          />

          <div className="relative grid gap-10 md:grid-cols-6">
            {roadmap.map((item, index) => (
              <div
                key={item.step}
                className={`
                  group text-center transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-12 scale-95 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: isVisible ? `${index * 160}ms` : "0ms",
                }}
              >
                <div
                  className="
                    relative z-10 mx-auto flex h-12 w-12 items-center justify-center
                    rounded-full bg-gradient-to-br from-yellow-100 via-yellow-400 to-amber-700
                    text-lg font-bold text-white shadow-lg shadow-blue-200
                    transition-all duration-300
                    group-hover:scale-110 group-hover:shadow-xl
                  "
                >
                  <span className="relative z-10">{item.step}</span>

                  <span
                    className="
                      absolute inset-0 rounded-full bg-amber-300/40
                      opacity-0 blur-md transition duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>

                <div
                  className="
                    mt-5 flex justify-center text-4xl text-slate-800
                    transition-all duration-300
                    group-hover:-translate-y-1 group-hover:scale-110
                  "
                >
                  {item.icon}
                </div>

                <h3 className="mt-4 text-base font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`
            mt-10 text-center transition-all duration-700 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
          style={{
            transitionDelay: isVisible ? "900ms" : "0ms",
          }}
        >
          <a
            href="#courses"
            className="
              inline-flex items-center rounded-full
              bg-blue-50 px-5 py-2
              text-sm font-bold text-blue-600
              transition-all duration-300
              hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white hover:shadow-lg
            "
          >
            Xem chi tiết lộ trình →
          </a>
        </div>
      </div>
    </section>
  );
}