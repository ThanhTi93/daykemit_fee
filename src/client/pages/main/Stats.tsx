import React from 'react';

function Stats() {
     const items = [
    { value: "1,200+", label: "Học viên tốt nghiệp" },
    { value: "87%", label: "Tỉ lệ pass việc" },
    { value: "50+", label: "Đối tác tuyển dụng" },
    { value: "120+", label: "Giờ nội dung chất lượng" },
  ];
    return (
        <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.label} className="text-center p-6 rounded-2xl border bg-slate-50">
              <div className="text-3xl font-bold tracking-tight">{i.value}</div>
              <div className="text-sm text-slate-600 mt-1">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default Stats;
