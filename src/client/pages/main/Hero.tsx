import { ArrowRight, Star, Users, Trophy, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-200 to-slate-100">
      <div className="mx-auto mt-4 grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trung tâm đào tạo lập trình uy tín
          </div>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Học lập trình để đi làm

          </h1>
          <p className="text-blue-600 text-3xl mt-2 md:text-5xl font-extrabold leading-tight tracking-tight">Từ số 0 → Dev chuyên nghiệp</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Lộ trình bài bản, mentor 1 kèm 1, dự án thực chiến và cam kết đồng
            hành đến khi bạn có việc làm.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
              Đăng ký tư vấn miễn phí
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
              Nhận lộ trình học
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D"].map((item) => (
                <div
                  key={item}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
                <span className="ml-2 text-sm font-bold text-slate-900">
                  4.9/5
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Hơn 1.200+ học viên đã đồng hành cùng DaykemIT
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-100">
            <img
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/481963181_530726233383163_7152354227429149213_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NfE8QemYWv0Q7kNvwFHe5F4&_nc_oc=Adq0G2ChrOKhwI4TJyQK5kb0l_dnaViufDekojGiMjLVMpHcf9Ck1aapliV186V_8yU&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=3Bs7OZtKCslLiOzZJUQsEg&_nc_ss=7a2a8&oh=00_Af-JsKDhRy6WChE-gm2qmwYe_XfuIYLHxUTCUJSDjvHl9A&oe=6A26E592"
              alt="Học viên DaykemIT đang học lập trình cùng mentor"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-2 gap-3 rounded-2xl  bg-black/40 text-amber-50 p-5 shadow-xl md:grid-cols-4">
            <Stat icon={<Users size={20} />} number="1,200+" label="Học viên" />
            <Stat icon={<Trophy size={20} />} number="87%" label="Có việc" />
            <Stat icon={<Users size={20} />} number="50+" label="Đối tác" />
            <Stat icon={<BookOpen size={20} />} number="120+" label="Giờ học" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="text-center flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div>
        <p className="text-lg font-extrabold">{number}</p>
        <p className="text-xs text-white">{label}</p>
      </div>

    </div>
  );
}