import { FaUsers, FaBriefcase, FaChartLine, FaHandshake } from "react-icons/fa";

const results = [
  {
    icon: <FaUsers />,
    number: "1.200+",
    label: "Học viên đã tốt nghiệp",
  },
  {
    icon: <FaBriefcase />,
    number: "87%",
    label: "Có việc sau 6 tháng",
  },
  {
    icon: <FaChartLine />,
    number: "10 - 20 triệu",
    label: "Mức lương trung bình",
  },
  {
    icon: <FaHandshake />,
    number: "50+",
    label: "Đối tác tuyển dụng",
  },
];

export default function ResultSection() {
  return (
    <section className="bg-gradient-to-r from-[#061b4f] via-[#0b2f8f] to-[#3b1fd6] py-8 text-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {results.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 text-2xl text-blue-200">
              {item.icon}
            </div>

            <div>
              <h3 className="text-2xl font-extrabold leading-none text-white">
                {item.number}
              </h3>

              <p className="mt-2 text-sm font-medium text-blue-100">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}