const courses = [
  {
    title: "Full-Stack Web NodeJS + React",
    time: "4 - 6 tháng",
    price: "8.900.000đ",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Frontend Pro React & NextJS",
    time: "3 - 4 tháng",
    price: "6.900.000đ",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Backend với NodeJS",
    time: "3 - 4 tháng",
    price: "6.900.000đ",
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mobile App với React Native",
    time: "3 - 4 tháng",
    price: "6.900.000đ",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CourseSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Khóa học nổi bật
            </h2>
            <p className="mt-3 text-slate-600">
              Chọn lộ trình phù hợp với mục tiêu của bạn.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700">
            Tư vấn lộ trình
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={course.img}
                alt={course.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="min-h-[48px] font-extrabold text-slate-950">
                  {course.title}
                </h3>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>{course.time}</span>
                  <span>Online</span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-blue-600">
                  {course.price}
                </p>

                <button className="mt-5 w-full rounded-xl border border-blue-200 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}