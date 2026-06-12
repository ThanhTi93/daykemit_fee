const testimonials = [
  {
    name: "Nguyễn Minh Quân",
    job: "Frontend Developer tại FPT",
    content:
      "Nhờ lộ trình rõ ràng và mentor 1-1, mình tự tin chuyển ngành và có portfolio xin việc tốt.",
  },
  {
    name: "Trần Thảo Nhi",
    job: "FullStack Developer tại VNG",
    content:
      "Khóa học thực chiến, bám sát nhu cầu tuyển dụng. Học xong tự tin đi phỏng vấn.",
  },
  {
    name: "Phạm Đức Huy",
    job: "Backend Developer tại KMS",
    content:
      "Mentor hỗ trợ rất sát sao, sửa code chi tiết và hướng dẫn cách làm dự án chuẩn.",
  },
    {
    name: "Lê Văn Duẫn",
    job: "Backend Developer tại KMS",
    content:
      "Mentor hỗ trợ rất sát sao, sửa code chi tiết và hướng dẫn cách làm dự án chuẩn.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-950">
            Học viên nói gì về DaykemIT?
          </h2>
          <p className="mt-3 text-slate-600">
            Câu chuyện thật từ những học viên đã đi làm.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl bg-gradient-to-br to-white via-neutral-200 from-neutral-300 p-6 shadow-sm">
              <div className="mb-4 text-yellow-400">★★★★★</div>

              <p className="text-sm italic leading-6 text-slate-600">
                “{item.content}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                   <img className="h-12 w-12 rounded-full object-cover" src="https://i.pinimg.com/736x/81/54/b8/8154b8c2054dba26f8b769e6311efea4.jpg" alt="" />
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}