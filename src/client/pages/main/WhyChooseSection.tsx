import { useEffect, useRef, useState } from "react";

import {
  BookOpen,
  Briefcase,
  Headphones,
  ShieldCheck,
  Users,
  Code2,
} from "lucide-react";

const items = [
  {
    icon: <BookOpen />,
    title: "Lộ trình bài bản",
    desc: "Từ căn bản đến nâng cao, được thiết kế theo hướng đi làm thực tế.",
  },
  {
    icon: <Users />,
    title: "Mentor 1 kèm 1",
    desc: "Đồng hành sát sao, giải đáp và review code trong quá trình học.",
  },
  {
    icon: <Code2 />,
    title: "Dự án thực chiến",
    desc: "Làm sản phẩm thật để xây dựng portfolio xin việc.",
  },
  {
    icon: <ShieldCheck />,
    title: "Cam kết đầu ra",
    desc: "Hỗ trợ CV, phỏng vấn và giới thiệu việc làm.",
  },
  {
    icon: <Headphones />,
    title: "Học online linh hoạt",
    desc: "Học mọi lúc mọi nơi, phù hợp người đi làm.",
  },
  {
    icon: <Briefcase />,
    title: "Cộng đồng hỗ trợ",
    desc: "Cộng đồng học viên lớn mạnh, hỗ trợ nhau 24/7.",
  },
];

export default function WhyChooseSection() {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div
          className={`
            mx-auto max-w-2xl text-center
            transition-all duration-700 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          <h2 className="text-3xl font-extrabold text-slate-950">
            Vì sao nên chọn DaykemIT?
          </h2>

          <p className="mt-3 text-slate-600">
            Không chỉ học lý thuyết, bạn được hướng dẫn để làm được việc thật.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`
                rounded-2xl 
                bg-gradient-to-br from-neutral-300 via-neutral-300 to-white
                p-6 shadow-sm
                transition-all duration-700 ease-out
                hover:-translate-y-1 hover:shadow-lg
                ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {item.icon}
              </div>

              <h3 className="font-bold text-slate-950">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}