import fpt from "../../../assets/fpt.png";
import kaas from "../../../assets/kaas.png";
import nashtech from "../../../assets/nashtech.png";
import google from "../../../assets/google.png";
import microsoft from "../../../assets/microsoft.png";
import vng from "../../../assets/vng.png";
import kyanon from "../../../assets/kyanon.png";

const companies = [
  { name: "FPT", logo: fpt },
  { name: "KMS", logo: kaas },
  { name: "NashTech", logo: nashtech },
  { name: "Google", logo: google },
  { name: "Microsoft", logo: microsoft },
  { name: "VNG", logo: vng },
  { name: "KYANON", logo: kyanon },
];

export default function CompanySection() {
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="bg-white py-14 overflow-hidden">
      <style>
        {`
          @keyframes scrollLeftToRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .company-slider {
            animation: scrollLeftToRight 28s linear infinite;
          }

          .company-slider:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Học viên của chúng tôi đang làm việc tại
        </p>

        <div className="relative overflow-hidden">
          {/* hiệu ứng mờ 2 bên */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="company-slider flex w-max gap-5">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="
                  flex h-24 w-44 shrink-0 items-center justify-center
                  rounded-2xl border border-slate-200
                  bg-white p-4 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:shadow-lg
                "
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="
                    h-12 w-full object-contain
                    transition-all duration-300
                    hover:scale-110
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}