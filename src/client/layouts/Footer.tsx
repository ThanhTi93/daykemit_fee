import React from 'react';
import { BiPhone, BiRocket } from 'react-icons/bi';
import { RiMvAiLine } from 'react-icons/ri';

function Footer() {
    return (
         <footer className="py-10 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg"><BiRocket className="w-5 h-5" /> DaykemIT</div>
            <p className="text-sm text-slate-600 mt-2">Học để làm – xây sự nghiệp công nghệ bền vững.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Khoá học</div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>Full‑Stack Web</li>
              <li>Frontend React</li>
              <li>Backend NestJS</li>
              <li>React Native</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Hỗ trợ</div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>FAQ</li>
              <li>Chính sách & điều khoản</li>
              <li>Bảo mật</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Liên hệ</div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li className="flex items-center gap-2"><BiPhone className="w-4 h-4"/> 0900 000 000</li>
              <li className="flex items-center gap-2"><RiMvAiLine className="w-4 h-4"/> hello@daykemit.vn</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} DaykemIT. All rights reserved.</div>
      </div>
    </footer>
    );
}

export default Footer;

