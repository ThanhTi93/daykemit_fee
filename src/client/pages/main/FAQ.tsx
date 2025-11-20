import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FaChevronRight } from "react-icons/fa";

function FAQ() {
  const items = [
    {
      q: "Học online hay offline?",
      a: "DaykemIT hỗ trợ cả 2 hình thức. Lịch học linh hoạt theo mentor và học viên.",
    },
    {
      q: "Chưa biết gì có học được không?",
      a: "Có. Lộ trình bắt đầu từ nền tảng, chú trọng tư duy và thực hành từng bước.",
    },
    {
      q: "Sau khoá có hỗ trợ tìm việc?",
      a: "Có. Review CV, luyện phỏng vấn, kết nối nhà tuyển dụng đối tác.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
          Câu hỏi thường gặp
        </h2>
        <div className="space-y-4">
          {items.map((it, idx) => (
            <Accordion
              key={idx}
              className="rounded-2xl bg-white shadow-sm"
              disableGutters
            >
              <AccordionSummary
                expandIcon={<FaChevronRight className="text-slate-500" />}
              >
                <Typography className="font-medium">{it.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-slate-600">{it.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
