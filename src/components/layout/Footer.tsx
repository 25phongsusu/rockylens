import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--b2b-end)] text-slate-300 font-medium py-16 px-6 text-base border-t border-[var(--b2b-middle)]/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <img
              src="/assets/logo_rocky_transparent.png"
              alt="Rocky Lens"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-slate-400 font-medium text-base leading-relaxed">
              Thương hiệu tròng kính quang học Canada, phân phối độc quyền tại Việt Nam bởi Công ty Cổ phần Clearly Vietnam.
            </p>
            <div className="text-base text-slate-400 font-medium">
              Giấy phép kinh doanh số: 0316499823 do Sở Kế hoạch và Đầu tư TP.HCM cấp.
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <span className="text-white font-bold text-lg block">Danh Mục Tròng Kính</span>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/trong-kinh/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Khi Lái Xe Ban Đêm
                </Link>
              </li>
              <li>
                <Link href="/trong-kinh/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Khi Làm Việc Màn Hình Số
                </Link>
              </li>
              <li>
                <Link href="/trong-kinh/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Tròng Kính Đổi Màu Ngoài Trời
                </Link>
              </li>
              <li>
                <Link href="/trong-kinh/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Tròng Kính Mỏng Nhẹ Chịu Lực
                </Link>
              </li>
              <li>
                <Link href="/trong-kinh/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Tròng Kính Nhìn Rõ Xa Và Gần
                </Link>
              </li>
              <li>
                <Link href="/trong-kinh/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Chăm Sóc Thị Lực Trẻ Em
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology & Exploration */}
          <div className="space-y-3">
            <span className="text-white font-bold text-lg block">Công Nghệ &amp; Khám Phá</span>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/cong-nghe/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Lựa chọn vật liệu phù hợp
                </Link>
              </li>
              <li>
                <Link href="/rx-lab/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Gia công Lab RX kỹ thuật số
                </Link>
              </li>
              <li>
                <Link href="/cong-nghe/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Lớp phủ hạn chế bám bẩn
                </Link>
              </li>
              <li>
                <Link href="/trong-kinh/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Tìm hiểu các lựa chọn độ mỏng
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi/" className="text-slate-400 font-medium hover:text-white transition-colors">
                  Tiêu chuẩn quản lý y tế ISO 13485
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Distribution & Contact */}
          <div className="space-y-3">
            <span className="text-white font-bold text-lg block">Tiếp Nhận Đại Lý &amp; B2B</span>
            <div className="space-y-2 text-base text-slate-400 font-medium">
              <p><strong>Hotline B2B:</strong> 0933 102 653</p>
              <p><strong>Email Đại Lý:</strong> b2b@rockylens.com</p>
              <p><strong>Zalo Hợp Tác:</strong> 0933 102 653</p>
              <p><strong>Trung Tâm Kho:</strong> TP. Hồ Chí Minh &amp; Hà Nội</p>
              <p className="text-base text-slate-400 font-medium pt-2">
                Tiếp nhận yêu cầu đại lý: 8:00 - 18:00 (Thứ 2 - Thứ 7)
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-slate-400 font-medium">
          <div>
            &copy; 2026 Rocky Lens &amp; Clearly Vietnam. Bảo lưu mọi quyền.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-400 font-medium hover:text-white transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="#" className="text-slate-400 font-medium hover:text-white transition-colors">
              Quy định bảo hành
            </Link>
            <Link href="#" className="text-slate-400 font-medium hover:text-white transition-colors">
              Tiêu chuẩn kỹ thuật
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
