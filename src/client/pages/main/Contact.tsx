import React from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Liên hệ tư vấn miễn phí
            </h2>
            <p className="text-slate-600 mt-2">
              Để lại thông tin, chúng tôi sẽ gọi lại trong giờ hành chính.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-2">
                <FaPhone className="w-5 h-5" /> 0900 000 000
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5" /> hello@daykemit.vn
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" /> TP. Hồ Chí Minh & Hà Nội
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <Card className="shadow-lg">
            <CardContent className="pt-6 space-y-4">
              <form className="space-y-4">
                <TextField
                  fullWidth
                  label="Họ và tên"
                  variant="outlined"
                  placeholder="Nguyễn Văn A"
                  sx={{mb: 2}}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    variant="outlined"
                    placeholder="ban@email.com"
                  />
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    variant="outlined"
                    placeholder="09xx xxx xxx"
                  />
                </div>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Nhu cầu"
                  variant="outlined"
                  sx={{mb: 2}}
                  placeholder="Mô tả mục tiêu học, thời gian rảnh, kinh nghiệm…"
                />
                <Button
                  variant="contained"
                  fullWidth
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Gửi thông tin
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
