import React from 'react';
import { ProductSpecifications as Specs } from '@/features/products/product-types';

interface ProductSpecificationsProps {
  specifications: Specs;
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  const specRows = [
    { label: 'Chiết suất (Index)', value: specifications.refractiveIndex },
    { label: 'Thiết kế bề mặt', value: specifications.designType },
    { label: 'Dải công suất cầu (SPH)', value: specifications.sphRange },
    { label: 'Dải công suất trụ (CYL)', value: specifications.cylRange },
    { label: 'Độ cộng thêm (ADD)', value: specifications.addRange },
    { label: 'Đường kính phôi (Diameter)', value: specifications.diameter },
    { label: 'Lớp váng phủ (Coating)', value: specifications.coating },
    { label: 'Vật liệu phôi (Material)', value: specifications.material },
    { label: 'Chỉ số tán sắc (Abbe Value)', value: specifications.abbeValue },
    { label: 'Bảo vệ quang học', value: specifications.uvProtection },
    { label: 'Mã quản lý sản phẩm (SKU)', value: specifications.sku },
  ].filter((row) => Boolean(row.value));

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <h4 className="text-sm font-bold text-slate-800 tracking-wide uppercase">
          Bảng Thông Số Kỹ Thuật Quang Học Chi Tiết
        </h4>
      </div>
      <div className="divide-y divide-slate-100">
        {specRows.map((row, index) => (
          <div
            key={row.label}
            className={`grid grid-cols-1 sm:grid-cols-3 px-5 py-3 text-xs ${
              index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
            }`}
          >
            <div className="font-semibold text-slate-600 sm:col-span-1">
              {row.label}
            </div>
            <div className="text-slate-900 font-medium sm:col-span-2 mt-1 sm:mt-0">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
