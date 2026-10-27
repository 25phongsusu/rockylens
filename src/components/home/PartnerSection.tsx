'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, ShieldCheck, Layers, Cpu, Award, ArrowUpRight } from 'lucide-react';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';

const partnerValues = [
  {
    icon: <Layers className="w-5 h-5 text-teal-400" />,
    title: 'Danh Mục Sản Phẩm Đa Dạng & Sẵn Kho',
    description: 'Hệ sinh thái sản phẩm phong phú từ đơn tròng, tròng đổi màu đến đa tròng kỹ thuật số, sẵn sàng cung ứng nhanh chóng từ 3 trung tâm phân phối.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-teal-400" />,
    title: 'Dịch Vụ Gia Công Kỹ Thuật Số (Lab RX 24h)',
    description: 'Xử lý chuẩn xác các đơn kính độ khó, độ lệch lớn và thông số cá nhân hóa trên hệ thống máy mài kỹ thuật số hiện đại trong vòng 24 giờ.',
  },
  {
    icon: <Award className="w-5 h-5 text-teal-400" />,
    title: 'Hỗ Trợ Đào Tạo & Tư Liệu Điểm Bán',
    description: 'Cung cấp tài liệu truyền thông, bộ công cụ thử quang học trực quan và hỗ trợ cập nhật kiến thức sản phẩm cho đội ngũ nhân viên cửa hàng.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
    title: 'Chính Sách Hợp Tác Bền Vững & Minh Bạch',
    description: 'Đồng hành cùng phát triển với các giải pháp quản lý tồn kho hợp lý, bảo hiểm thích nghi cho người đeo và dịch vụ hậu mãi chu đáo.',
  },
];

export default function PartnerSection() {
  return (
    <section id="doi-tac" className="py-20 px-6 bg-[#0E253A] text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-3xl">
          <div className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-2">
            Dành Cho Đối Tác &amp; Cửa Hàng Kính Mắt
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Cùng Rocky mở rộng cơ hội hợp tác
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            Chúng tôi cung cấp dải sản phẩm tròng kính chất lượng, dịch vụ gia công Lab RX chuẩn xác và chính sách đồng hành phát triển bền vững cùng các cửa hàng mắt kính trên toàn quốc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 p-6 rounded-3xl space-y-3 border border-slate-700/50 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {val.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Action Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-800/80 border border-slate-700/60 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-2xl font-bold text-white">
              Bạn Là Cửa Hàng Kính Mắt Đang Tìm Nguồn Cung Ứng Tin Cậy?
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Kết nối với đội ngũ phát triển đại lý của Rocky để tìm hiểu quy trình hợp tác, chính sách hỗ trợ điểm bán và tham quan dịch vụ Lab RX.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              type="button"
              onClick={openB2BQuoteModal}
              className="px-7 py-3.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base transition-colors text-center cursor-pointer shadow-xs inline-flex items-center space-x-2"
            >
              <span>Nhận Báo Giá Cho Đại Lý</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              href="/danh-cho-doi-tac/"
              className="px-7 py-3.5 rounded-full bg-slate-700 hover:bg-slate-600 text-white font-bold text-base transition-colors text-center inline-flex items-center space-x-2"
            >
              <span>Chính Sách Hợp Tác</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0933102653"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors text-center inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>0933 102 653</span>
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-slate-400">
          * Rocky bảo mật thông tin kinh doanh và không công khai bảng giá sỉ hay chính sách chiết khấu trên website đại chúng. Vui lòng liên hệ trực tiếp bộ phận B2B để nhận thông tin hợp tác chi tiết.
        </div>

      </div>
    </section>
  );
}
