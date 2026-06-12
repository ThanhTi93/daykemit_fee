
import {
  FaFacebookF,
  FaYoutube,
  FaGithub,
  FaRocket,
  FaPhoneAlt,
} from "react-icons/fa";
import LOGO from "../../assets/logo.png";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Box display="flex" alignItems="center"  >
              <FaRocket className="text-yellow-400 drop-shadow-lg" size={24} />
              <img className="W-20 h-10" src={LOGO} alt="" />
            </Box>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Trung tâm đào tạo lập trình thực chiến, đồng hành cùng học viên từ
              con số 0 đến khi có thể đi làm Developer.
            </p>

            <div className="mt-6 flex gap-3">
              <SocialIcon >
                <FaFacebookF size={16} />
              </SocialIcon>

              <SocialIcon>
                <FaYoutube size={18} />
              </SocialIcon>

              <SocialIcon>
                <FaGithub size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-white">Khóa học</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <FooterLink>Full-Stack Web</FooterLink>
              <FooterLink>Frontend React</FooterLink>
              <FooterLink>Backend NodeJS</FooterLink>
              <FooterLink>React Native</FooterLink>
              <FooterLink>Tất cả khóa học</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white">Hỗ trợ</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <FooterLink>FAQ</FooterLink>
              <FooterLink>Hướng dẫn thanh toán</FooterLink>
              <FooterLink>Chính sách bảo hành</FooterLink>
              <FooterLink>Điều khoản sử dụng</FooterLink>
              <FooterLink>Chính sách bảo mật</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white">Liên hệ</h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <FaPhoneAlt size={16} className="mt-1 text-blue-400" />
                <span>0378-486-992</span>
              </li>

              <li className="flex gap-3">
                <MdEmail size={20} className="mt-0.5 text-blue-400" />
                <span>daykemit.edu.vn@gmail.com</span>
              </li>

              <li className="flex gap-3">
                <MdLocationOn size={35} className="mt-0.5 text-blue-400" />
                <span>710 Trần Cao Vân, Phường Xuân Hà, Quận Thanh Khê, Thành Phố Đà Nẵng</span>
              </li>
            </ul>

            <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
              Đăng ký tư vấn
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 DaykemIT. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="transition hover:text-white">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a href="#" className="transition hover:text-white hover:underline">
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-blue-600 hover:text-white"
    >
      {children}
    </a>
  );
}