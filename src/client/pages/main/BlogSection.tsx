const blogs = [
  "Top 10 câu hỏi thường gặp khi phỏng vấn ReactJS",
  "Lộ trình học Full-Stack cho người mới bắt đầu",
  "NodeJS là gì? Tại sao nên học NodeJS trong 2026",
  "Kinh nghiệm xin việc cho fresher developer",
];

export default function BlogSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Bài viết mới nhất
            </h2>
            <p className="mt-3 text-slate-600">
              Nội dung hữu ích giúp bạn học lập trình tốt hơn.
            </p>
          </div>

          <button className="hidden font-bold text-blue-600 md:block">
            Xem tất cả bài viết →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog, index) => (
            <article
              key={blog}
              className="overflow-hidden rounded-2xl  bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/500/300?random=${index + 1}`}
                alt={blog}
                className="h-40 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs text-slate-500">20/06/2026</p>
                <h3 className="mt-3 min-h-[56px] font-extrabold text-slate-950">
                  {blog}
                </h3>
                <button className="mt-4 text-sm font-bold text-blue-600">
                  Đọc thêm →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}